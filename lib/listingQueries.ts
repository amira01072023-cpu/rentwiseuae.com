import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';

type PrismaListing = Prisma.ListingGetPayload<Record<string, never>>;

export type AppListing = PrismaListing & {
  tagsList: string[];
};

function mapListing(listing: PrismaListing): AppListing {
  return {
    ...listing,
    tagsList: safelyParseTags(listing.tags),
  };
}

function safelyParseTags(value: string) {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

const MAX_LISTING_AGE_DAYS = 30;

function getRecentListingsCutoffDate() {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - MAX_LISTING_AGE_DAYS);
  return cutoff;
}

export async function getApprovedListings(filters?: {
  city?: string;
  type?: 'room' | 'bedspace';
  minPrice?: number;
  maxPrice?: number;
  query?: string;
  sort?: 'newest' | 'price-low' | 'price-high';
}) {
  const where: Prisma.ListingWhereInput = {
    status: 'approved',
    createdAt: {
      gte: getRecentListingsCutoffDate(),
    },
  };

  if (filters?.city) {
    where.city = filters.city;
  }

  if (filters?.type) {
    where.type = filters.type;
  }

  if (filters?.minPrice || filters?.maxPrice) {
    where.priceMonthly = {};
    if (filters.minPrice) {
      where.priceMonthly.gte = filters.minPrice;
    }
    if (filters.maxPrice) {
      where.priceMonthly.lte = filters.maxPrice;
    }
  }

  if (filters?.query) {
    where.OR = [
      {
        title: {
          contains: filters.query,
        },
      },
      {
        area: {
          contains: filters.query,
        },
      },
      {
        city: {
          contains: filters.query,
        },
      },
      {
        summary: {
          contains: filters.query,
        },
      },
    ];
  }

  const orderBy =
    filters?.sort === 'price-low'
      ? [{ priceMonthly: 'asc' as const }]
      : filters?.sort === 'price-high'
        ? [{ priceMonthly: 'desc' as const }]
        : [{ createdAt: 'desc' as const }];

  const rows = await prisma.listing.findMany({
    where,
    orderBy,
  });

  return rows.map(mapListing);
}

export async function getApprovedListingBySlug(slug: string) {
  const row = await prisma.listing.findFirst({
    where: {
      slug,
      status: 'approved',
      createdAt: {
        gte: getRecentListingsCutoffDate(),
      },
    },
  });

  return row ? mapListing(row) : null;
}

export async function getListingCities() {
  const rows = await prisma.listing.findMany({
    where: {
      status: 'approved',
      createdAt: {
        gte: getRecentListingsCutoffDate(),
      },
    },
    select: { city: true },
    distinct: ['city'],
    orderBy: { city: 'asc' },
  });

  return rows.map((row) => row.city);
}

export async function getPendingListings() {
  const rows = await prisma.listing.findMany({
    where: { status: 'pending' },
    orderBy: [{ createdAt: 'desc' }],
  });

  return rows.map(mapListing);
}
