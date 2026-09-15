<script lang="ts">
    import type { SiteLocation } from "$lib/type/data-type";
    import * as maplibregl from "maplibre-gl";
    import "maplibre-gl/dist/maplibre-gl.css";
    import { onMount } from "svelte";

    export let locations: SiteLocation[] = [];
    let mapContainer: HTMLDivElement;

    onMount(() => {
        const map = new maplibregl.Map({
            container: mapContainer,
            style: "https://demotiles.maplibre.org/style.json",
            center: [98.7, 3.5],
            zoom: 6,
        });

        map.addControl(new maplibregl.NavigationControl(), "top-right");

        map.on("load", () => {
            locations.forEach((location) => {
                const marker = new maplibregl.Marker()
                    .setLngLat([
                        location.coordinates.longitude,
                        location.coordinates.latitude,
                    ])
                    .addTo(map);

                marker.getElement().addEventListener("click", () => {
                    const popupContent = `
						<div class="bg-gray flex w-[320px] flex-col rounded-sm text-white shadow-lg">
							<div class="h-48 overflow-hidden rounded-t-sm">
								<img
									src="${location.pic}"
									alt="${location.title}"
									class="h-full w-full object-cover"
								/>
							</div>
							<div class="flex flex-col p-5">
								<div class="mb-2 text-xs text-yellow">
									<span class="fa-regular fa-calendar mr-1"></span>
									${location.date}
								</div>
								<h3 class="text-base font-semibold">
									${location.title}
								</h3>
								<a
									href="${location.locationLink}"
									target="_blank"
									rel="noopener noreferrer"
									class="mt-1 text-sm text-gray-200"
								>
									<span class="fa-regular fa-location-dot"></span>
									${location.location}
								</a>
								<div class="mt-4 text-right text-sm text-yellow">
									<a href="${location.link}">
										Read Journal
										<span class="fa-regular fa-chevron-right"></span>
									</a>
								</div>
							</div>
						</div>
					`;

                    new maplibregl.Popup({
                        offset: 25,
                        maxWidth: "360px",
                    })
                        .setLngLat([
                            location.coordinates.longitude,
                            location.coordinates.latitude,
                        ])
                        .setHTML(popupContent)
                        .addTo(map);
                });
            });
        });

        return () => {
            map.remove();
        };
    });
</script>

<div
    bind:this={mapContainer}
    class="h-[600px] w-full overflow-hidden rounded-sm"
></div>
