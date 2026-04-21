import { SalarySafetyInput, SalarySafetyResult } from '../types';
import { normalizePositiveNumber, roundCurrency } from './utils';

export function calculateSalarySafety(input: SalarySafetyInput): SalarySafetyResult {
  const monthlySalary = normalizePositiveNumber(input.monthlySalary);
  const trueMonthlyCost = normalizePositiveNumber(input.trueMonthlyCost);
  const schoolCostMonthly = normalizePositiveNumber(input.schoolCostMonthly ?? 0);
  const debtMonthly = normalizePositiveNumber(input.debtMonthly ?? 0);
  const safeMax = input.safeMax ?? 0.3;
  const stretchMax = input.stretchMax ?? 0.4;

  const housingRatio = monthlySalary > 0 ? trueMonthlyCost / monthlySalary : 0;

  let status: 'safe' | 'stretch' | 'risky' = 'risky';
  if (housingRatio <= safeMax) {
    status = 'safe';
  } else if (housingRatio <= stretchMax) {
    status = 'stretch';
  }

  const remainingAfterHousing = monthlySalary - trueMonthlyCost;
  const remainingAfterAllKnownCosts = monthlySalary - trueMonthlyCost - schoolCostMonthly - debtMonthly;

  return {
    housingRatio: roundCurrency(housingRatio),
    status,
    remainingAfterHousing: roundCurrency(remainingAfterHousing),
    remainingAfterAllKnownCosts: roundCurrency(remainingAfterAllKnownCosts),
  };
}
