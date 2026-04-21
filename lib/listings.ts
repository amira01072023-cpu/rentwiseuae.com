export type ListingType = 'room' | 'bedspace';

export type Listing = {
  id: string;
  slug: string;
  type: ListingType;
  title: string;
  city: string;
  area: string;
  priceMonthly: number;
  deposit?: number;
  billsIncluded: boolean;
  furnished: boolean;
  bathroom: 'private' | 'shared';
  genderPreference: 'any' | 'male' | 'female';
  nationalityPreference?: string;
  availability: string;
  contactName: string;
  contactMethod: 'whatsapp' | 'phone';
  contactValue: string;
  summary: string;
  description: string;
  tags: string[];
};

export const listings: Listing[] = [
  {
    id: 'lst-001',
    slug: 'furnished-room-al-nahda-dubai-near-metro',
    type: 'room',
    title: 'Furnished room in Al Nahda Dubai near metro access',
    city: 'Dubai',
    area: 'Al Nahda Dubai',
    priceMonthly: 3200,
    deposit: 1000,
    billsIncluded: true,
    furnished: true,
    bathroom: 'shared',
    genderPreference: 'female',
    nationalityPreference: 'Working professional preferred',
    availability: 'Available now',
    contactName: 'Sara',
    contactMethod: 'whatsapp',
    contactValue: '+971500000001',
    summary: 'Clean furnished room for one working lady with easy access to supermarkets and transport.',
    description:
      'Simple furnished room in a shared apartment in Al Nahda Dubai. Suitable for one working lady looking for a clean and quiet setup. Bills are included. Please contact the poster directly to request current photos, exact location pin, and viewing timing.',
    tags: ['near metro', 'bills included', 'female preferred'],
  },
  {
    id: 'lst-002',
    slug: 'bedspace-deira-for-male-executives',
    type: 'bedspace',
    title: 'Executive bedspace in Deira for working men',
    city: 'Dubai',
    area: 'Deira',
    priceMonthly: 850,
    deposit: 300,
    billsIncluded: true,
    furnished: true,
    bathroom: 'shared',
    genderPreference: 'male',
    nationalityPreference: 'Any nationality',
    availability: 'From 1 May',
    contactName: 'Imran',
    contactMethod: 'whatsapp',
    contactValue: '+971500000002',
    summary: 'Affordable bedspace with Wi-Fi and basic furnishings in a central Deira location.',
    description:
      'Budget-friendly bedspace for working men in Deira. Furnished and ready to move in. Bills included. Contact the poster for bed layout, house rules, and photos before arranging a visit.',
    tags: ['budget', 'central location', 'male preferred'],
  },
  {
    id: 'lst-003',
    slug: 'master-room-muwaileh-commercial-family-flat',
    type: 'room',
    title: 'Master room in Muwaileh Commercial in family flat',
    city: 'Sharjah',
    area: 'Muwaileh Commercial',
    priceMonthly: 2400,
    deposit: 800,
    billsIncluded: false,
    furnished: false,
    bathroom: 'private',
    genderPreference: 'any',
    nationalityPreference: 'Couple or working professional',
    availability: 'Available now',
    contactName: 'Naveed',
    contactMethod: 'phone',
    contactValue: '+971500000003',
    summary: 'Private master room with attached bathroom in a quieter family-style apartment.',
    description:
      'Master room with attached bathroom in Muwaileh Commercial. Good fit for a couple or working professional who wants more privacy than a standard partition or bedspace. Contact the poster to request photos and building details.',
    tags: ['private bath', 'family flat', 'spacious'],
  },
  {
    id: 'lst-004',
    slug: 'bedspace-al-taawun-close-to-dubai-border',
    type: 'bedspace',
    title: 'Bedspace in Al Taawun close to Dubai border',
    city: 'Sharjah',
    area: 'Al Taawun',
    priceMonthly: 700,
    deposit: 200,
    billsIncluded: true,
    furnished: true,
    bathroom: 'shared',
    genderPreference: 'female',
    nationalityPreference: 'Any nationality',
    availability: 'Available now',
    contactName: 'Amina',
    contactMethod: 'whatsapp',
    contactValue: '+971500000004',
    summary: 'Affordable female bedspace option near the Dubai-Sharjah border for commuters.',
    description:
      'Simple female bedspace in Al Taawun with furnished setup and utilities included. Suitable for someone prioritising value and border access. Ask the poster directly for photos, nearby landmarks, and occupancy details.',
    tags: ['female preferred', 'border access', 'bills included'],
  },
  {
    id: 'lst-005',
    slug: 'room-khalifa-city-with-private-bath',
    type: 'room',
    title: 'Room in Khalifa City with private bathroom',
    city: 'Abu Dhabi',
    area: 'Khalifa City',
    priceMonthly: 2800,
    deposit: 1000,
    billsIncluded: true,
    furnished: true,
    bathroom: 'private',
    genderPreference: 'any',
    nationalityPreference: 'Working professional preferred',
    availability: 'From 5 May',
    contactName: 'Rahman',
    contactMethod: 'whatsapp',
    contactValue: '+971500000005',
    summary: 'Furnished room with attached bathroom in a calm residential area of Khalifa City.',
    description:
      'Comfortable furnished room in Khalifa City with private bathroom and utilities included. Good fit for a working professional wanting a quieter residential location. Request photos and exact villa details directly from the poster.',
    tags: ['private bath', 'quiet area', 'professional preferred'],
  },
];

export const cities = ['Dubai', 'Abu Dhabi', 'Sharjah'];

export function getListingBySlug(slug: string) {
  return listings.find((listing) => listing.slug === slug);
}

export function getListingsByType(type?: ListingType) {
  if (!type) return listings;
  return listings.filter((listing) => listing.type === type);
}
