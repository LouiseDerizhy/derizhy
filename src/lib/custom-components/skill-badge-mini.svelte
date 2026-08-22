<script lang="ts">
    type SkillBadgeMiniProps = {
        className: string;
        title: string;
    };

    let { className, title }: SkillBadgeMiniProps = $props();
</script>

<div
    class="text-gray flex h-9 w-fit cursor-pointer items-center gap-2 rounded-full bg-white px-4 text-xs duration-300 hover:bg-white/80 sm:text-xl"
>
    <i class={className}></i>
    <div class="text-xs sm:text-sm">
        {title}
    </div>
</div>
