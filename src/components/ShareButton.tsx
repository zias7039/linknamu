"use client";

import { useState } from "react";

type Props = {
  // share: 기기의 공유 시트를 열고, 지원하지 않으면 URL을 복사합니다.
  // copy: 항상 URL을 복사합니다.
  mode: "share" | "copy";
  className?: string;
};

export default function ShareButton({ mode, className = "" }: Props) {
  const [copied, setCopied] = useState(false);

  async function copyUrl() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  async function handleClick() {
    try {
      if (mode === "share" && navigator.share) {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
        return;
      }
      await copyUrl();
    } catch {
      // 사용자가 공유 시트를 닫았거나 클립보드 권한이 없는 경우는 조용히 무시합니다.
    }
  }

  const idleLabel = mode === "share" ? "공유" : "URL 복사";

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`rounded-full border-2 border-foreground px-4 py-1.5 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background ${className}`}
    >
      {copied ? "복사됨" : idleLabel}
    </button>
  );
}
