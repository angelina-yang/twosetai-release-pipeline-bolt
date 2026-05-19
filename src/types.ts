export type Column = 'booked' | 'recorded' | 'plans-drafted' | 'in-progress' | 'ready';

export interface HeadlineLine {
  text: string;
  accent?: 'white' | 'red' | 'green';
}

export interface Combo {
  id: number;
  headline: HeadlineLine[];
  title: string;
  imageUrl?: string; // only for bartlett
}

export interface Guest {
  slug: string;
  name: string;
  title: string;
  daysPlus: number;
  column: Column;
  combos: Combo[];
}
