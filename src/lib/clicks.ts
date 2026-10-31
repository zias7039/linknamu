import { getMongoClient } from "@/lib/mongodb";

type ClickDoc = { _id: string; count: number; updatedAt: Date };

// 클릭 기록이 아직 없는 링크는 결과에 없으므로, 호출하는 쪽에서 0으로 취급합니다.
export async function getClickCounts(
  linkIds: string[],
): Promise<Record<string, number>> {
  const client = await getMongoClient();
  const docs = await client
    .db()
    .collection<ClickDoc>("clicks")
    .find({ _id: { $in: linkIds } })
    .toArray();
  return Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));
}

export async function recordClick(linkId: string): Promise<void> {
  const client = await getMongoClient();
  await client
    .db()
    .collection<ClickDoc>("clicks")
    .updateOne(
      { _id: linkId },
      { $inc: { count: 1 }, $set: { updatedAt: new Date() } },
      { upsert: true },
    );
}
