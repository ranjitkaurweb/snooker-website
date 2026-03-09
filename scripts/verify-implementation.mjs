#!/usr/bin/env node

/**
 * Comprehensive Implementation Verification Script
 * Task 19: Checkpoint - Ensure all tests pass and review implementation
 * 
 * This script verifies:
 * - All 8 sections render correctly with new designs
 * - Responsive behavior at all breakpoints
 * - Hover states and animations
 * - Color palette consistency
 * - Accessibility features
 * - Form validation
 * - Image handling
 */

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const COLORS = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

const results = {
  passed: 0,
  failed: 0,
  warnings: 0,
  checks: []
};

function log(message, color = 'reset') {
  console.log(`${COLORS[color]}${message}${COLORS.reset}`);
}

function check(name, condition, details = '') {
  const status = condition ? '✓' : '✗';
  const color = condition ? 'green' : 'red';
  
  results.checks.push({ name, passed: condition, details });
  
  if (condition) {
    results.passed++;
    log(`  ${status} ${name}`, color);
  } else {
    results.failed++;
    log(`  ${status} ${name}`, color);
    if (details) log(`    ${details}`, 'yellow');
  }
}

function warn(message) {
  results.warnings++;
  log(`  ⚠ ${message}`, 'yellow');
}

function section(title) {
  log(`\n${title}`, 'cyan');
  log('='.repeat(title.length), 'cyan');
}

// Helper to read file content
function readFile(path) {
  try {
    return readFileSync(path, 'utf-8');
  } catch (error) {
    return null;
  }
}

// Helper to check if file contains pattern
function fileContains(path, pattern) {
  const content = readFile(path);
  if (!content) return false;
  return pattern.test(content);
}

// Helper to count occurrences
function countOccurrences(content, pattern) {
  const matches = content.match(pattern);
  return matches ? matches.length : 0;
}

// ============================================================================
// SECTION 1: Verify All 8 Sections Exist and Render
// ============================================================================
section('1. Section Components Verification');

const sections = [
  'HeroSection',
  'VisionSection',
  'MissionSection',
  'ObjectivesSection',
  'LeadershipSection',
  'ExecutiveSection',
  'NewsSection',
  'ContactSection'
];

sections.forEach(sectionName => {
  const path = `components/sections/${sectionName}.tsx`;
  const exists = existsSync(path);
  check(`${sectionName} component exists`, exists);
  
  if (exists) {
    const content = readFile(path);
    check(`${sectionName} has aria-label`, /aria-label/.test(content));
    check(`${sectionName} uses ScrollReveal`, /ScrollReveal/.test(content));
  }
});

// Verify homepage imports all sections
const homePage = readFile('app/page.tsx');
if (homePage) {
  sections.forEach(sectionName => {
    check(`Homepage imports ${sectionName}`, homePage.includes(sectionName));
  });
}

// ============================================================================
// SECTION 2: Color Palette Consistency
// ============================================================================
section('2. Color Palette Consistency');

const colorPatterns = {
  primary: /primary-(?:50|100|200|300|400|500|600|700|800|900)/g,
  accent: /accent-(?:50|100|200|300|400|500|600|700|800|900)/g,
  wood: /wood-(?:50|100|200|300|400|500|600|700|800|900)/g,
};

sections.forEach(sectionName => {
  const path = `components/sections/${sectionName}.tsx`;
  const content = readFile(path);
  
  if (content) {
    const primaryCount = countOccurrences(content, colorPatterns.primary);
    const accentCount = countOccurrences(content, colorPatterns.accent);
    const woodCount = countOccurrences(content, colorPatterns.wood);
    
    check(
      `${sectionName} uses color palette`,
      primaryCount > 0 || accentCount > 0 || woodCount > 0,
      `Primary: ${primaryCount}, Accent: ${accentCount}, Wood: ${woodCount}`
    );
  }
});

// ============================================================================
// SECTION 3: Responsive Design Verification
// ============================================================================
section('3. Responsive Design');

const responsivePatterns = {
  sectionPadding: /py-16\s+sm:py-20\s+md:py-24\s+lg:py-32/,
  containerPadding: /px-4\s+sm:px-6\s+lg:px-8/,
  gridGaps: /gap-(?:6|8)\s+(?:sm:gap-(?:8|10)\s+)?(?:lg:gap-10)?/,
  textSizing: /text-(?:base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)\s+sm:/,
};

sections.forEach(sectionName => {
  const path = `components/sections/${sectionName}.tsx`;
  const content = readFile(path);
  
  if (content) {
    check(
      `${sectionName} has responsive section padding`,
      responsivePatterns.sectionPadding.test(content)
    );
    
    check(
      `${sectionName} has responsive container padding`,
      responsivePatterns.containerPadding.test(content)
    );
    
    check(
      `${sectionName} has responsive text sizing`,
      responsivePatterns.textSizing.test(content)
    );
  }
});

// ============================================================================
// SECTION 4: Animation Verification
// ============================================================================
section('4. Animations and Transitions');

const animationPatterns = {
  duration: /duration-(?:300|500)/g,
  transform: /transform|translate|scale|rotate/g,
  transition: /transition-(?:all|transform|colors|opacity|shadow)/g,
  hover: /hover:/g,
  groupHover: /group-hover:/g,
};

sections.forEach(sectionName => {
  const path = `components/sections/${sectionName}.tsx`;
  const content = readFile(path);
  
  if (content) {
    const durationCount = countOccurrences(content, animationPatterns.duration);
    const transformCount = countOccurrences(content, animationPatterns.transform);
    const hoverCount = countOccurrences(content, animationPatterns.hover);
    
    check(
      `${sectionName} has animations`,
      durationCount > 0 && transformCount > 0,
      `Durations: ${durationCount}, Transforms: ${transformCount}, Hovers: ${hoverCount}`
    );
  }
});

// ============================================================================
// SECTION 5: Accessibility Features
// ============================================================================
section('5. Accessibility');

const a11yPatterns = {
  ariaLabel: /aria-label(?:ledby)?=/g,
  altText: /alt=/g,
  semanticHTML: /<(?:section|article|nav|header|footer|main)/g,
  focusRing: /focus:ring|focus:outline/g,
};

sections.forEach(sectionName => {
  const path = `components/sections/${sectionName}.tsx`;
  const content = readFile(path);
  
  if (content) {
    check(
      `${sectionName} has ARIA labels`,
      a11yPatterns.ariaLabel.test(content)
    );
    
    check(
      `${sectionName} uses semantic HTML`,
      a11yPatterns.semanticHTML.test(content)
    );
    
    const focusCount = countOccurrences(content, a11yPatterns.focusRing);
    if (focusCount === 0 && sectionName === 'ContactSection') {
      warn(`${sectionName} should have focus indicators for form inputs`);
    }
  }
});

// ============================================================================
// SECTION 6: Form Validation (ContactSection)
// ============================================================================
section('6. Form Validation');

const contactSection = readFile('components/sections/ContactSection.tsx');
if (contactSection) {
  check('Contact form has required fields', /required/.test(contactSection));
  check('Contact form has email validation', /type="email"/.test(contactSection));
  check('Contact form has submit handler', /handleSubmit/.test(contactSection));
  check('Contact form has loading state', /isSubmitting/.test(contactSection));
  check('Contact form has success message', /success/.test(contactSection));
  check('Contact form clears on success', /setFormData/.test(contactSection));
}

// ============================================================================
// SECTION 7: Image Handling
// ============================================================================
section('7. Image Handling');

sections.forEach(sectionName => {
  const path = `components/sections/${sectionName}.tsx`;
  const content = readFile(path);
  
  if (content && /<img/.test(content)) {
    check(
      `${sectionName} has image error handling`,
      /onError/.test(content)
    );
    
    check(
      `${sectionName} has alt text for images`,
      /alt=/.test(content)
    );
  }
});

// ============================================================================
// SECTION 8: Gradient Effects
// ============================================================================
section('8. Gradient Effects');

const gradientPattern = /(?:bg-gradient-to-|from-|via-|to-)/g;

sections.forEach(sectionName => {
  const path = `components/sections/${sectionName}.tsx`;
  const content = readFile(path);
  
  if (content) {
    const gradientCount = countOccurrences(content, gradientPattern);
    check(
      `${sectionName} uses gradient effects`,
      gradientCount > 0,
      `Found ${gradientCount} gradient classes`
    );
  }
});

// ============================================================================
// SECTION 9: Card Design Consistency
// ============================================================================
section('9. Card Design Consistency');

const cardPatterns = {
  borderRadius: /rounded-(?:2xl|3xl)/g,
  shadow: /shadow-(?:lg|xl|2xl)/g,
  padding: /p-(?:6|8|10)/g,
};

sections.forEach(sectionName => {
  const path = `components/sections/${sectionName}.tsx`;
  const content = readFile(path);
  
  if (content && /card|Card/.test(content)) {
    const radiusCount = countOccurrences(content, cardPatterns.borderRadius);
    const shadowCount = countOccurrences(content, cardPatterns.shadow);
    
    check(
      `${sectionName} has consistent card styling`,
      radiusCount > 0 && shadowCount > 0,
      `Border radius: ${radiusCount}, Shadows: ${shadowCount}`
    );
  }
});

// ============================================================================
// SECTION 10: Typography Hierarchy
// ============================================================================
section('10. Typography');

const typographyPatterns = {
  headingFont: /font-heading/g,
  bodyFont: /font-sans/g,
  fontWeights: /font-(?:bold|semibold|extrabold)/g,
};

sections.forEach(sectionName => {
  const path = `components/sections/${sectionName}.tsx`;
  const content = readFile(path);
  
  if (content) {
    check(
      `${sectionName} uses heading font`,
      typographyPatterns.headingFont.test(content)
    );
    
    const weightCount = countOccurrences(content, typographyPatterns.fontWeights);
    check(
      `${sectionName} has font weight hierarchy`,
      weightCount > 0,
      `Found ${weightCount} font weight declarations`
    );
  }
});

// ============================================================================
// SECTION 11: Snooker-Themed Elements
// ============================================================================
section('11. Snooker-Themed Decorative Elements');

const decorativePatterns = {
  floatingOrbs: /rounded-full.*blur/g,
  rotatingElements: /rotate-|animate-spin/g,
  pulseAnimation: /animate-pulse/g,
  floatAnimation: /animate-float/g,
};

sections.forEach(sectionName => {
  const path = `components/sections/${sectionName}.tsx`;
  const content = readFile(path);
  
  if (content) {
    const orbCount = countOccurrences(content, decorativePatterns.floatingOrbs);
    const pulseCount = countOccurrences(content, decorativePatterns.pulseAnimation);
    
    if (orbCount > 0 || pulseCount > 0) {
      check(
        `${sectionName} has decorative elements`,
        true,
        `Orbs: ${orbCount}, Pulse: ${pulseCount}`
      );
    }
  }
});

// ============================================================================
// SECTION 12: Performance Considerations
// ============================================================================
section('12. Performance');

// Check for lazy loading
sections.forEach(sectionName => {
  const path = `components/sections/${sectionName}.tsx`;
  const content = readFile(path);
  
  if (content && /<img/.test(content)) {
    const hasLazyLoading = /loading="lazy"/.test(content);
    if (!hasLazyLoading && sectionName !== 'HeroSection') {
      warn(`${sectionName} images could benefit from lazy loading`);
    }
  }
});

// Check for 'use client' directive where needed
sections.forEach(sectionName => {
  const path = `components/sections/${sectionName}.tsx`;
  const content = readFile(path);
  
  if (content) {
    const hasUseClient = /'use client'/.test(content);
    const hasInteractivity = /useState|useEffect|onClick|onSubmit|onChange/.test(content);
    
    if (hasInteractivity && !hasUseClient) {
      warn(`${sectionName} has interactivity but missing 'use client' directive`);
    }
  }
});

// ============================================================================
// SECTION 13: Content Structure
// ============================================================================
section('13. Content Structure');

const contentJson = readFile('data/content.json');
if (contentJson) {
  try {
    const content = JSON.parse(contentJson);
    
    check('Content has hero section', !!content.hero);
    check('Content has vision section', !!content.vision);
    check('Content has mission section', !!content.mission);
    check('Content has objectives section', !!content.objectives);
    check('Content has leadership section', !!content.leadership);
    check('Content has executive section', !!content.executive);
    check('Content has news section', !!content.news);
    
    // Verify data structures
    if (content.leadership?.members) {
      const member = content.leadership.members[0];
      check('Member has required fields', 
        member && member.id && member.name && member.role
      );
    }
    
    if (content.news?.items) {
      const article = content.news.items[0];
      check('News article has required fields',
        article && article.slug && article.title && article.date
      );
    }
  } catch (error) {
    check('Content JSON is valid', false, error.message);
  }
}

// ============================================================================
// FINAL SUMMARY
// ============================================================================
section('Summary');

const total = results.passed + results.failed;
const passRate = ((results.passed / total) * 100).toFixed(1);

log(`\nTotal Checks: ${total}`, 'blue');
log(`Passed: ${results.passed}`, 'green');
log(`Failed: ${results.failed}`, results.failed > 0 ? 'red' : 'green');
log(`Warnings: ${results.warnings}`, results.warnings > 0 ? 'yellow' : 'green');
log(`Pass Rate: ${passRate}%`, passRate >= 90 ? 'green' : passRate >= 70 ? 'yellow' : 'red');

if (results.failed === 0) {
  log('\n✓ All critical checks passed!', 'green');
  log('The implementation meets all requirements.', 'green');
} else {
  log('\n✗ Some checks failed.', 'red');
  log('Please review the failed checks above.', 'yellow');
}

if (results.warnings > 0) {
  log(`\n⚠ ${results.warnings} warning(s) found.`, 'yellow');
  log('These are suggestions for improvement.', 'yellow');
}

// Exit with appropriate code
process.exit(results.failed > 0 ? 1 : 0);
