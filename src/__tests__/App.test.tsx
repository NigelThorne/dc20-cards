import { describe, it, expect } from "vitest";
import { characterCards } from "../data";

describe("App", () => {
  it("has character data", () => {
    expect(characterCards).toBeDefined();
    expect(characterCards.length).toBeGreaterThan(0);
  });

  it("contains expected cards", () => {
    const cardTitles = characterCards.map((card) => card.title);
    expect(cardTitles).toContain("Runefeather");
    expect(cardTitles).toContain("Ability Scores");
    expect(cardTitles).toContain("Sneak Attack");
  });

  it("has proper card categories", () => {
    const categories = [
      ...new Set(characterCards.map((card) => card.category)),
    ];
    expect(categories).toContain("utility");
    expect(categories).toContain("passive");
    expect(categories).toContain("maneuver");
    expect(categories).toContain("skill");
    expect(categories).toContain("reaction");
    expect(categories).toContain("condition");
  });
});
