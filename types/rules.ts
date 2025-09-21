export interface rules {
  name: string;
  source: string;
  page: string;
  srd32?: boolean;
  basicRules2024?: boolean;
  ruleType?: "c" | "o" | "vo";
  entries: Entries[];
}

export interface Entries {
  type: string;
  name: string;
  entries?: Entries[];
}
