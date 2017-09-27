export interface TodoInterface {
  id: number;
  text: string;
  completed: boolean;
}

export type VisibilityFilterType = 'ALL' | 'ACTIVE' | 'COMPLETED';
