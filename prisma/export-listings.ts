import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const outputPath = resolve(process.cwd(), 'prisma/listings-export.json');

async function main() {
  const prisma = new PrismaClient({
    adapter: new PrismaBetterSqlite3({
      url: 'file:./dev.db',
    }),
  });

  const listings = await prisma.listing.findMany({
    orderBy: { createdAt: 'asc' },
  });

  writeFileSync(outputPath, JSON.stringify(listings, null, 2));
  await prisma.$disconnect();
  console.log(`Exported ${listings.length} listings to ${outputPath}`);
}

main().catch(async (error) => {
  console.error(error);
  process.exit(1);
});
