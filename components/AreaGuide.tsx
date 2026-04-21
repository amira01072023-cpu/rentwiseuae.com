'use client';

import Link from 'next/link';
import { calculateMoveInCost } from '@/lib/calculators/moveInCost';
import { calculateMonthlyCost } from '@/lib/calculators/monthlyCost';
import { averageRange, getMovingBandKey, utilityBandToMonthlyEstimate } from '@/lib/calculators/utils';
import { getAreaById, getCostAssumptions } from '@/lib/data/loadAreas';
import { formatDataStatus, formatLastUpdated } from '@/lib/data/status';
import { PropertyType } from '@/lib/types';
import AssumptionsPanel from '@/components/AssumptionsPanel';
import NextStepsCard from '@/components/NextStepsCard';
import HowToUseTool from '@/components/HowToUseTool';

const assumptions = getCostAssumptions();

function formatAed(value: number) {
  return new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency: 'AED',
    maximumFractionDigits: 0,
  }).format(value);
}

function formatRange(min: number, max: number) {
  return `${formatAed(min)} - ${formatAed(max)}`;
}

export default function AreaGuide({
  areaId,
  propertyType,
  relatedCompareHref,
  relatedCompareLabel,
}: {
  areaId: string;
  propertyType: PropertyType;
  relatedCompareHref?: string;
  relatedCompareLabel?: string;
}) {
  const area = getAreaById(areaId);

  if (!area) {
    return <div className="rounded-2xl bg-amber-50 p-6 ring-1 ring-amber-200">Area data unavailable.</div>;
  }

  const rentBand = area.rentBands[propertyType];
  if (!rentBand) {
    return <div className="rounded-2xl bg-amber-50 p-6 ring-1 ring-amber-200">Property type data unavailable for this area.</div>;
  }

  const annualRent = averageRange(rentBand);
  const emirateAssumptions = assumptions.emirates[area.emirateId];
  const areaOverride = assumptions.areaOverrides[area.id] ?? {};

  const registrationFee =
    typeof emirateAssumptions.registrationFeeEstimate === 'number'
      ? emirateAssumptions.registrationFeeEstimate
      : averageRange(emirateAssumptions.registrationFeeEstimate);

  const utilityDeposit =
    typeof emirateAssumptions.utilityDepositEstimate === 'number'
      ? emirateAssumptions.utilityDepositEstimate
      : averageRange(emirateAssumptions.utilityDepositEstimate);

  const movingBand = assumptions.global.movingCostBands[getMovingBandKey(propertyType)];
  const movingCost = averageRange(areaOverride.movingCostEstimate ?? movingBand);

  const moveIn = calculateMoveInCost({
    annualRent,
    chequeCount: 4,
    furnished: false,
    agentInvolved: true,
    registrationFee,
    utilityDeposit,
    internetSetupFee: assumptions.global.internetSetupEstimate,
    movingCost,
    miscellaneousBuffer: 500,
    securityDepositRate: assumptions.global.securityDepositRateUnfurnished,
    agentFeeRate: assumptions.global.agentFeeRateDefault,
  });

  const municipalityMonthly = area.emirateId === 'dubai' ? annualRent * 0.05 / 12 : 0;

  const monthly = calculateMonthlyCost({
    annualRent,
    utilitiesMonthly: utilityBandToMonthlyEstimate(area.utilityBand),
    coolingMonthly: 250,
    municipalityMonthly,
    internetMonthly: averageRange(areaOverride.internetMonthlyEstimate ?? { min: 300, max: 450 }),
    parkingMonthly: averageRange(areaOverride.parkingMonthlyEstimate ?? { min: 0, max: 250 }),
    commuteMonthly: 500,
    renterInsuranceMonthly: 0,
  });

  return (
    <div className="space-y-6">
      <HowToUseTool
        steps={[
          'Use this page to get a quick feel for one area before you go deeper into calculators or comparisons.',
          'Read the area summary, fit indicators, and starter rent band first.',
          'Treat the move-in and monthly numbers as planning estimates, not live prices.',
          'Use the next-step links to compare this area or test it inside the main decision tools.',
        ]}
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold">{area.name} overview</h2>
          <p className="mt-3 text-slate-600">
            {area.name} is a {area.areaType ?? 'area'} in {area.cityTown ?? (area.emirateId === 'abu-dhabi' ? 'Abu Dhabi' : area.emirateId === 'sharjah' ? 'Sharjah' : 'Dubai')}, {area.emirateId === 'abu-dhabi' ? 'Abu Dhabi' : area.emirateId === 'sharjah' ? 'Sharjah' : 'Dubai'}, and is currently tagged in the starter dataset as best for {area.bestFor.join(', ')}.
          </p>
          <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm text-slate-700 ring-1 ring-slate-200">
            <span className="font-semibold text-slate-900">This area is best if:</span>{' '}
            you want a fit that leans toward {area.bestFor[0] ?? 'practical renting'} and you are comfortable with {area.carDependence} car dependence.
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 text-sm text-slate-700">
            <div className="flex justify-between gap-4"><span>Emirate</span><span>{area.emirateId === 'abu-dhabi' ? 'Abu Dhabi' : area.emirateId === 'sharjah' ? 'Sharjah' : 'Dubai'}</span></div>
            <div className="flex justify-between gap-4"><span>Area</span><span>{area.name}</span></div>
            <div className="flex justify-between gap-4"><span>Area type</span><span>{area.areaType ?? 'Not tagged yet'}</span></div>
            <div className="flex justify-between gap-4"><span>City / town</span><span>{area.cityTown ?? 'Not tagged yet'}</span></div>
            <div className="flex justify-between gap-4"><span>Admin region</span><span>{area.adminRegion ?? 'Not tagged yet'}</span></div>
            <div className="flex justify-between gap-4"><span>Parent area</span><span>{area.parentArea ?? 'None'}</span></div>
            <div className="flex justify-between gap-4"><span>Typical {propertyType} rent band</span><span>{formatRange(rentBand.min, rentBand.max)}</span></div>
            <div className="flex justify-between gap-4"><span>Data status</span><span>{formatDataStatus(area.dataStatus)}</span></div>
            <div className="flex justify-between gap-4"><span>Last updated</span><span>{formatLastUpdated(area.lastUpdated)}</span></div>
            <div className="flex justify-between gap-4"><span>Planning rent midpoint</span><span>{formatAed(annualRent)}</span></div>
            <div className="flex justify-between gap-4"><span>Metro access</span><span>{area.metroAccess}</span></div>
            <div className="flex justify-between gap-4"><span>Car dependence</span><span>{area.carDependence}</span></div>
            <div className="flex justify-between gap-4"><span>Family score</span><span>{area.familyScore}/5</span></div>
            <div className="flex justify-between gap-4"><span>School score</span><span>{area.schoolScore}/5</span></div>
          </div>

          {relatedCompareHref && relatedCompareLabel ? (
            <div className="mt-6">
              <Link href={relatedCompareHref} className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white hover:bg-slate-800 inline-block">
                {relatedCompareLabel}
              </Link>
            </div>
          ) : null}
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-sm">
            <h3 className="text-lg font-semibold">Typical move-in cash</h3>
            <div className="mt-3 text-3xl font-bold">{formatAed(moveIn.totalMoveInCash)}</div>
            <p className="mt-2 text-sm text-slate-300">Starter estimate for a typical {propertyType} in {area.name}.</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold">Typical monthly cost</h3>
            <div className="mt-3 text-3xl font-bold text-slate-900">{formatAed(monthly.trueMonthlyCost)}</div>
            <p className="mt-2 text-sm text-slate-600">Starter estimate including rent, utilities, internet, parking, cooling, and commute.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <AssumptionsPanel
          items={[
            'Area guides use midpoint rent values within the starter band for the selected property type.',
          'Rent bands are not live and may change regularly, so they should be treated as reviewed planning estimates.',
            'Move-in estimate assumes 4 cheques, unfurnished, and agent involved.',
            'Monthly estimate uses starter assumptions for utilities, cooling, parking, internet, and commute.',
            'Area scores and fit notes come from the product planning dataset and should be refined over time.',
          ]}
        />

        <NextStepsCard
          items={[
            {
              href: `/rent-decision?area=${area.id}&propertyType=${propertyType}`,
              label: `Run the full decision tool for ${area.name}`,
              description: 'Check move-in cash, monthly cost, and salary safety in one flow.',
            },
            {
              href: `/move-in-calculator?area=${area.id}&propertyType=${propertyType}`,
              label: 'Check move-in cash only',
              description: 'Useful if the biggest question is how much cash you need before signing.',
            },
            {
              href: `/monthly-cost-calculator?area=${area.id}`,
              label: 'Check true monthly cost',
              description: 'Break down the recurring cost after rent, utilities, internet, parking, and commute.',
            },
            ...(relatedCompareHref && relatedCompareLabel
              ? [{
                  href: relatedCompareHref,
                  label: relatedCompareLabel,
                  description: 'Open the related side-by-side comparison to compare tradeoffs more directly.',
                }]
              : []),
          ]}
        />
      </div>
    </div>
  );
}
