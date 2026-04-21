import areas from '@/04-data/working/areas.json';
import assumptions from '@/04-data/working/cost-assumptions.json';
import { Area, CostAssumptionsFile, EmirateId } from '@/lib/types';

export function getAreas(): Area[] {
  return areas as Area[];
}

export function getAreaById(id: string): Area | undefined {
  return getAreas().find((area) => area.id === id);
}

export function getAreasByEmirate(emirateId: EmirateId): Area[] {
  return getAreas().filter((area) => area.emirateId === emirateId);
}

export function getCostAssumptions(): CostAssumptionsFile {
  return assumptions as CostAssumptionsFile;
}
