<script lang="ts">
    let { children } = $props();
</script>

<svelte:head>
    <link rel="canonical" href="https://derizhy.com/journal" />
</svelte:head>

<div class="bg-[url('$lib/assets/svg/background.svg')] bg-repeat pb-40">
    {@render children()}
</div>
