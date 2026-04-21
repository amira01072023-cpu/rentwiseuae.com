import 'dotenv/config';
import { PrismaClient, BathroomType, ContactMethod, GenderPreference, ListingStatus, ListingType } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { listings } from '../lib/listings';

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  for (const listing of listings) {
    await prisma.listing.upsert({
      where: { slug: listing.slug },
      update: {
        type: listing.type as ListingType,
        title: listing.title,
        city: listing.city,
        area: listing.area,
        priceMonthly: listing.priceMonthly,
        deposit: listing.deposit,
        billsIncluded: listing.billsIncluded,
        furnished: listing.furnished,
        bathroom: listing.bathroom as BathroomType,
        genderPreference: listing.genderPreference as GenderPreference,
        nationalityPreference: listing.nationalityPreference,
        availability: listing.availability,
        contactName: listing.contactName,
        contactMethod: listing.contactMethod as ContactMethod,
        contactValue: listing.contactValue,
        summary: listing.summary,
        description: listing.description,
        tags: JSON.stringify(listing.tags),
        status: ListingStatus.approved,
      },
      create: {
        slug: listing.slug,
        type: listing.type as ListingType,
        title: listing.title,
        city: listing.city,
        area: listing.area,
        priceMonthly: listing.priceMonthly,
        deposit: listing.deposit,
        billsIncluded: listing.billsIncluded,
        furnished: listing.furnished,
        bathroom: listing.bathroom as BathroomType,
        genderPreference: listing.genderPreference as GenderPreference,
        nationalityPreference: listing.nationalityPreference,
        availability: listing.availability,
        contactName: listing.contactName,
        contactMethod: listing.contactMethod as ContactMethod,
        contactValue: listing.contactValue,
        summary: listing.summary,
        description: listing.description,
        tags: JSON.stringify(listing.tags),
        status: ListingStatus.approved,
      },
    });
  }
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
