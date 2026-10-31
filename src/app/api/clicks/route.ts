import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { getClickCounts } from "@/lib/clicks";

// 모든 링크의 클릭 수를 { [링크 id]: 횟수 } 형태로 한 번에 돌려줍니다.
export async function GET() {
  try {
    const counts = await getClickCounts(links.map((link) => link.id));
    return NextResponse.json(counts, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("클릭 수 조회 실패", error);
    return NextResponse.json({ error: "클릭 수를 불러오지 못했습니다." }, { status: 500 });
  }
}
