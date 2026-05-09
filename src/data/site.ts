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
  pronunciation: "たけぞむ",
  role: "IT エンジニア",
  tagline: "興味の向くままに様々なことに挑戦するプログラマー",
  description:
    "ものづくりが好きな IT エンジニア take20m（たけぞむ）のポートフォリオ。作ってきたプロダクトと考えていることをまとめています。",
  url: "https://example.pages.dev",
  locale: "ja",
  social: {
    github: "https://github.com/take20m/my-portfolio",
  },
};

export const nav = [
  { href: "/", label: "Top" },
  { href: "/works/", label: "Works" },
  { href: "/blog/", label: "Blog" },
] as const;
