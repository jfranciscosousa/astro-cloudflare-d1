import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";

export function buildClient(db: D1Database) {
  const adapter = new PrismaD1(db);
  const prisma = new PrismaClient({ adapter });

  return prisma;
}
