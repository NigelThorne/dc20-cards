import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Controls from "./components/Controls";
import type { CharacterCard, CardCategory, CategoryState } from "./types";
import { characterCards } from "./data";

const App: React.FC = () => {
  const [cards, setCards] = useState<CharacterCard[]>(characterCards);
  const [categoryState, setCategoryState] = useState<CategoryState>({
    utility: true,
    passive: true,
    skill: true,
    condition: true,
    reaction: true,
    maneuver: true,
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

  const getVisibleCardsWithMargins = () => {
    // Get visible cards - those not hidden by category or individually
    const visibleCards = cards.filter(
      (card) => categoryState[card.category] && !card.isIndividuallyHidden,
    );

    return visibleCards.map((card, index) => {
      const position = (index % 9) + 1; // 1-based position in groups of 9
      const marginClasses: string[] = [];

      // First 3 cards in each group get top margin
      if (position >= 1 && position <= 3) {
        marginClasses.push("margin-top-group");
      }

      // Last 3 cards in each group get bottom margin
      if (position >= 7 && position <= 9) {
        marginClasses.push("margin-bottom-group");
      }

      return {
        card,
        marginClasses,
      };
    });
  };

  useEffect(() => {
    // This effect can be used for any side effects when cards or categories change
  }, []);

  return (
    <div>
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
