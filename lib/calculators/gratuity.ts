export interface GratuityInput {
  basicSalaryMonthly: number;
  firstWorkingDay?: string;
  lastWorkingDay?: string;
}

export interface GratuityResult {
  dailyWage: number;
  yearsOfService: number;
  firstFiveYearsAmount: number;
  additionalYearsAmount: number;
  totalGratuity: number;
}

function roundCurrency(value: number): number {
  return Math.round(value * 100) / 100;
}

function calculateYearsOfService(firstWorkingDay?: string, lastWorkingDay?: string): number {
  if (!firstWorkingDay || !lastWorkingDay) return 0;
  const start = new Date(firstWorkingDay);
  const end = new Date(lastWorkingDay);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end <= start) return 0;
  const diffMs = end.getTime() - start.getTime();
  return diffMs / (1000 * 60 * 60 * 24 * 365.25);
}

export function calculateUaeGratuity(input: GratuityInput): GratuityResult {
  const basicSalaryMonthly = Math.max(0, input.basicSalaryMonthly || 0);
  const yearsOfService = Math.max(0, calculateYearsOfService(input.firstWorkingDay, input.lastWorkingDay));

  const dailyWage = basicSalaryMonthly / 30;
  const firstFiveYears = Math.min(yearsOfService, 5);
  const additionalYears = Math.max(yearsOfService - 5, 0);

  const firstFiveYearsAmount = dailyWage * 21 * firstFiveYears;
  const additionalYearsAmount = dailyWage * 30 * additionalYears;
  const totalGratuity = firstFiveYearsAmount + additionalYearsAmount;

  return {
    dailyWage: roundCurrency(dailyWage),
    yearsOfService: roundCurrency(yearsOfService),
    firstFiveYearsAmount: roundCurrency(firstFiveYearsAmount),
    additionalYearsAmount: roundCurrency(additionalYearsAmount),
    totalGratuity: roundCurrency(totalGratuity),
  };
}
