
export type Section = 'dashboard' | 'alliance' | 'cml' | 'operations' | 'growth' | 'action';

export interface ChecklistItem {
  id: number;
  text: string;
  checked: boolean;
}

export interface ProfitState {
  retailPrice: number;
  costPrice: number;
  platformFee: number;
  commissionRate: number;
}
