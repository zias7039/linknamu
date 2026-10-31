import type { LinkItem } from "@/data/profile";

// 카드는 /go/[id]를 가리켜 클릭 수를 기록한 뒤 실제 URL로 이동합니다.
// 방문자가 클릭하지 않아도 집계되지 않도록 prefetch가 일어나는 next/link 대신 <a>를 씁니다.
export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={`/go/${link.id}`}
      className="group flex min-h-14 items-center justify-between rounded-[20px] border border-white/75 bg-white/45 px-[22px] py-4 text-base font-semibold tracking-tight shadow-glass backdrop-blur-[18px] backdrop-saturate-150 transition duration-200 hover:-translate-y-px hover:bg-white/60 hover:shadow-glass-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:min-h-[60px] lg:rounded-[22px] lg:px-[26px] lg:py-[18px]"
    >
      <span>{link.title}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-muted transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  );
}
