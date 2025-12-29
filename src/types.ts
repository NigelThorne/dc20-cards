export type CardCategory =
  | "utility"
  | "passive"
  | "skill"
  | "condition"
  | "reaction"
  | "weapon"
  | "maneuver"
  | "spell";

export interface CostItem {
  ap?: number;
  sp?: number;
  mp?: number;
}

export type Cost = CostItem[];

export interface CharacterCard {
  id: string;
  title: string;
  subtitle: string;
  category: CardCategory;
  content: string;
  cost?: Cost;
  isTracking?: boolean;
  isHidden?: boolean;
  isIndividuallyHidden?: boolean;
  tags?: string[];
}

export interface AbilityScore {
  name: string;
  icon: string;
  modifier: number;
  save: number;
  skills: string;
}

export interface CharacterStats {
  name: string;
  player: string;
  level: number;
  class: string;
  ancestry: string;
  prime: number;
  awareness: number;
  speed: number;
  jump: number;
  precisionDefense: number;
  precisionHeavy: number;
  precisionBulky: number;
  areaDefense: number;
  areaHeavy: number;
  areaBulky: number;
  attackBonus: number;
  saveDC: number;
  initiative: number;
  deathThreshold: number;
  maxHealth: number;
  maxStamina: number;
  maxGrit: number;
  maxRest: number;
  physicalAbilities: AbilityScore[];
  mentalAbilities: AbilityScore[];
}

export type CategoryState = {
  [key in CardCategory]: boolean;
};
