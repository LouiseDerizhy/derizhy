import { imageRender } from "$lib/image-render";
import type { BuddhistSite, JournalData } from "$lib/type/data-type";

export const buddhisSiteIntro: JournalData = {
    title: "Introduction",
    paragraph: [
        "I've always been fascinated by the architecture of Buddhist sites. Each place carries its own cultural flavor. As taught by Gautama Buddha, the Dharma was meant to **spread across** different regions while **adapting to local cultures**. That's why many vihara, temples, and stupas look so different from one another. They reflect both Buddhist teachings and the traditions of the people who built them.",
        "In this journal, I'm **documenting the Buddhist places** I've personally visited. The focus here is on sites that are rooted in Buddhism itself. I don't include places that are primarily associated with other traditions or mixed practices, such as Taoism, Confucianism, Hinduism, or syncretic beliefs like Tri Dharma or Maitreya-based movements. The goal is to keep this as a personal record of places that clearly originate from Buddhist teachings, along with the atmosphere and experiences I had there.",
    ],
};

export const siteList: BuddhistSite[] = [
    {
        id: "vihara-avalokitesvara-sibolga",
        name: "Vihara Avalokitesvara",
        location: "Sibolga, Indonesia",
        locationLink: "https://maps.app.goo.gl/fQfYSYwJVtyPK1g1A",
        pic: imageRender.viharaAvalokitesvaraSibolga,
        time: "4 April 2026",
        embedMap:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.9805650450317!2d98.7772517!3d1.7390880999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x302ef46de6e211dd%3A0xfdbe333a16e9dfb7!2sVihara%20Avalokitesvara%20Sibolga!5e0!3m2!1sen!2sid!4v1778058432175!5m2!1sen!2sid",
        story: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ],
    },
    {
        id: "vihara-samudera-maha-dharani-medan",
        name: "Vihara Samudera Maha Dharani",
        location: "Medan, Indonesia",
        locationLink: "https://maps.app.goo.gl/5FbJe9YnA49BhdTx9",
        pic: imageRender.viharaSamuderaMahaDharaniMedan,
        time: "8 April 2026",
        embedMap:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.933335403601!2d98.66695879999999!3d3.6027411000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031310057d50745%3A0xaca8f66100ce4b78!2sYayasan%20Samudera%20Maha%20Dharani!5e0!3m2!1sen!2sid!4v1778058466653!5m2!1sen!2sid",
        story: [],
    },
    {
        id: "vihara-ratana-stupa-agung-medan",
        name: "Vihara Ratana Stupa Agung",
        location: "Medan, Indonesia",
        locationLink: "https://maps.app.goo.gl/ZYPe3Nb171wRFQxU7",
        pic: imageRender.viharaRatanaStupaAgungMedan,
        time: "12 April 2026",
        embedMap:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.0429941948896!2d98.61345!3d3.577593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312f011d747243%3A0x82d1066330a7b101!2sVihara%20Ratana%20Stupa%20Agung.!5e0!3m2!1sen!2sid!4v1778058504659!5m2!1sen!2sid",
        story: [],
    },
    {
        id: "vihara-vimala-dharma-gunungsitoli",
        name: "Vihara Vimala Dharma",
        location: "Gunungsitoli - Nias, Indonesia",
        locationLink: "https://maps.app.goo.gl/iN4T9QBtdDV1zm5E9",
        pic: imageRender.viharaVimalaDharmaGunungsitoli,
        time: "18 April 2026",
        embedMap:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3988.8096750290297!2d97.6184535!3d1.2883666!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3025fb347e6f1601%3A0x9ab8e928c4c750e6!2sVihara%20Vimala%20Dharma!5e0!3m2!1sen!2sid!4v1778058552199!5m2!1sen!2sid",
        story: [],
    },
    {
        id: "vihara-buddha-loka-deli-serdang",
        name: "Vihara Buddha Loka",
        location: "Sibolangit - Deli Serdang, Indonesia",
        locationLink: "https://maps.app.goo.gl/JfRLhdpxCwZWdXDG9",
        pic: imageRender.viharaBuddhaLokaDeliserdang,
        time: "1 May 2026",
        embedMap:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.2744888787465!2d98.561002!3d3.2819843000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30311c12aaf147d9%3A0x102f81d6a3ab1e86!2sVihara%20Buddha%20Loka!5e0!3m2!1sen!2sid!4v1778058575581!5m2!1sen!2sid",
        story: [],
    },
    {
        id: "vihara-buddha-berastagi-karo",
        name: "Vihara Buddha Berastagi",
        location: "Berastagi - Karo, Indonesia",
        locationLink: "https://maps.app.goo.gl/ngGJ84ynkLJR3JvF8",
        pic: imageRender.viharaBuddhaBerastagiKaro,
        time: "1 May 2026",
        embedMap:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.6027079168!2d98.5083312!3d3.1985962999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303102eb6e21f3bb%3A0x1beaf4c1931bddfc!2sVihara%20Buddha%20Berastagi!5e0!3m2!1sen!2sid!4v1778058600885!5m2!1sen!2sid",
        story: [],
    },
    {
        id: "vihara-saddhavana-dairi",
        name: "Vihara Saddhavana",
        location: "Sitinjo - Dairi, Indonesia",
        locationLink: "https://maps.app.goo.gl/jFG82XVvPHgjiyFG6",
        pic: imageRender.viharaSaddhavanaDairi,
        time: "1 May 2026",
        embedMap:
            "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15941.081099882296!2d98.3620138!3d2.7359914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30303751a98b67c5%3A0xc4d8c85073eba803!2sVihara%20Saddhavana!5e0!3m2!1sen!2sid!4v1778058629889!5m2!1sen!2sid",
        story: [],
    },
];
