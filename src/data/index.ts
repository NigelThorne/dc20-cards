import * as alera from './characters/alera';
import * as jacqui from './characters/jacqui';
import * as runefeather from './characters/runefeather';

// Export individual characters
export { alera, jacqui, runefeather };

// Export default character (Runefeather)
export const characterStats = runefeather.characterStats;
export const characterCards = runefeather.characterCards;

// Export all characters as an array for iteration
export const characters = {
  runefeather,
  alera,
  jacqui,
};

// Export character names for selection
export const characterNames = ['runefeather', 'alera', 'jacqui'] as const;
export type CharacterName = typeof characterNames[number];
