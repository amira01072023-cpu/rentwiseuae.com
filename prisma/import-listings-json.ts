import 'dotenv/config';
import { PrismaClient, type Prisma } from '@prisma/client';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const inputPath = resolve(process.cwd(), 'prisma/listings-export.json');

type ListingImportRow = Prisma.ListingUncheckedCreateInput & {
  updatedAt?: string | Date;
};

async function main() {
  const prisma = new PrismaClient();
  const rows = JSON.parse(readFileSync(inputPath, 'utf8')) as ListingImportRow[];

  for (const row of rows) {
    const { updatedAt, ...data } = row;

    await prisma.listing.upsert({
      where: { slug: data.slug },
      update: data,
      create: data,
    });
  }

  await prisma.$disconnect();
  console.log(`Imported ${rows.length} listings from ${inputPath}`);
}

main().catch(async (error) => {
  console.error(error);
  process.exit(1);
});
