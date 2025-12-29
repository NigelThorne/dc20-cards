import React from "react";
import type { CardCategory, CategoryState } from "../types";
import { useAuth } from "../auth/AuthContext";

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
    { key: "weapon", label: "Weapons" },
    { key: "passive", label: "Passives" },
    { key: "maneuver", label: "Maneuvers" },
    { key: "skill", label: "Skills" },
    { key: "spell", label: "Spells" },
    { key: "reaction", label: "Reactions" },
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

  const { user, logout } = useAuth();

  return (
    <div className="controls no-print">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <div>
          <h1>Nigel's DC20 Character Cards</h1>
          <p>
            Click categories to show/hide card types, then print when ready!
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p
            style={{ margin: "0 0 0.5rem 0", fontSize: "14px", color: "#666" }}
          >
            Logged in as: <strong>{user?.globalName || user?.username}</strong>
          </p>
          <button
            type="button"
            onClick={logout}
            style={{
              background: "none",
              border: "1px solid #ccc",
              padding: "4px 8px",
              fontSize: "12px",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            Logout
          </button>
        </div>
      </div>

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
