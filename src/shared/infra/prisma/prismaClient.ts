import { PrismaClient } from "@prisma/client";

let prismaClient: PrismaClient<
  {
    datasources: {
      db: {
        url: string | undefined;
      };
    };
  },
  never,
  false
>;

if (process.env.ENVIRONMENT === "local") {
  prismaClient = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL
      }
    }
  });
} else {
  prismaClient = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL
      }
    }
  });
}

export default prismaClient;
