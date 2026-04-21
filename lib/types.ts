export type EmirateId = 'dubai' | 'abu-dhabi' | 'sharjah';

export type PropertyType = 'studio' | '1br' | '2br' | '3br' | 'villa' | 'room';
export type MetroAccessLevel = 'none' | 'partial' | 'strong';
export type CarDependenceLevel = 'low' | 'medium' | 'high';
export type UtilityBand = 'low' | 'medium' | 'high';
export type CostBand = 'low' | 'medium' | 'high';
export type TimeBand = 'light' | 'moderate' | 'heavy';

export interface RentBand {
  min: number;
  max: number;
}

export type DataStatus = 'planning-estimate' | 'reviewed-estimate' | 'recently-updated' | 'live-source';

export interface Area {
  id: string;
  emirateId: EmirateId;
  name: string;
  slug: string;
  propertyFocus: PropertyType[];
  rentBands: Partial<Record<PropertyType, RentBand>>;
  metroAccess: MetroAccessLevel;
  carDependence: CarDependenceLevel;
  utilityBand: UtilityBand;
  parkingDifficulty: 'low' | 'medium' | 'high';
  familyScore: number;
  schoolScore: number;
  bestFor: string[];
  areaType?: string;
  parentArea?: string;
  cityTown?: string;
  adminRegion?: string;
  sourceUrl?: string;
  dataStatus?: DataStatus;
  lastUpdated?: string;
  notes?: string;
}

export interface MinMaxCost {
  min: number;
  max: number;
}

export interface GlobalCostAssumptions {
  securityDepositRateUnfurnished: number;
  securityDepositRateFurnished: number;
  agentFeeRateDefault: number;
  internetSetupEstimate: number;
  movingCostBands: {
    small: MinMaxCost;
    medium: MinMaxCost;
    large: MinMaxCost;
  };
  salarySafetyBands: {
    safeMax: number;
    stretchMax: number;
  };
}

export interface EmirateCostAssumptions {
  registrationFeeEstimate: number | MinMaxCost;
  utilityDepositEstimate: number | MinMaxCost;
  municipalityMonthlyMethod: string;
}

export interface AreaCostOverride {
  internetMonthlyEstimate?: MinMaxCost;
  parkingMonthlyEstimate?: MinMaxCost;
  movingCostEstimate?: MinMaxCost;
}

export interface CostAssumptionsFile {
  global: GlobalCostAssumptions;
  emirates: Record<EmirateId, EmirateCostAssumptions>;
  areaOverrides: Record<string, AreaCostOverride>;
}

export interface MoveInCostInput {
  annualRent: number;
  chequeCount: number;
  furnished: boolean;
  agentInvolved: boolean;
  registrationFee: number;
  utilityDeposit: number;
  internetSetupFee: number;
  movingCost: number;
  miscellaneousBuffer?: number;
  securityDepositRate: number;
  agentFeeRate: number;
}

export interface MoveInCostResult {
  firstPayment: number;
  securityDeposit: number;
  agentFee: number;
  registrationFee: number;
  utilityDeposit: number;
  internetSetupFee: number;
  movingCost: number;
  miscellaneousBuffer: number;
  totalMoveInCash: number;
}

export interface MonthlyCostInput {
  annualRent: number;
  utilitiesMonthly: number;
  coolingMonthly: number;
  municipalityMonthly: number;
  internetMonthly: number;
  parkingMonthly: number;
  commuteMonthly: number;
  renterInsuranceMonthly?: number;
}

export interface MonthlyCostResult {
  monthlyRentEquivalent: number;
  trueMonthlyCost: number;
  breakdown: {
    utilitiesMonthly: number;
    coolingMonthly: number;
    municipalityMonthly: number;
    internetMonthly: number;
    parkingMonthly: number;
    commuteMonthly: number;
    renterInsuranceMonthly: number;
  };
}

export interface SalarySafetyInput {
  monthlySalary: number;
  trueMonthlyCost: number;
  schoolCostMonthly?: number;
  debtMonthly?: number;
  safeMax?: number;
  stretchMax?: number;
}

export interface SalarySafetyResult {
  housingRatio: number;
  status: 'safe' | 'stretch' | 'risky';
  remainingAfterHousing: number;
  remainingAfterAllKnownCosts: number;
}

export interface AreaComparisonInput {
  areaA: Area;
  areaB: Area;
  monthlyCostA: number;
  monthlyCostB: number;
  moveInCashA?: number;
  moveInCashB?: number;
}

export interface AreaComparisonResult {
  cheaperMonthlyAreaId: string | null;
  cheaperMoveInAreaId: string | null;
  monthlyDifference: number;
  moveInDifference: number;
  summary: string[];
}
