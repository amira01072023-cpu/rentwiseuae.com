export interface LeaveSalaryInput {
  basicSalaryMonthly: number;
  leaveDays: number;
}

export interface LeaveSalaryResult {
  dailyBasicRate: number;
  leaveSalaryAmount: number;
}

function roundCurrency(value: number): number {
  return Math.round(value * 100) / 100;
}

export function calculateLeaveSalary(input: LeaveSalaryInput): LeaveSalaryResult {
  const basicSalaryMonthly = Math.max(0, input.basicSalaryMonthly || 0);
  const leaveDays = Math.max(0, input.leaveDays || 0);

  const dailyBasicRate = basicSalaryMonthly / 30;
  const leaveSalaryAmount = dailyBasicRate * leaveDays;

  return {
    dailyBasicRate: roundCurrency(dailyBasicRate),
    leaveSalaryAmount: roundCurrency(leaveSalaryAmount),
  };
}
