import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const prisma = new PrismaClient({
  adapter: new PrismaBetterSqlite3({
    url: process.env.DATABASE_URL!,
  }),
});

async function main() {
  const rows = await prisma.listing.findMany({
    select: {
      slug: true,
      title: true,
      facebookPostUrl: true,
      summary: true,
      description: true,
      tags: true,
    },
    orderBy: {
      slug: 'asc',
    },
  });

  console.log(JSON.stringify(rows, null, 2));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
