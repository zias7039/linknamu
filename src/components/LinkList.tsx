"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

// 페이지가 열릴 때 모든 링크의 클릭 수를 한 번에 받아 옵니다.
// 받기 전(또는 실패했을 때)에는 0회로 보여 줍니다.
export default function LinkList({ links }: { links: LinkItem[] }) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/clicks", { cache: "no-store", signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
      .then(setCounts)
      .catch(() => {});
    return () => controller.abort();
  }, []);

  return (
    <ul className="mt-10 flex flex-col gap-3.5 lg:mt-12 lg:gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard link={link} count={counts[link.id] ?? 0} />
        </li>
      ))}
    </ul>
  );
}
