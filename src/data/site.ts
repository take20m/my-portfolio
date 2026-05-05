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
  role: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  social: SiteSocial;
}

export const site: SiteData = {
  name: "TODO_NAME",
  handle: "TODO_HANDLE",
  role: "Web Engineer",
  tagline: "ものづくりが好きな Web エンジニアです。",
  description:
    "Web エンジニアのポートフォリオ。作ってきたプロダクトと考えていることをまとめています。",
  url: "https://example.pages.dev",
  locale: "ja",
  social: {
    github: "https://github.com/TODO_GITHUB",
  },
};

export const nav = [
  { href: "/", label: "Top" },
  { href: "/works/", label: "Works" },
  { href: "/about/", label: "About" },
] as const;
