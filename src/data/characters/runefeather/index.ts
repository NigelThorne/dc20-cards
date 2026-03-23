import { characterStats } from './characterStats';
import { utilityCards } from './cards/utilityCards';
import { weaponCards } from './cards/weaponCards';
import { passiveCards } from './cards/passiveCards';
import { maneuverCards } from './cards/maneuverCards';
import { skillCards } from './cards/skillCards';
import { reactionCards } from './cards/reactionCards';
import { conditionCards } from './cards/conditionCards';
import { spellCards } from './cards/spellCards';
import type { CharacterCard } from '../../../types';

// Combine all cards into a single array
export const characterCards: CharacterCard[] = [
  ...utilityCards,
  ...weaponCards,
  ...passiveCards,
  ...maneuverCards,
  ...skillCards,
  ...reactionCards,
  ...conditionCards,
  ...spellCards,
];

// Export character stats
export { characterStats };

// Export individual card arrays for easy access
export {
  utilityCards,
  weaponCards,
  passiveCards,
  maneuverCards,
  skillCards,
  reactionCards,
  conditionCards,
  spellCards,
};