# DC20 Character Cards

A React application for displaying and managing DC20 character cards designed as MTG-sized proxies for tabletop gaming.

## Features

- **MTG Card Size**: Cards are precisely sized at 2.5" × 3.5" to fit perfectly in Magic: The Gathering card sleeves
- **Interactive Card Display**: View character abilities, skills, conditions, and more in a clean card-based interface
- **Category Filtering**: Show/hide different types of cards (Utility, Passives, Maneuvers, Reactions, Skills, Conditions)
- **Individual Card Toggle**: Click on any card to hide/show it individually
- **Print-Optimized**: Cards are optimized for printing 9 per page (3×3 grid) on standard 8.5×11" paper
- **Proxy-Ready**: Perfect for sleeving and using as reference cards during gameplay
- **Responsive Design**: Scaled up on screen for easy editing, proper size when printing



## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone or download the project
2. Navigate to the project directory:
   ```bash
   cd dc20/character-cards-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3030`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests with Vitest

## Usage

### Viewing Cards

The application displays character cards in a 3-column grid layout. Each card shows:
- Title and subtitle
- Action point (AP) and stamina point (SP) costs where applicable
- Card content with abilities, descriptions, and effects

### Filtering Cards

Use the control buttons at the top to show/hide entire categories:
- **Utility**: Character stats, tracking sheets, and general information
- **Passives**: Always-active abilities and features
- **Maneuvers**: Combat maneuvers that cost resources
- **Skills**: Skill checks and actions
- **Reactions**: Reaction-based abilities
- **Conditions**: Status effects and conditions

### Individual Card Management

Click on any card to toggle its visibility individually. This is useful for:
- Hiding cards you don't currently need
- Focusing on specific abilities during gameplay
- Customizing your view for different situations

### Printing MTG Proxies

Click the "Print Cards" button to print your cards. The application includes:
- **Exact MTG dimensions**: 2.5" × 3.5" cards that fit perfectly in card sleeves
- **9 cards per page**: Optimized 3×3 grid layout for standard 8.5×11" paper
- **Print-ready format**: High contrast text and backgrounds for clear printing
- **Proper spacing**: Cards are positioned for easy cutting with minimal waste
- **Black borders**: Clear cut lines for precise trimming

**Printing Tips:**
1. Use cardstock paper (200-300 GSM) for durability
2. Print at 100% scale (no fit-to-page scaling)
3. Cut carefully along the black borders
4. Slip into MTG card sleeves with a basic land as backing

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and development server
- **Vitest** - Testing framework
- **ESLint** - Code linting

## Project Structure

```
src/
├── components/          # React components
│   ├── Card.tsx        # Individual MTG-sized card component
│   └── Controls.tsx    # Filter and control buttons
├── data/               # Character and card data
│   └── characterData.ts # Compact card content optimized for small format
├── types.ts            # TypeScript type definitions
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Styles with MTG card dimensions and print optimization
```

## Customization

### Adding New Cards

To add new character cards, edit `src/data/characterData.ts` and add new `CharacterCard` objects to the `characterCards` array.

### Modifying Character Stats

Update the `characterStats` object in the same file to reflect your character's current statistics.

### Styling

The application uses CSS for styling with:
- **MTG card dimensions**: Exact 2.5" × 3.5" sizing for proxy cards
- **Print optimization**: Special print media queries for perfect card printing
- **Screen scaling**: Cards appear larger on screen for easier editing/viewing
- **Font sizing**: Optimized typography that's readable at MTG card size

## License

This project is for personal use in tabletop gaming.
