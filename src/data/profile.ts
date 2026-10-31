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
  name: "홍길동",
  bio: "한 줄 소개가 들어갈 자리입니다.",
  avatar: "/avatar-placeholder.svg",
};

export const socials: SocialLink[] = [
  { type: "github", label: "GitHub", href: "https://github.com" },
  { type: "instagram", label: "Instagram", href: "https://www.instagram.com" },
  { type: "email", label: "이메일", href: "mailto:hello@example.com" },
];

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com/example" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/in/example" },
  { id: "blog", title: "Blog", url: "https://example.com/blog" },
];
