import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Controls from "./components/Controls";
import type { CharacterCard, CardCategory, CategoryState } from "./types";
import { runefeather, alera, jacqui, type CharacterName } from "./data";

const App: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterName>("runefeather");
  const [cards, setCards] = useState<CharacterCard[]>(runefeather.characterCards);
  const [categoryState, setCategoryState] = useState<CategoryState>({
    utility: true,
    weapon: true,
    passive: true,
    skill: true,
    condition: true,
    reaction: true,
    maneuver: true,
    spell: true,
  });

  const toggleCategory = (category: CardCategory) => {
    const newCategoryState = !categoryState[category];

    setCategoryState((prev) => ({
      ...prev,
      [category]: newCategoryState,
    }));

    setCards((prevCards) =>
      prevCards.map((card) => {
        if (card.category === category) {
          return {
            ...card,
            isHidden: !newCategoryState,
            isIndividuallyHidden: false, // Reset individual hiding when toggling category
          };
        }
        return card;
      }),
    );
  };

  const toggleCard = (targetCard: CharacterCard) => {
    setCards((prevCards) =>
      prevCards.map((card) => {
        if (card.id === targetCard.id) {
          return {
            ...card,
            isIndividuallyHidden: !card.isIndividuallyHidden,
          };
        }
        return card;
      }),
    );
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCharacterChange = (character: CharacterName) => {
    setSelectedCharacter(character);
  };

  const getVisibleCardsWithMargins = () => {
    // Get visible cards - those not hidden by category or individually
    const visibleCards = cards.filter(
      (card) => categoryState[card.category] && !card.isIndividuallyHidden,
    );

    return visibleCards.map((card, index) => {
      const position = (index % 9) + 1; // 1-based position in groups of 9
      const marginClasses: string[] = [];

      // Every 9th card gets a page break for printing
      if (position === 9) {
        marginClasses.push("page-break-after");
      }

      return {
        card,
        marginClasses,
      };
    });
  };

  useEffect(() => {
    // Load cards for selected character
    const characterData = 
      selectedCharacter === "runefeather" ? runefeather :
      selectedCharacter === "alera" ? alera :
      jacqui;
    setCards(characterData.characterCards);
    
    // Reset all categories to visible when switching characters
    setCategoryState({
      utility: true,
      weapon: true,
      passive: true,
      skill: true,
      condition: true,
      reaction: true,
      maneuver: true,
      spell: true,
    });
  }, [selectedCharacter]);

  return (
    <div>
      <div className="character-selector no-print" style={{
        padding: '10px 20px', 
        backgroundColor: '#f0f0f0', 
        borderBottom: '2px solid #ccc',
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }}>
        <label htmlFor="character-select" style={{ fontWeight: 'bold' }}>Character:</label>
        <select 
          id="character-select"
          value={selectedCharacter}
          onChange={(e) => handleCharacterChange(e.target.value as CharacterName)}
          style={{
            padding: '5px 10px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #999'
          }}
        >
          <option value="runefeather">Runefeather</option>
          <option value="alera">Alera</option>
          <option value="jacqui">Jacqui</option>
        </select>
      </div>

      <Controls
        categoryState={categoryState}
        onToggleCategory={toggleCategory}
        onPrint={handlePrint}
      />

      <div className="card-grid">
        {getVisibleCardsWithMargins().map(({ card, marginClasses }) => (
          <Card
            key={card.id}
            card={card}
            onToggle={toggleCard}
            marginClasses={marginClasses}
          />
        ))}
      </div>
    </div>
  );
};

export default App;