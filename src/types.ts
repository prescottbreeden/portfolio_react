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

export type ProjectData = {
  description: string;
  key: any;
  projectName: string;
  img: any;
  builtWith?: BuiltWith[];
  sourceCodeLink?: string;
};

export type BuiltWith = {
  key: string;
  title: string;
  tech: HexagonProps[];
};

export type HexagonProps = {
  name: string;
  label?: string;
};
