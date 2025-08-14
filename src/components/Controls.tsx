import React from "react";
import type { CardCategory, CategoryState } from "../types";

interface ControlsProps {
  categoryState: CategoryState;
  onToggleCategory: (category: CardCategory) => void;
  onPrint: () => void;
}

const Controls: React.FC<ControlsProps> = ({
  categoryState,
  onToggleCategory,
  onPrint,
}) => {
  const categories: Array<{ key: CardCategory; label: string }> = [
    { key: "utility", label: "Utility" },
    { key: "passive", label: "Passives" },
    { key: "maneuver", label: "Maneuvers" },
    { key: "reaction", label: "Reactions" },
    { key: "skill", label: "Skills" },
    { key: "condition", label: "Conditions" },
  ];

  const getButtonText = (category: CardCategory, label: string): string => {
    return categoryState[category] ? `Hide ${label}` : `Show ${label}`;
  };

  const getButtonClass = (category: CardCategory): string => {
    const baseClass = "btn";
    const hiddenClass = categoryState[category] ? "" : "hidden-category";
    return `${baseClass} ${hiddenClass}`.trim();
  };

  return (
    <div className="controls no-print">
      <h1>Nigel's DC20 Character Cards</h1>
      <p>Click categories to show/hide card types, then print when ready!</p>

      {categories.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          className={getButtonClass(key)}
          onClick={() => onToggleCategory(key)}
          data-category={key}
        >
          {getButtonText(key, label)}
        </button>
      ))}

      <button type="button" className="btn" onClick={onPrint}>
        Print Cards
      </button>
    </div>
  );
};

export default Controls;
