<script lang="ts">
    import { goto } from "$app/navigation";
    import { siteList } from "$lib/data/journal/buddhist-site";
    import { parseBoldHTML } from "$lib/utils";
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();

    const maxVisible = 5;
    let currentPage = $derived(data.currentIndex + 1);
    let totalPages = $derived(data.totalData);

    let start = $derived(Math.max(1, currentPage - Math.floor(maxVisible / 2)));
    let end = $derived(start + maxVisible - 1);

    let adjustedStart = $derived(
        end > totalPages ? Math.max(1, totalPages - maxVisible + 1) : start,
    );

    let adjustedEnd = $derived(end > totalPages ? totalPages : end);

    let pages = $derived(
        Array.from(
            { length: adjustedEnd - adjustedStart + 1 },
            (_, i) => adjustedStart + i,
        ),
    );
</script>

<section class="text-gray h-full min-h-screen w-full text-sm md:text-lg">
    <div
        class="flex flex-col gap-4 px-16 pt-48 min-[1536px]:px-[480px] sm:px-36 xl:px-80"
        data-aos="fade-right"
        data-aos-duration="2000"
    >
        <div class="border-b-2">
            <a
                href="./"
                class="mb-4 inline-block transition-transform duration-300 hover:-translate-x-2.5"
            >
                <span class="fa-regular fa-chevron-left"></span>
                Back to Visited Buddhist Site Journal
            </a>
            <h2 class="text-3xl font-semibold uppercase sm:text-4xl">
                {data.name}
            </h2>
            <p>
                <span class="fa-regular fa-location-dot"></span>
                {data.location}
            </p>
        </div>
        <div>
            <h3 class="text-xl font-semibold uppercase sm:text-2xl">
                My Experience
            </h3>
            <div class="flex flex-col sm:block">
                <div
                    class="border-lightgray float-left mr-4 mb-2 flex h-58 w-full items-center justify-center rounded-sm border md:w-54"
                >
                    <img
                        src={data.pic}
                        alt={data.name}
                        class="h-full w-full rounded-sm object-cover"
                    />
                </div>
                {#each data.story as p, i (i)}
                    <p class="mb-4 text-justify">
                        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                        {@html parseBoldHTML(p, false)}
                    </p>
                {/each}
            </div>
        </div>
        <div>
            <h3 class="text-xl font-semibold uppercase sm:text-2xl">
                Google Maps
            </h3>
            <div>
                <iframe
                    title={data.name}
                    src={data.embedMap}
                    class="h-[300px] w-full"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
        <div class="mt-8 flex justify-center gap-2 md:gap-4">
            <button
                aria-label="Previous Page"
                disabled={!data.prevId}
                onclick={() =>
                    data.prevId &&
                    goto(`/journal/visited-buddhist-site/${data.prevId}`)}
                class="border-gray hover:bg-gray flex h-12 w-12 items-center justify-center rounded-sm border transition-all duration-200 ease-out hover:text-white"
            >
                <span class="fa-regular fa-chevron-left"></span>
            </button>
            {#each pages as page (page)}
                <button
                    class="flex h-12 w-12 items-center justify-center rounded-sm border {page ===
                    currentPage
                        ? 'bg-gray font-semibold text-white'
                        : 'hover:bg-gray transition-all duration-200 ease-out hover:text-white'}"
                    onclick={() => {
                        const target = page - 1;
                        const id = siteList[target]?.id;
                        if (id) goto(`/journal/visited-buddhist-site/${id}`);
                    }}
                >
                    {page}
                </button>
            {/each}
            <button
                aria-label="Next Page"
                disabled={!data.nextId}
                onclick={() =>
                    data.nextId &&
                    goto(`/journal/visited-buddhist-site/${data.nextId}`)}
                class="border-gray hover:bg-gray flex h-12 w-12 items-center justify-center rounded-sm border transition-all duration-200 ease-out hover:text-white"
            >
                <span class="fa-regular fa-chevron-right"></span>
            </button>
        </div>
    </div>
</section>
