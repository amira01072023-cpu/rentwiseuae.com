import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const prisma = new PrismaClient({
  adapter: new PrismaBetterSqlite3({
    url: process.env.DATABASE_URL!,
  }),
});

const seededSlugs = [
  'furnished-room-al-nahda-dubai-near-metro',
  'bedspace-deira-for-male-executives',
  'master-room-muwaileh-commercial-family-flat',
  'bedspace-al-taawun-close-to-dubai-border',
  'room-khalifa-city-with-private-bath',
];

async function main() {
  const result = await prisma.listing.deleteMany({
    where: {
      slug: {
        in: seededSlugs,
      },
    },
  });

  console.log(`Deleted ${result.count} seeded listings.`);
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
