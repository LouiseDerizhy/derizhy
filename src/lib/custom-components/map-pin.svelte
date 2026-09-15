<script lang="ts">
    import type { SiteLocation } from "$lib/type/data-type";

    export let location: SiteLocation;
</script>

<div
    class="bg-gray shadow-gray flex w-[320px] flex-col rounded-sm text-white shadow-lg"
>
    <div
        class="bg-lightgray flex h-48 items-center justify-center rounded-t-sm text-8xl text-white"
    >
        <img
            src={location.pic}
            alt={location.title}
            class="h-full w-full rounded-t-sm object-cover"
            loading="lazy"
        />
    </div>

    <div class="flex flex-col p-5">
        <div class="mb-2">
            <div class="text-yellow text-xs">
                <span class="fa-regular fa-calendar mr-1"></span>
                {location.date}
            </div>
        </div>

        <h3 class="text-base font-semibold">
            {location.title}
        </h3>

        <a
            href={location.locationLink}
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm text-gray-200 transition-all duration-300 hover:translate-x-2.5"
        >
            <span class="fa-regular fa-location-dot"></span>
            {location.location}
        </a>

        <div class="text-yellow mt-4 flex justify-end text-sm">
            <a
                href={location.link}
                class="transition-all duration-300 hover:translate-x-2.5"
            >
                Read Journal
                <span class="fa-regular fa-chevron-right"></span>
            </a>
        </div>
    </div>
</div>
