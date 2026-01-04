# Blank Expo App Template

A minimal, clean Expo Router template with theming support and a modern color scheme. Use this as a starting point for any React Native app.

## Features

- **Expo Router** with file-based routing and native tabs
- **Light/Dark mode** with automatic system preference detection
- **Pre-configured theming** with a warm, modern color palette
- **Reusable components**: ThemedText, ThemedView, PageHeader, EmptyState
- **TypeScript** with strict mode and path aliases (`@/`)
- **Native tab bar** with blur effects and iOS 26+ support

## Getting Started

### 1. Copy this template

Copy the entire `blank-app` folder to a new location:

```bash
cp -r templates/blank-app ~/my-new-app
cd ~/my-new-app
```

### 2. Install dependencies

```bash
bun install
```

### 3. Update app configuration

Edit `app.json` to customize:
- `name` and `slug` - Your app name
- `scheme` - Deep linking scheme
- `ios.bundleIdentifier` - iOS bundle ID
- `android.package` - Android package name

### 4. Add your assets

Add the following images to `assets/images/`:
- `icon.png` (1024x1024) - App icon
- `adaptive-icon.png` (1024x1024) - Android adaptive icon
- `splash-icon.png` - Splash screen image
- `favicon.png` - Web favicon

### 5. Start developing

```bash
bun start
# or
bunx expo start
```

## Project Structure

```
blank-app/
├── app/                    # Expo Router screens
│   ├── _layout.tsx        # Root layout with theme provider
│   ├── modal.tsx          # Example modal screen
│   └── (tabs)/            # Tab-based navigation
│       ├── _layout.tsx    # Tab bar configuration
│       ├── index.tsx      # Home screen
│       ├── explore.tsx    # Explore screen
│       └── settings.tsx   # Settings screen
├── components/            # Reusable components
│   ├── themed-text.tsx   # Themed text component
│   ├── themed-view.tsx   # Themed view component
│   ├── page-header.tsx   # Page header with title
│   ├── empty-state.tsx   # Empty state placeholder
│   ├── haptic-tab.tsx    # Tab with haptic feedback
│   └── ui/               # UI primitives
├── constants/            # Theme and style constants
│   ├── theme.ts          # Colors and fonts
│   └── styles.ts         # Shared styles
├── hooks/                # Custom React hooks
│   ├── use-color-scheme.ts
│   ├── use-color-scheme.web.ts
│   └── use-theme-color.ts
└── assets/               # Images and static files
```

## Customization

### Colors

Edit `constants/theme.ts` to change the color palette:

```typescript
const tintColorLight = '#FF8360';  // Primary/accent color
const tintColorDark = '#FF8360';

export const Colors = {
  light: {
    background: '#EFF1ED',
    text: '#2A2B2A',
    // ... more colors
  },
  dark: {
    background: '#2a2b2a',
    text: '#F8F4E3',
    // ... more colors
  },
};
```

### Adding New Screens

1. Create a new file in `app/(tabs)/` for tab screens
2. Create files in `app/` for standalone screens
3. Update `app/(tabs)/_layout.tsx` to add new tab triggers

## What's NOT Included

This template intentionally excludes:
- Firebase / backend integrations
- AI/chat functionality
- Persistent storage (AsyncStorage)
- Settings context/provider
- API services
- Onboarding flow

Add these as needed for your specific app requirements.

## Scripts

| Command | Description |
|---------|-------------|
| `bun start` | Start Expo development server |
| `bun run ios` | Run on iOS simulator |
| `bun run android` | Run on Android emulator |
| `bun run web` | Run in web browser |
| `bun run lint` | Run ESLint |

## License

MIT

