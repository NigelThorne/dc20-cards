import { characterStats } from './characterStats';
import { utilityCards } from './cards/utilityCards';
import { passiveCards } from './cards/passiveCards';
import { maneuverCards } from './cards/maneuverCards';
import { skillCards } from './cards/skillCards';
import { reactionCards } from './cards/reactionCards';
import { conditionCards } from './cards/conditionCards';
import type { CharacterCard } from '../types';

// Combine all cards into a single array
export const characterCards: CharacterCard[] = [
  ...utilityCards,
  ...passiveCards,
  ...maneuverCards,
  ...skillCards,
  ...reactionCards,
  ...conditionCards,
];

// Export character stats
export { characterStats };

// Export individual card arrays for easy access
export {
  utilityCards,
  passiveCards,
  maneuverCards,
  skillCards,
  reactionCards,
  conditionCards,
};
