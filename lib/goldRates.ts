type GoldApiResponse = {
  price?: number;
  updatedAt?: string;
  updatedAtReadable?: string;
};

export type GoldRates = {
  perGram24k: number;
  perGram22k: number;
  perGram21k: number;
  perGram18k: number;
  updatedAtLabel: string;
} | null;

const AED_PER_USD = 3.6725;
const TROY_OUNCE_TO_GRAMS = 31.1034768;

function roundToTwo(value: number) {
  return Math.round(value * 100) / 100;
}

export async function getLiveUaeGoldRates(): Promise<GoldRates> {
  try {
    const response = await fetch('https://api.gold-api.com/price/XAU/USD', {
      next: { revalidate: 300 },
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as GoldApiResponse;

    if (!data.price || Number.isNaN(data.price)) {
      return null;
    }

    const perGram24k = (data.price / TROY_OUNCE_TO_GRAMS) * AED_PER_USD;

    return {
      perGram24k: roundToTwo(perGram24k),
      perGram22k: roundToTwo((perGram24k * 22) / 24),
      perGram21k: roundToTwo((perGram24k * 21) / 24),
      perGram18k: roundToTwo((perGram24k * 18) / 24),
      updatedAtLabel: data.updatedAtReadable || data.updatedAt || 'live',
    };
  } catch {
    return null;
  }
}
