export type ComputedNavName = 'nav' | 'nav active-nav' | 'nav sticky';

export type IconDatum = {
  fill?: string;
  fillRule?: string;
  paths: string[];
  stroke?: string;
  strokeWidth?: string;
  viewBox: string;
};

export type IconHashTable = {
  [key: string]: IconDatum;
};
