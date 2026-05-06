<script lang="ts">
    import {
        buddhisSiteIntro,
        siteList,
    } from "$lib/data/journal/buddhist-site";
    import { parseBoldHTML } from "$lib/utils";
</script>

<section class="text-gray h-full min-h-screen w-full text-sm md:text-lg">
    <div
        class="flex flex-col gap-4 px-16 pt-48 min-[1536px]:px-[480px] sm:px-36 xl:px-80"
        data-aos="fade-right"
        data-aos-duration="2000"
    >
        <div class="border-b-2">
            <h2 class="text-3xl font-semibold uppercase sm:text-4xl">
                Visited Buddhist Site
            </h2>
        </div>
        <div>
            <h3 class="text-xl font-semibold uppercase sm:text-2xl">
                {buddhisSiteIntro.title}
            </h3>
            <div>
                {#each buddhisSiteIntro.paragraph as p, i (i)}
                    <p class="mb-4 text-justify">
                        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                        {@html parseBoldHTML(p, false)}
                    </p>
                {/each}
            </div>
        </div>
        <div>
            <h3 class="mb-2 text-xl font-semibold uppercase sm:text-2xl">
                My Visited Buddhist Site List
            </h3>
            <div
                class="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 xl:gap-12"
            >
                {#each siteList as item (item.name)}
                    <div
                        class="bg-gray shadow-gray flex h-auto flex-col rounded-sm text-white shadow-lg"
                    >
                        <div
                            class="bg-lightgray flex h-60 items-center justify-center rounded-t-sm text-8xl text-white"
                        >
                            <img
                                src={item.pic}
                                alt={item.name}
                                class="h-full w-full rounded-t-sm object-cover"
                            />
                        </div>
                        <div class="flex grow flex-col p-6">
                            <div class="mb-2">
                                <div class="text-yellow text-xs">
                                    <span class="fa-regular fa-calendar mr-1"
                                    ></span>
                                    {item.time}
                                </div>
                            </div>
                            <h3 class="text-base font-semibold">
                                {item.name}
                            </h3>
                            <a
                                href={item.locationLink}
                                target="_blank"
                                class="text-sm text-gray-200 transition-all duration-300 hover:translate-x-2.5"
                            >
                                <span class="fa-regular fa-location-dot"></span>
                                {item.location}
                            </a>
                            <div class="text-yellow mt-2 flex grow items-end">
                                <a
                                    href={`/journal/visited-buddhist-site/${item.id}`}
                                    class="transition-all duration-300 hover:translate-x-2.5"
                                >
                                    Read More
                                    <span class="fa-regular fa-chevron-right"
                                    ></span>
                                </a>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
