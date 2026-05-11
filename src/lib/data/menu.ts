import type { Menu, MetaMenu } from "$lib/type/data-type";
import { journalMenu } from "./journal";
import { siteList } from "./journal/buddhist-site";

export const menuForNav: Menu[] = [
    {
        title: "Home",
        link: "/",
        subMenu: [
            { title: "Home", link: "#home" },
            { title: "Journal", link: "#journal" },
            { title: "Fun Fact", link: "#fun-fact" },
            { title: "Contact", link: "#footer" },
        ],
    },
    {
        title: "Portfolio",
        link: "/portfolio",
        subMenu: [
            { title: "Profile", link: "#profile" },
            { title: "Skill", link: "#skill" },
            { title: "Experience", link: "#experience" },
            { title: "Project", link: "#project" },
            { title: "Education", link: "#education" },
        ],
    },
    {
        title: "Journal",
        link: "/journal",
    },
];

export const menu: MetaMenu[] = [
    {
        title: "",
        link: "/",
        description:
            "Louise Derizhy - A Software Engineer, Speecuber, and Public Speaker",
    },
    {
        title: "Portfolio",
        link: "/portfolio",
        description:
            "Louise Derizhy - Software Engineer specializing in full stack development with Svelte, Tailwind CSS, and TypeScript.",
    },
    {
        title: "Journal",
        link: "/journal",
        description: "Just a random writing",
    },
    ...journalMenu,
    ...siteList,
];
