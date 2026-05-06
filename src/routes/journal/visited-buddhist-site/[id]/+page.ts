import { siteList } from "$lib/data/journal/buddhist-site";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
    const id = params.id;

    const index = siteList.findIndex((site) => site.id === id);
    const data = siteList[index];
    const totalData = siteList.length;

    const prev = index > 0 ? siteList[index - 1] : null;
    const next = index < totalData - 1 ? siteList[index + 1] : null;

    return {
        ...data,
        totalData,
        currentIndex: index,
        prevId: prev?.id ?? null,
        nextId: next?.id ?? null,
    };
};
