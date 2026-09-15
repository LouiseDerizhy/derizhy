<script lang="ts">
    import { PUBLIC_MAPTILER_KEY } from "$env/static/public";
    import type { SiteLocation } from "$lib/type/data-type";
    import workerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url";
    import "maplibre-gl/dist/maplibre-gl.css";
    import { onMount } from "svelte";
    import { SvelteMap } from "svelte/reactivity";
    import { fly } from "svelte/transition";

    export let locations: SiteLocation[] = [];

    let mapContainer: HTMLDivElement;

    let map: import("maplibre-gl").Map;
    let maplibregl: typeof import("maplibre-gl");

    let selectedLocation: SiteLocation | null = null;
    let markers: Map<string, import("maplibre-gl").Marker> = new SvelteMap();

    const DEFAULT_CENTER: [number, number] = [98.7, 3.5];
    const DEFAULT_ZOOM = 6;

    function createMarkerElement(location: SiteLocation) {
        const element = document.createElement("button");

        element.type = "button";
        element.className = `
			travel-map-marker
            group
            relative
            flex
            h-10
            w-10
            items-center
            justify-center
            focus:outline-none
		`;

        element.setAttribute("aria-label", `View ${location.title}`);
        element.innerHTML = `
            <span
                class="
                    marker-visual
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-white
                    bg-yellow
                    text-gray-900
                    shadow-lg
                    transition-transform
                    duration-200
                    will-change-transform
                    group-hover:scale-125
                "
            >
                <span class="fa-solid fa-location-dot text-lg"></span>
            </span>
        `;

        element.addEventListener("click", () => {
            selectLocation(location);
        });

        return element;
    }

    function updateMarkerState() {
        markers.forEach((marker, id) => {
            const element = marker.getElement();
            const visual = element.querySelector(".marker-visual");

            if (!visual) return;

            if (selectedLocation?.id === id) {
                visual.classList.add("scale-125");
                element.classList.add("z-10");
            } else {
                visual.classList.remove("scale-125");
                element.classList.remove("z-10");
            }
        });
    }

    function selectLocation(location: SiteLocation) {
        selectedLocation = location;

        updateMarkerState();

        map.flyTo({
            center: [
                location.coordinates.longitude,
                location.coordinates.latitude,
            ],
            zoom: Math.max(map.getZoom(), 9),
            speed: 1.2,
            curve: 1.4,
            padding: {
                left: window.innerWidth >= 768 ? 380 : 0,
                right: 0,
                top: 0,
                bottom: window.innerWidth < 768 ? 320 : 0,
            },
        });

        setTimeout(() => {
            map.resize();
        }, 350);
    }

    function closeDrawer() {
        selectedLocation = null;
        updateMarkerState();

        map.resize();
    }

    function fitAllLocations() {
        if (!locations.length) return;

        if (locations.length === 1) {
            const location = locations[0];

            map.flyTo({
                center: [
                    location.coordinates.longitude,
                    location.coordinates.latitude,
                ],
                zoom: 9,
            });

            return;
        }

        const bounds = new maplibregl.LngLatBounds();

        locations.forEach((location) => {
            bounds.extend([
                location.coordinates.longitude,
                location.coordinates.latitude,
            ]);
        });

        map.fitBounds(bounds, {
            padding: {
                top: 80,
                bottom: 80,
                left: 80,
                right: 80,
            },
            maxZoom: 10,
            duration: 1200,
        });
    }

    function formatDate(date: string) {
        const parsedDate = new Date(`${date}T00:00:00`);

        if (Number.isNaN(parsedDate.getTime())) {
            return date;
        }

        return new Intl.DateTimeFormat("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(parsedDate);
    }

    onMount(() => {
        void (async () => {
            maplibregl = await import("maplibre-gl");
            maplibregl.setWorkerUrl(workerUrl);

            map = new maplibregl.Map({
                container: mapContainer,
                style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${PUBLIC_MAPTILER_KEY}`,
                center: DEFAULT_CENTER,
                zoom: DEFAULT_ZOOM,
            });

            map.addControl(
                new maplibregl.NavigationControl({
                    showCompass: true,
                    showZoom: true,
                    visualizePitch: true,
                }),
                "top-right",
            );

            map.on("load", () => {
                locations.forEach((location) => {
                    const markerElement = createMarkerElement(location);

                    const marker = new maplibregl.Marker({
                        element: markerElement,
                        anchor: "bottom",
                    })
                        .setLngLat([
                            location.coordinates.longitude,
                            location.coordinates.latitude,
                        ])
                        .addTo(map);

                    markers.set(location.id, marker);
                });

                fitAllLocations();
            });
        })();

        return () => {
            markers.forEach((marker) => marker.remove());
            markers.clear();

            map?.remove();
        };
    });
</script>

<div class="relative h-[600px] w-full overflow-hidden rounded-sm md:h-[700px]">
    <!-- MAP -->
    <div bind:this={mapContainer} class="absolute inset-0 h-full w-full"></div>

    <!-- MAP CONTROLS -->
    <div class="absolute bottom-5 left-5 z-10 flex flex-col gap-2">
        <button
            type="button"
            class="bg-gray flex items-center gap-2 rounded-sm px-4 py-2 text-sm text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            onclick={fitAllLocations}
        >
            <span class="fa-regular fa-location-crosshairs"></span>

            <span class="hidden sm:inline"> Show All Places </span>
        </button>
    </div>

    <!-- DRAWER -->
    {#if selectedLocation}
        <!-- MOBILE BACKDROP -->
        <button
            type="button"
            aria-label="Close location details"
            class="absolute inset-0 z-20 bg-black/40 md:hidden"
            onclick={closeDrawer}
        ></button>

        <!-- DESKTOP DRAWER -->
        <aside
            in:fly={{ x: -380, duration: 400 }}
            out:fly={{ x: -380, duration: 300 }}
            class="bg-gray absolute top-0 bottom-0 left-0 z-30 flex w-full flex-col overflow-hidden text-white shadow-2xl md:w-[380px]"
        >
            <!-- CLOSE -->
            <button
                type="button"
                aria-label="Close location details"
                class="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black/80"
                onclick={closeDrawer}
            >
                <span class="fa-regular fa-xmark"></span>
            </button>

            <!-- IMAGE -->
            <div class="relative h-56 shrink-0 md:h-64">
                <img
                    src={selectedLocation.pic}
                    alt={selectedLocation.title}
                    class="h-full w-full object-cover"
                />

                <!-- IMAGE GRADIENT -->
                <div
                    class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent"
                ></div>

                <!-- DATE -->
                <div class="text-yellow absolute bottom-4 left-5 text-xs">
                    <span class="fa-regular fa-calendar mr-1"></span>

                    {formatDate(selectedLocation.date)}
                </div>
            </div>

            <!-- CONTENT -->
            <div class="flex min-h-0 grow flex-col overflow-y-auto">
                <div class="flex grow flex-col p-5 md:p-6">
                    <!-- TITLE -->
                    <h2 class="text-xl leading-tight font-semibold">
                        {selectedLocation.title}
                    </h2>

                    <!-- LOCATION -->
                    <a
                        href={selectedLocation.locationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="hover:text-yellow mt-2 text-sm text-gray-200 transition-colors duration-300"
                    >
                        <span class="fa-regular fa-location-dot mt-0.5 shrink-0"
                        ></span>

                        <span>
                            {selectedLocation.location}
                        </span>
                    </a>

                    <!-- DIVIDER -->
                    <div class="my-5 border-t border-white/10"></div>

                    <!-- DESCRIPTION -->
                    {#if selectedLocation.description}
                        <p class="text-sm leading-6 text-gray-300">
                            {selectedLocation.description}
                        </p>
                    {/if}

                    <!-- ACTIONS -->
                    <div class="mt-6 flex flex-col gap-3">
                        <a
                            href={selectedLocation.link}
                            class="bg-yellow flex items-center justify-center gap-2 rounded-sm px-4 py-3 text-sm text-gray-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            Read More
                            <span class="fa-regular fa-chevron-right"></span>
                        </a>

                        <a
                            href={selectedLocation.locationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex items-center justify-center gap-2 rounded-sm border border-white/15 px-4 py-3 text-sm text-gray-200 transition-all duration-300 hover:border-white/30 hover:bg-white/5"
                        >
                            <span class="fa-regular fa-map-location-dot"></span>
                            Open in Google Maps
                        </a>
                    </div>
                </div>
            </div>
        </aside>
    {/if}
</div>
