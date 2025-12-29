import { characterStats } from './characterStats';
import { utilityCards } from './cards/utilityCards';
import { spellCards } from './cards/spellCards';
import type { CharacterCard } from '../../../types';

// Combine all cards into a single array
export const characterCards: CharacterCard[] = [
  ...utilityCards,
  ...spellCards,
];

// Export character stats
export { characterStats };

// Export individual card arrays for easy access
export {
  utilityCards,
  spellCards,
};