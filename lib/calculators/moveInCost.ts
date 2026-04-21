import { MoveInCostInput, MoveInCostResult } from '../types';
import { normalizePositiveNumber, roundCurrency } from './utils';

export function calculateMoveInCost(input: MoveInCostInput): MoveInCostResult {
  const annualRent = normalizePositiveNumber(input.annualRent);
  const chequeCount = Math.max(1, Math.floor(normalizePositiveNumber(input.chequeCount, 1)));
  const securityDepositRate = normalizePositiveNumber(input.securityDepositRate);
  const agentFeeRate = input.agentInvolved ? normalizePositiveNumber(input.agentFeeRate) : 0;
  const miscellaneousBuffer = normalizePositiveNumber(input.miscellaneousBuffer ?? 0);

  const firstPayment = annualRent / chequeCount;
  const securityDeposit = annualRent * securityDepositRate;
  const agentFee = annualRent * agentFeeRate;
  const registrationFee = normalizePositiveNumber(input.registrationFee);
  const utilityDeposit = normalizePositiveNumber(input.utilityDeposit);
  const internetSetupFee = normalizePositiveNumber(input.internetSetupFee);
  const movingCost = normalizePositiveNumber(input.movingCost);

  const totalMoveInCash =
    firstPayment +
    securityDeposit +
    agentFee +
    registrationFee +
    utilityDeposit +
    internetSetupFee +
    movingCost +
    miscellaneousBuffer;

  return {
    firstPayment: roundCurrency(firstPayment),
    securityDeposit: roundCurrency(securityDeposit),
    agentFee: roundCurrency(agentFee),
    registrationFee: roundCurrency(registrationFee),
    utilityDeposit: roundCurrency(utilityDeposit),
    internetSetupFee: roundCurrency(internetSetupFee),
    movingCost: roundCurrency(movingCost),
    miscellaneousBuffer: roundCurrency(miscellaneousBuffer),
    totalMoveInCash: roundCurrency(totalMoveInCash),
  };
}
