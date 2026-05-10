export interface SiteSocial {
  github?: string;
  x?: string;
  bluesky?: string;
  zenn?: string;
  note?: string;
  email?: string;
}

export interface SiteData {
  name: string;
  handle: string;
  pronunciation?: string;
  role: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  social: SiteSocial;
}

export const site: SiteData = {
  name: "take20m",
  handle: "@take20m",
  pronunciation: "たけぞむ・たけぞえむ",
  role: "IT エンジニア",
  tagline: "興味の向くままに様々なことに挑戦するワクワクプログラマー",
  description:
    "take20mのポートフォリオサイト。体験したこと、作ったもの、考えたこと、読んだ本のメモなど雑多にまとめています。",
  url: "https://take20m.dev",
  locale: "ja",
  social: {
    github: "https://github.com/take20m",
  },
};

export const nav = [
  { href: "/", label: "Top" },
  { href: "/works/", label: "Works" },
  { href: "/blog/", label: "Blog" },
] as const;
