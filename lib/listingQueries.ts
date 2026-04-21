import { getSupabaseServerClient } from '@/lib/supabase';

export type AppListing = {
  id: string;
  slug: string;
  type: 'room' | 'bedspace';
  title: string;
  city: string;
  area: string;
  priceMonthly: number;
  deposit: number | null;
  billsIncluded: boolean;
  furnished: boolean;
  bathroom: 'private' | 'shared';
  genderPreference: 'any' | 'male' | 'female';
  nationalityPreference: string | null;
  availability: string;
  contactName: string;
  contactMethod: 'whatsapp' | 'phone';
  contactValue: string;
  facebookPostUrl: string | null;
  summary: string;
  description: string;
  tags: string;
  status: 'draft' | 'pending' | 'approved' | 'rejected';
  createdAt: string;
  updatedAt: string;
  tagsList: string[];
};

type ListingRow = Omit<AppListing, 'tagsList'>;

function safelyParseTags(value: string) {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function mapListing(listing: ListingRow): AppListing {
  return {
    ...listing,
    tagsList: safelyParseTags(listing.tags),
  };
}

const MAX_LISTING_AGE_DAYS = 30;

function getRecentListingsCutoffIso() {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - MAX_LISTING_AGE_DAYS);
  return cutoff.toISOString();
}

export async function getApprovedListings(filters?: {
  city?: string;
  type?: 'room' | 'bedspace';
  minPrice?: number;
  maxPrice?: number;
  query?: string;
  sort?: 'newest' | 'price-low' | 'price-high';
}) {
  const supabase = getSupabaseServerClient();
  const cutoff = getRecentListingsCutoffIso();

  let query = supabase
    .from('Listing')
    .select('*')
    .eq('status', 'approved')
    .gte('createdAt', cutoff);

  if (filters?.city) {
    query = query.eq('city', filters.city);
  }

  if (filters?.type) {
    query = query.eq('type', filters.type);
  }

  if (typeof filters?.minPrice === 'number') {
    query = query.gte('priceMonthly', filters.minPrice);
  }

  if (typeof filters?.maxPrice === 'number') {
    query = query.lte('priceMonthly', filters.maxPrice);
  }

  if (filters?.query) {
    const term = filters.query.trim();
    query = query.or(`title.ilike.%${term}%,area.ilike.%${term}%,city.ilike.%${term}%,summary.ilike.%${term}%`);
  }

  if (filters?.sort === 'price-low') {
    query = query.order('priceMonthly', { ascending: true });
  } else if (filters?.sort === 'price-high') {
    query = query.order('priceMonthly', { ascending: false });
  } else {
    query = query.order('createdAt', { ascending: false });
  }

  const { data, error } = await query;
  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((row) => mapListing(row as ListingRow));
}

export async function getApprovedListingBySlug(slug: string) {
  const supabase = getSupabaseServerClient();
  const cutoff = getRecentListingsCutoffIso();

  const { data, error } = await supabase
    .from('Listing')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'approved')
    .gte('createdAt', cutoff)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data ? mapListing(data as ListingRow) : null;
}

export async function getListingCities() {
  const supabase = getSupabaseServerClient();
  const cutoff = getRecentListingsCutoffIso();

  const { data, error } = await supabase
    .from('Listing')
    .select('city')
    .eq('status', 'approved')
    .gte('createdAt', cutoff)
    .order('city', { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return Array.from(new Set((data ?? []).map((row) => String(row.city)).filter(Boolean)));
}

export async function getPendingListings() {
  const supabase = getSupabaseServerClient();

  const { data, error } = await supabase
    .from('Listing')
    .select('*')
    .eq('status', 'pending')
    .order('createdAt', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((row) => mapListing(row as ListingRow));
}
