import { after, NextResponse } from "next/server";
import { links } from "@/data/profile";
import { recordClick } from "@/lib/clicks";

// 링크 카드는 /go/[id]를 가리킵니다. 클릭 수를 올린 뒤 실제 URL로 이동시킵니다.
export async function GET(_request: Request, ctx: RouteContext<"/go/[id]">) {
  const { id } = await ctx.params;
  const link = links.find((item) => item.id === id);
  if (!link) {
    return new NextResponse("Not Found", { status: 404 });
  }

  // 응답이 끝난 뒤에 기록하므로, DB가 느리거나 실패해도 방문자의 이동은 막지 않습니다.
  after(async () => {
    try {
      await recordClick(link.id);
    } catch (error) {
      console.error(`클릭 수 기록 실패 (${link.id})`, error);
    }
  });

  return NextResponse.redirect(link.url, 302);
}
