import { getMongoClient } from "@/lib/mongodb";

type ClickDoc = { _id: string; count: number; updatedAt: Date };

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
