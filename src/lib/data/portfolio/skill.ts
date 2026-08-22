import { imageRender } from "$lib/image-render";
import type { Skill } from "$lib/type/data-type";

export const languageSkill: Skill[] = [
    {
        skill: "TypeScript",
        icon: { src: "fa-brands fa-typescript", type: "fa" },
        link: "https://www.typescriptlang.org/",
    },
    {
        skill: "JavaScript",
        icon: { src: "fa-brands fa-js", type: "fa" },
        link: "https://www.javascript.com/",
    },
    {
        skill: "Java",
        icon: { src: "fa-brands fa-java", type: "fa" },
        link: "https://www.java.com/en/",
    },
    {
        skill: "SQL",
        icon: { src: "fa-regular fa-database", type: "fa" },
        link: "https://en.wikipedia.org/wiki/SQL",
    },
    {
        skill: "Python",
        icon: { src: "fa-brands fa-python", type: "fa" },
        link: "https://www.python.org/",
    },
];

export const frameworkSkill: Skill[] = [
    {
        skill: "Svelte",
        icon: { src: "fa-brands fa-svelte", type: "fa" },
        link: "https://svelte.dev/",
    },
    {
        skill: "Tailwind CSS",
        icon: { src: "fa-brands fa-tailwind-css", type: "fa" },
        link: "https://tailwindcss.com/",
    },
    {
        skill: "Spring Boot",
        icon: { src: imageRender.springbootIcon, type: "svg" },
        link: "https://spring.io/",
    },
];

export const databaseSkill: Skill[] = [
    {
        skill: "PostgreSQL",
        icon: { src: "fa-brands fa-postgresql", type: "fa" },
        link: "https://www.postgresql.org/",
    },
    {
        skill: "Redis",
        icon: { src: imageRender.redisIcon, type: "svg" },
        link: "https://redis.io/",
    },
    {
        skill: "MongoDB",
        icon: { src: imageRender.mongodbIcon, type: "svg" },
        link: "https://www.mongodb.com/",
    },
    {
        skill: "MySQL",
        icon: { src: imageRender.mysqlIcon, type: "svg" },
        link: "https://www.mysql.com/",
    },
];