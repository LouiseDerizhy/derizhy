<script lang="ts">
    import SectionFunFact from "$lib/section/section-fun-fact.svelte";
    import SectionHome from "$lib/section/section-home.svelte";
    import SectionJournal from "$lib/section/section-journal.svelte";
</script>

<svelte:head>
    <link rel="canonical" href="https://derizhy.com" />
</svelte:head>

<SectionHome />

<div class="bg-[url('$lib/assets/svg/bg-1.svg')] bg-repeat pb-40">
    <SectionJournal />

    <SectionFunFact />
</div>
