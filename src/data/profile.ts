// 더미 데이터입니다. 실제 내용으로 바꾸고 다시 배포하세요.
// 링크의 id는 MongoDB에 클릭 수를 저장하는 키이므로, 한 번 정하면 바꾸지 마세요.

export type SocialType = "github" | "instagram" | "email";

export type SocialLink = {
  type: SocialType;
  label: string;
  href: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
  featured?: boolean;
  thumbnail?: string;
};

export const profile = {
  name: "김진영",
  bio: "배우고 만든 것을 꾸준히 기록하는 사람입니다.",
  avatar: "/avatar.svg",
};

export const socials: SocialLink[] = [
  { type: "github", label: "GitHub", href: "https://github.com" },
  { type: "instagram", label: "Instagram", href: "https://www.instagram.com" },
  { type: "email", label: "이메일", href: "mailto:hello@example.com" },
];

export const links: LinkItem[] = [
  { id: "github", title: "🐙 깃허브", url: "https://github.com/zias7039" },
  { id: "blog", title: "📝 블로그", url: "https://blog.naver.com/wlsdud7039" },
  { id: "email", title: "✉️ 이메일", url: "mailto:wlsdud7039@naver.com" },
];
