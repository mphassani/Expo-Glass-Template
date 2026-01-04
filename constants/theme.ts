/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorLight = '#FF8360';
const tintColorDark = '#FF8360';

export const Colors = {
  light: {
    text: '#2A2B2A',
    textMuted: 'rgba(0, 0, 0, 0.5)',
    background: '#EFF1ED',
    tint: tintColorLight,
    icon: '#2a2b2a',
    iconMuted: 'rgba(0, 0, 0, 0.4)',
    tabIconDefault: '#f47d4a',
    tabIconSelected: tintColorLight,
    textOnPrimary: '#FFFFFF',
    textOnPrimaryMuted: 'rgba(255, 255, 255, 0.7)',
  },
  dark: {
    text: '#F8F4E3',
    textMuted: 'rgba(255, 255, 255, 0.5)',
    background: '#2a2b2a',
    tint: tintColorDark,
    icon: '#F8F4E3',
    iconMuted: 'rgba(255, 255, 255, 0.5)',
    tabIconDefault: '#F8F4E3',
    tabIconSelected: tintColorDark,
    textOnPrimary: '#FFFFFF',
    textOnPrimaryMuted: 'rgba(255, 255, 255, 0.7)',
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

