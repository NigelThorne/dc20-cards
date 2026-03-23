import { characterStats } from './characterStats';
import { spellCards } from './cards/spellCards';
import { maneuverCards } from './cards/maneuverCards';
import type { CharacterCard } from '../../../types';

// Combine all cards into a single array
export const characterCards: CharacterCard[] = [
  ...spellCards,
  ...maneuverCards,
];

// Export character stats
export { characterStats };

// Export individual card arrays for easy access
export {
  spellCards,
  maneuverCards,
};