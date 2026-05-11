<script lang="ts">
    import { page } from "$app/state";
    import favicon from "$lib/assets/svg/favicon.svg";
    import Footer from "$lib/custom-components/footer.svelte";
    import Header from "$lib/custom-components/header.svelte";
    import PortfolioHeader from "$lib/custom-components/portfolio-header.svelte";
    import ProgressBar from "$lib/custom-components/progress-bar.svelte";
    import { menu } from "$lib/data/menu";
    import AOS from "aos";
    import "aos/dist/aos.css";
    import { onMount } from "svelte";
    import "../app.css";

    let { children } = $props();

    let menuMetaData = $derived(
        menu.find((item) => item.link === page.url.pathname),
    );

    let metaTitle = $derived(menuMetaData?.title);
    let metaDescription = $derived(menuMetaData?.description);

    onMount(() => {
        AOS.init();
    });
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <title>Derizhy {metaTitle ? " - " + metaTitle : ""}</title>
    <meta name="description" content={metaDescription} />
</svelte:head>

<ProgressBar />

{#if page.url.pathname.startsWith("/portfolio")}
    <PortfolioHeader />
{:else}
    <Header />
{/if}

{@render children?.()}

<Footer />
