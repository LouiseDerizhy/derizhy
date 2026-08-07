<script lang="ts">
    type SkillBadgeMiniProps = {
        className: string;
    };

    let { className }: SkillBadgeMiniProps = $props();
</script>

<div
    class="text-gray flex size-9 cursor-pointer items-center justify-center rounded-full bg-white text-xs duration-300 hover:bg-white/80 sm:text-xl"
>
    <i class={className}></i>
</div>
