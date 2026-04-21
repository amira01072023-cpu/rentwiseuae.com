export interface NoticePeriodPayInput {
  basicSalaryMonthly: number;
  noticeDays: number;
}

export interface NoticePeriodPayResult {
  dailyBasicRate: number;
  noticePeriodPayAmount: number;
}

function roundCurrency(value: number): number {
  return Math.round(value * 100) / 100;
}

export function calculateNoticePeriodPay(input: NoticePeriodPayInput): NoticePeriodPayResult {
  const basicSalaryMonthly = Math.max(0, input.basicSalaryMonthly || 0);
  const noticeDays = Math.max(0, input.noticeDays || 0);

  const dailyBasicRate = basicSalaryMonthly / 30;
  const noticePeriodPayAmount = dailyBasicRate * noticeDays;

  return {
    dailyBasicRate: roundCurrency(dailyBasicRate),
    noticePeriodPayAmount: roundCurrency(noticePeriodPayAmount),
  };
}
