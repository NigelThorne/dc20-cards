/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
import type React from "react";
import type { CharacterCard } from "../types";

interface CardProps {
  card: CharacterCard;
  onToggle: (card: CharacterCard) => void;
  marginClasses?: string[];
}

const Card: React.FC<CardProps> = ({ card, onToggle, marginClasses = [] }) => {
  const handleClick = (event: React.MouseEvent | React.KeyboardEvent) => {
    event.preventDefault();
    onToggle(card);
  };

  const getCostElement = () => {
    if (!card.cost) return null;

    const elements = [];

    if (card.cost.ap) {
      elements.push(
        <span key="ap" className="action-point-cost">
          {card.cost.ap}AP
        </span>,
      );
    }

    if (card.cost.sp) {
      elements.push(
        <span key="sp" className="stamina-point-cost">
          {card.cost.sp}SP
        </span>,
      );
    }

    return elements;
  };

  const getCardClasses = () => {
    const classes = ["card"];

    // Add semantic category class
    const categoryClasses = {
      maneuver: "maneuver-card",
      passive: "passive-card",
      skill: "skill-card",
      condition: "condition-card",
      reaction: "reaction-card",
      utility: "utility-card",
    };

    classes.push(categoryClasses[card.category]);

    if (card.isTracking) {
      classes.push("tracking");
    }

    if (card.isHidden) {
      classes.push("hidden");
    }

    if (card.isIndividuallyHidden) {
      classes.push("individually-hidden");
    }

    // Add margin classes for print layout
    classes.push(...marginClasses);

    return classes.join(" ");
  };

  return (
    <div
      className={getCardClasses()}
      onClick={handleClick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleClick(e)}
      role="button"
      tabIndex={0}
    >
      <div className="card-header">
        <div className="title-cost-group">
          <h3 className="card-title">
            {card.title}
            {card.title === "Runefeather" && (
              <small style={{ fontSize: "0.6em", fontWeight: "normal" }}>
                (Nigel)
              </small>
            )}
          </h3>
          <div className="cost-badges">{getCostElement()}</div>
        </div>
        <p className="card-subtitle">{card.subtitle}</p>
      </div>
      <div className="card-content">
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: card.content }} />
      </div>
    </div>
  );
};

export default Card;
