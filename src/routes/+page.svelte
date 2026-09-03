<script lang="ts">
    import SectionHome from "$lib/section/section-home.svelte";
    import SectionJournal from "$lib/section/section-journal.svelte";
</script>

<svelte:head>
    <link rel="canonical" href="https://derizhy.com" />
</svelte:head>

<SectionHome />

<div class="bg-[url('$lib/assets/svg/background.svg')] bg-repeat pb-40">
    <SectionJournal />
</div>
