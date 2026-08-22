<script lang="ts">
    import {
        databaseSkill,
        frameworkSkill,
        languageSkill,
    } from "$lib/data/portfolio/skill";
    import type { IconImage } from "$lib/type/data-type";
</script>

<section
    id="skill"
    class="h-full min-h-screen w-full px-4 text-white sm:px-20 xl:px-40 2xl:px-80"
>
    <div class="pt-40">
        <h2
            class="text-gray mb-10 text-center text-5xl font-semibold sm:text-7xl"
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            Skills
        </h2>
        <div class="flex flex-col gap-4">
            <div
                class="flex h-full flex-wrap items-center justify-center gap-4 pb-12 sm:gap-8"
            >
                {#each languageSkill as item (item.skill)}
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <a
                            href={item.link}
                            target="_blank"
                            title={item.skill}
                            class="group bg-gray shadow-gray flex h-40 w-40 flex-col items-center justify-center gap-2 rounded-sm p-4 shadow-lg transition hover:scale-110 hover:duration-300 sm:hover:scale-125"
                        >
                            <div class="text-center text-5xl">
                                {@render renderIcon(item.skill, item.icon)}
                            </div>
                            <h4 class="text-center font-semibold">
                                {item.skill}
                            </h4>
                        </a>
                    </div>
                {/each}
            </div>
            <div
                class="flex h-full flex-wrap items-center justify-center gap-4 pb-12 sm:gap-8"
            >
                {#each frameworkSkill as item (item.skill)}
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <a
                            href={item.link}
                            target="_blank"
                            title={item.skill}
                            class="group bg-gray shadow-gray flex h-40 w-40 flex-col items-center justify-center gap-2 rounded-sm p-4 shadow-lg transition hover:scale-110 hover:duration-300 sm:hover:scale-125"
                        >
                            <div class="text-center text-5xl">
                                {@render renderIcon(item.skill, item.icon)}
                            </div>
                            <h4 class="text-center font-semibold">
                                {item.skill}
                            </h4>
                        </a>
                    </div>
                {/each}
            </div>
            <div
                class="flex h-full flex-wrap items-center justify-center gap-4 pb-12 sm:gap-8"
            >
                {#each databaseSkill as item (item.skill)}
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <a
                            href={item.link}
                            target="_blank"
                            title={item.skill}
                            class="group bg-gray shadow-gray flex h-40 w-40 flex-col items-center justify-center gap-2 rounded-sm p-4 shadow-lg transition hover:scale-110 hover:duration-300 sm:hover:scale-125"
                        >
                            <div class="text-center text-5xl">
                                {@render renderIcon(item.skill, item.icon)}
                            </div>
                            <h4 class="text-center font-semibold">
                                {item.skill}
                            </h4>
                        </a>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

{#snippet renderIcon(name: string, icon: IconImage)}
    {#if icon.type === "svg"}
        <img src={icon.src} alt={name} class="mx-auto h-12 w-12" />
    {:else}
        <span class={icon.src}></span>
    {/if}
{/snippet}
