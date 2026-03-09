#!/usr/bin/env node

/**
 * Color Contrast Verification Script
 * Verifies WCAG 2.1 AA compliance for text/background combinations
 */

// Color palette from tailwind.config.ts
const colors = {
  white: '#ffffff',
  black: '#000000',
  'primary-50': '#f0f9ff',
  'primary-100': '#e0f2fe',
  'primary-300': '#7dd3fc',
  'primary-400': '#38bdf8',
  'primary-500': '#0ea5e9',
  'primary-600': '#0284c7',
  'primary-700': '#0369a1',
  'accent-400': '#fbbf24',
  'accent-500': '#f59e0b',
  'accent-600': '#d97706',
  'gray-50': '#f9fafb',
  'gray-300': '#d1d5db',
  'gray-400': '#9ca3af',
  'gray-500': '#6b7280',
  'gray-600': '#4b5563',
  'gray-700': '#374151',
  'gray-800': '#1f2937',
  'gray-900': '#111827',
  'blue-50': '#eff6ff',
};

/**
 * Convert hex color to RGB
 */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * Calculate relative luminance
 * https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
 */
function getLuminance(rgb) {
  const { r, g, b } = rgb;
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculate contrast ratio between two colors
 * https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio
 */
function getContrastRatio(color1, color2) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) {
    throw new Error('Invalid color format');
  }
  
  const lum1 = getLuminance(rgb1);
  const lum2 = getLuminance(rgb2);
  
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Check if contrast ratio meets WCAG AA standards
 */
function meetsWCAG_AA(ratio, isLargeText = false) {
  const threshold = isLargeText ? 3.0 : 4.5;
  return ratio >= threshold;
}

/**
 * Test color combinations used in the website
 */
const combinations = [
  // Hero Section
  { text: 'white', bg: 'primary-600', location: 'Hero title', isLarge: true },
  { text: 'blue-50', bg: 'primary-600', location: 'Hero tagline', isLarge: false },
  { text: 'primary-700', bg: 'white', location: 'Hero CTA button', isLarge: false },
  
  // Main Content Sections
  { text: 'gray-900', bg: 'white', location: 'Section headings', isLarge: true },
  { text: 'gray-600', bg: 'white', location: 'Section descriptions', isLarge: false },
  { text: 'white', bg: 'primary-500', location: 'Icon numbers', isLarge: false },
  
  // News Cards
  { text: 'gray-500', bg: 'white', location: 'News date', isLarge: false },
  { text: 'primary-600', bg: 'white', location: 'Read More link', isLarge: false },
  { text: 'primary-700', bg: 'white', location: 'Read More hover', isLarge: false },
  
  // Footer
  { text: 'white', bg: 'gray-900', location: 'Footer headings', isLarge: false },
  { text: 'gray-300', bg: 'gray-900', location: 'Footer text', isLarge: false },
  { text: 'gray-400', bg: 'gray-900', location: 'Footer copyright', isLarge: false },
  
  // Article Page
  { text: 'primary-700', bg: 'primary-50', location: 'Category badge', isLarge: false },
  { text: 'gray-400', bg: 'white', location: 'Meta separator', isLarge: false },
  { text: 'gray-700', bg: 'white', location: 'Article content', isLarge: false },
  
  // Buttons
  { text: 'white', bg: 'primary-600', location: 'Primary button', isLarge: false },
  { text: 'white', bg: 'primary-700', location: 'Primary button hover', isLarge: false },
  { text: 'primary-700', bg: 'blue-50', location: 'Secondary button hover', isLarge: false },
];

console.log('\n🎨 Color Contrast Verification\n');
console.log('WCAG 2.1 AA Requirements:');
console.log('  - Normal text: 4.5:1 minimum');
console.log('  - Large text: 3.0:1 minimum\n');
console.log('─'.repeat(80));

let passCount = 0;
let failCount = 0;
const failures = [];

combinations.forEach(({ text, bg, location, isLarge }) => {
  const textColor = colors[text];
  const bgColor = colors[bg];
  
  if (!textColor || !bgColor) {
    console.log(`⚠️  Skipping ${location}: Color not found (${text} on ${bg})`);
    return;
  }
  
  const ratio = getContrastRatio(textColor, bgColor);
  const passes = meetsWCAG_AA(ratio, isLarge);
  const threshold = isLarge ? 3.0 : 4.5;
  
  const status = passes ? '✅ PASS' : '❌ FAIL';
  const textType = isLarge ? 'Large' : 'Normal';
  
  console.log(`${status} | ${ratio.toFixed(2)}:1 | ${text} on ${bg}`);
  console.log(`       ${textType} text | ${location}`);
  console.log(`       Required: ${threshold}:1 | Actual: ${ratio.toFixed(2)}:1`);
  console.log('─'.repeat(80));
  
  if (passes) {
    passCount++;
  } else {
    failCount++;
    failures.push({ text, bg, location, ratio, threshold });
  }
});

console.log('\n📊 Summary\n');
console.log(`Total combinations tested: ${combinations.length}`);
console.log(`✅ Passed: ${passCount}`);
console.log(`❌ Failed: ${failCount}`);

if (failCount > 0) {
  console.log('\n⚠️  FAILURES:\n');
  failures.forEach(({ text, bg, location, ratio, threshold }) => {
    console.log(`  ❌ ${location}`);
    console.log(`     ${text} on ${bg}: ${ratio.toFixed(2)}:1 (needs ${threshold}:1)`);
  });
  console.log('\n❌ Color contrast verification FAILED\n');
  process.exit(1);
} else {
  console.log('\n✅ All color combinations meet WCAG 2.1 AA standards!\n');
  process.exit(0);
}
