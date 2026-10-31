import { MongoClient } from "mongodb";

// 개발 모드 핫 리로드와 서버리스 환경에서 연결이 중복 생성되지 않도록 전역에 보관합니다.
const globalForMongo = globalThis as unknown as {
  mongoClient?: Promise<MongoClient>;
};

export function getMongoClient(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    return Promise.reject(new Error("MONGODB_URI가 설정되지 않았습니다."));
  }
  if (!globalForMongo.mongoClient) {
    globalForMongo.mongoClient = new MongoClient(uri)
      .connect()
      .catch((error) => {
        // 연결 실패를 캐시하지 않아 다음 요청에서 다시 시도합니다.
        globalForMongo.mongoClient = undefined;
        throw error;
      });
  }
  return globalForMongo.mongoClient;
}
