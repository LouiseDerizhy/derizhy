import { imageRender } from "$lib/image-render";
import type { JournalMenu } from "$lib/type/data-type";

export const journalMenu: JournalMenu[] = [
    {
        title: "Visited Buddhist Site",
        link: "/journal/visited-buddhist-site",
        description: "Buddhism is always acculturated with local culture",
        time: "21st June 2026",
        icon: { src: "fa-regular fa-vihara", type: "fa" },
        type: ["Spiritual"],
        keyword: ["Vihara", "Monastery", "Temple", "Buddhism", "Spiritual"],
    },
    {
        title: "The Way of Life",
        link: "/journal/the-way-of-life",
        description:
            "He was too OG that everyone started thinking he was a god",
        time: "25th October 2025",
        icon: { src: "fa-regular fa-hand-holding-seeding", type: "fa" },
        type: ["Spiritual"],
        keyword: ["Christian", "Buddhism", "Spiritual"],
    },
    {
        title: "Speedcubing",
        link: "/journal/speedcubing",
        description:
            "People missunderstood this as a brain game, but speedcubing is fun",
        time: "23rd October 2025",
        icon: { src: imageRender.cubeIcon, type: "svg" },
        type: ["Hobbies"],
        keyword: [
            "Speedcuber",
            "Rubik",
            "Cube",
            "3x3",
            "WCA",
            "Speedcubing",
            "Cubing",
        ],
    },
    {
        title: "My Organization Life",
        link: "/journal/my-organization-life",
        description:
            "I don't want to have an ordinary life, so I found a memorable life journey",
        time: "10th October 2025",
        icon: { src: "fa-regular fa-users", type: "fa" },
        type: ["Organization", "Hobbies"],
        keyword: ["Organization"],
    },
];
