import { DataStatus } from '@/lib/types';

export function formatDataStatus(status?: DataStatus): string {
  switch (status) {
    case 'reviewed-estimate':
      return 'Reviewed estimate';
    case 'recently-updated':
      return 'Recently updated';
    case 'live-source':
      return 'Live source';
    case 'planning-estimate':
    default:
      return 'Planning estimate';
  }
}

export function formatLastUpdated(value?: string): string {
  if (!value) return 'Unknown';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}
