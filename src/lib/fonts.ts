/**
 * Font Configuration
 * Requirements: 8.4 - Font optimization
 * 
 * Uses next/font for automatic font optimization including:
 * - Font subsetting (only loads characters used)
 * - Self-hosting (no external requests to Google Fonts)
 * - Zero layout shift with size-adjust
 * - display: swap for better performance
 */

import { Outfit, JetBrains_Mono } from 'next/font/google';

/**
 * Outfit font - Primary sans-serif font
 * Geometric, modern, and distinct from default system fonts
 */
export const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  preload: true,
});

/**
 * JetBrains Mono font - Monospace font
 * Used for code snippets and technical content
 */
export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  preload: false,
});

/**
 * Combined font variables for use in className
 */
export const fontVariables = `${outfit.variable} ${jetbrainsMono.variable}`;

/**
 * Font class names for direct usage
 */
export const fontClassNames = {
  sans: outfit.className,
  mono: jetbrainsMono.className,
};

/**
 * CSS custom properties for fonts
 */
export const fontCssVariables = {
  '--font-sans': outfit.style.fontFamily,
  '--font-mono': jetbrainsMono.style.fontFamily,
} as const;
