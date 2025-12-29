import * as runefeather from './characters/runefeather';
import * as alera from './characters/alera';

// Export individual characters
export { runefeather, alera };

// Export default character (Runefeather)
export const characterStats = runefeather.characterStats;
export const characterCards = runefeather.characterCards;

// Export individual card arrays from default character for backward compatibility
export {
  utilityCards,
  weaponCards,
  passiveCards,
  maneuverCards,
  skillCards,
  reactionCards,
  conditionCards,
} from './characters/runefeather';

// Export all characters as an array for iteration
export const characters = {
  runefeather,
  alera,
};

// Export character names for selection
export const characterNames = ['runefeather', 'alera'] as const;
export type CharacterName = typeof characterNames[number];