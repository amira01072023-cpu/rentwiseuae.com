import { MinMaxCost, PropertyType, UtilityBand } from '../types';

export function averageRange(range?: MinMaxCost): number {
  if (!range) return 0;
  return (range.min + range.max) / 2;
}

export function normalizePositiveNumber(value: number, fallback = 0): number {
  if (!Number.isFinite(value) || value < 0) return fallback;
  return value;
}

export function getMovingBandKey(propertyType: PropertyType): 'small' | 'medium' | 'large' {
  if (propertyType === 'studio' || propertyType === 'room') return 'small';
  if (propertyType === '1br' || propertyType === '2br') return 'medium';
  return 'large';
}

export function utilityBandToMonthlyEstimate(utilityBand: UtilityBand): number {
  switch (utilityBand) {
    case 'low':
      return 250;
    case 'medium':
      return 450;
    case 'high':
      return 700;
    default:
      return 450;
  }
}

export function roundCurrency(value: number): number {
  return Math.round(value * 100) / 100;
}
