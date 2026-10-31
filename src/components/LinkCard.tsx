import type { LinkItem } from "@/data/profile";

// 카드는 /go/[id]를 가리켜 클릭 수를 기록한 뒤 실제 URL로 이동합니다.
// 방문자가 클릭하지 않아도 집계되지 않도록 prefetch가 일어나는 next/link 대신 <a>를 씁니다.
export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={`/go/${link.id}`}
      className="flex items-center justify-between rounded-xl border-2 border-foreground px-5 py-4 text-base font-semibold transition-colors hover:bg-foreground hover:text-background"
    >
      <span>{link.title}</span>
      <span aria-hidden="true">→</span>
    </a>
  );
}
