import { MonthlyCostInput, MonthlyCostResult } from '../types';
import { normalizePositiveNumber, roundCurrency } from './utils';

export function calculateMonthlyCost(input: MonthlyCostInput): MonthlyCostResult {
  const annualRent = normalizePositiveNumber(input.annualRent);
  const monthlyRentEquivalent = annualRent / 12;

  const utilitiesMonthly = normalizePositiveNumber(input.utilitiesMonthly);
  const coolingMonthly = normalizePositiveNumber(input.coolingMonthly);
  const municipalityMonthly = normalizePositiveNumber(input.municipalityMonthly);
  const internetMonthly = normalizePositiveNumber(input.internetMonthly);
  const parkingMonthly = normalizePositiveNumber(input.parkingMonthly);
  const commuteMonthly = normalizePositiveNumber(input.commuteMonthly);
  const renterInsuranceMonthly = normalizePositiveNumber(input.renterInsuranceMonthly ?? 0);

  const trueMonthlyCost =
    monthlyRentEquivalent +
    utilitiesMonthly +
    coolingMonthly +
    municipalityMonthly +
    internetMonthly +
    parkingMonthly +
    commuteMonthly +
    renterInsuranceMonthly;

  return {
    monthlyRentEquivalent: roundCurrency(monthlyRentEquivalent),
    trueMonthlyCost: roundCurrency(trueMonthlyCost),
    breakdown: {
      utilitiesMonthly: roundCurrency(utilitiesMonthly),
      coolingMonthly: roundCurrency(coolingMonthly),
      municipalityMonthly: roundCurrency(municipalityMonthly),
      internetMonthly: roundCurrency(internetMonthly),
      parkingMonthly: roundCurrency(parkingMonthly),
      commuteMonthly: roundCurrency(commuteMonthly),
      renterInsuranceMonthly: roundCurrency(renterInsuranceMonthly),
    },
  };
}
