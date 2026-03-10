# Implementation Plan: Homepage Redesign V2

## Overview

Complete redesign of all 8 homepage sections with modern snooker-themed aesthetics. This implementation transforms the Hero, Vision, Mission, Objectives, Leadership, Executive, News, and Contact sections using a cohesive green-gold-brown color palette inspired by snooker (table felt, balls, wood). The redesign includes enhanced visual treatments, animations, glass-morphism effects, and snooker-inspired decorative elements while maintaining full responsiveness and accessibility.

## Tasks

- [x] 1. Update Hero Section with snooker-themed design
  - [x] 1.1 Redesign HeroSection component with new layout and styling
    - Implement gradient background (primary-900 via primary-800 to wood-900)
    - Create split layout: content left (7 cols), visual right (5 cols) on desktop
    - Add "Official Association" badge with green pulse dot animation
    - Implement 3-column stats grid (members, tournaments, years)
    - Add floating orbs with blur effects (primary-500/10, accent-500/10)
    - Add scroll indicator with bounce animation (hidden on mobile)
    - Add SVG wave divider at bottom
    - Implement responsive stacking for mobile (visual on top)
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11_
  
  - [x] 1.2 Create snooker visual component for hero right side
    - Build circular snooker illustration container
    - Add multi-layer glow effects (emerald, cyan, blue)
    - Implement rotating gradient border rings
    - Add decorative corner accents (yellow, green, cyan orbs)
    - Add sparkle effects with ping animation
    - Implement image hover scale effect
    - _Requirements: 1.1, 19.1, 19.5, 19.7, 19.9, 19.10_
  
  - [x] 1.3 Update CTA buttons with gradient styling
    - Style primary button with gradient (primary-600 to accent-500)
    - Style secondary button with glass-morphism and white border
    - Add scale and shadow animations on hover (300ms)
    - Add arrow icons to buttons
    - Ensure 44x44px minimum touch targets
    - _Requirements: 1.7, 26.1, 26.2, 26.3, 26.4, 26.7, 26.8_

- [x] 2. Update Vision Section with enhanced card design
  - [x] 2.1 Redesign VisionSection component with new styling
    - Implement white background with decorative gradient blurs
    - Add trophy pattern overlay at 5% opacity
    - Add floating geometric shapes (circle, rotated square)
    - Update section header with "Our Vision" badge (primary-100)
    - Add decorative gradient line (primary-600 to accent-500)
    - Implement 3-column grid (desktop), single column (mobile)
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 16.1, 16.2, 16.3_
  
  - [x] 2.2 Redesign vision pillar cards
    - Style cards with white background and shadow-lg
    - Add gradient accent line on top (scales on hover)
    - Create numbered icon badges (1-3) in gradient circles
    - Add decorative circle accent
    - Implement hover effects: lift 2px, scale icon, show "Learn more" arrow
    - Add border color transition (gray-100 to primary-200)
    - _Requirements: 2.7, 2.8, 2.9, 15.1, 15.2, 15.3, 28.1, 28.2_

- [x] 3. Update Mission Section with gradient cards
  - [x] 3.1 Redesign MissionSection component with gradient background
    - Implement gradient background (slate-50 via gray-50 to blue-50/30)
    - Add soft gradient orbs (primary-100/40, accent-100/40)
    - Add subtle dot pattern at 2% opacity
    - Update section header with "Our Mission" badge (accent-100)
    - Add gradient heading text (gray-900 via primary-800 to gray-900)
    - Add decorative gradient line (accent-500 to primary-600)
    - Implement responsive grid: 4-col (desktop), 2-col (tablet), 1-col (mobile)
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 16.5, 16.6_
  
  - [x] 3.2 Redesign mission point cards
    - Style cards with gradient background (gray-50 to white)
    - Add 2px border (gray-100, hover to primary-300)
    - Implement hover background gradient (primary-50 to accent-50)
    - Create emoji icon badges in gradient circles (size 14-16)
    - Add large number watermarks (1-4) in backgrounds
    - Implement animated progress bar on hover (0 to 100% width)
    - Add decorative corner glow on hover
    - _Requirements: 3.8, 3.9, 3.10, 3.11, 23.6, 23.8_

- [x] 4. Update Objectives Section with glass-morphism design
  - [x] 4.1 Redesign ObjectivesSection component with vibrant gradient
    - Implement gradient background (blue-600 via primary-600 to purple-600)
    - Add animated pattern overlay at 10% opacity
    - Add floating orbs with different animation durations
    - Update section header with "Our Goals" badge (glass-morphism + pulse dot)
    - Style heading in white with blue-100 description
    - Add multi-element decorative line with dots and gradients
    - Implement responsive grid: 3-col (desktop), 2-col (tablet), 1-col (mobile)
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 16.1, 16.2_
  
  - [x] 4.2 Redesign objective cards with glass-morphism
    - Add glowing background effect (emerald, cyan, blue gradient)
    - Implement glass-morphism styling (white/10 with backdrop-blur)
    - Style border (white/20, hover to emerald-400/50)
    - Add top accent bar with gradient (emerald, cyan, blue)
    - Create large emoji icon badges in gradient squares with shine
    - Add number badges in yellow-orange gradient circles (orbiting positions)
    - Implement hover effects: scale up, rotate icon, intensify glow
    - Add animated progress bar and arrow icon on hover
    - _Requirements: 4.8, 4.9, 4.10, 4.11, 4.12, 22.1, 22.2, 22.3, 22.5_
  
  - [x] 4.3 Add bottom CTA section
    - Add text "Ready to be part of our journey?"
    - Create gradient button (emerald-500 to cyan-500) with shadow
    - _Requirements: 4.13_

- [x] 5. Update Leadership Section with enhanced member profiles
  - [x] 5.1 Redesign LeadershipSection component
    - Implement white background with decorative blurs (primary-200/20, accent-200/20)
    - Update section header with "Leadership Team" badge (primary-100)
    - Add gradient heading text (primary-600 via primary-700 to accent-600)
    - Add multi-element decorative divider with dots
    - Implement responsive grid: 4-col (desktop), 2-col (tablet), 1-col (mobile)
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 16.1, 16.2_
  
  - [x] 5.2 Redesign leadership member cards
    - Add decorative background gradient (rotates on hover)
    - Style card with white background, shadow-lg (hover shadow-2xl)
    - Create circular avatar container with gradient border ring
    - Add white inner ring around avatar
    - Implement avatar image hover scale effect
    - Limit avatar max-width to 200px on mobile
    - Add "⭐ Active" status badge with gradient (primary-600 to accent-500)
    - Display member name (bold, hover to primary-600) and role (primary-600)
    - Show email on hover (gray-500)
    - Add decorative line that scales on hover
    - _Requirements: 5.8, 5.9, 5.10, 5.11, 5.12, 24.1, 24.2, 24.3, 24.6, 24.7_

- [x] 6. Update Executive Section with square profile cards
  - [x] 6.1 Redesign ExecutiveSection component
    - Implement gradient background (slate-50 via gray-50 to blue-50/30)
    - Add animated pattern overlay at 5% opacity
    - Update section header with "Executive Team" badge (accent-100)
    - Add gradient heading text (primary-600 via accent-500 to primary-700)
    - Add multi-element decorative divider with animated pulse dots
    - Implement responsive grid: 3-col (desktop), 2-col (tablet), 1-col (mobile)
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 16.1, 16.2_
  
  - [x] 6.2 Redesign executive member cards
    - Add glow effect with gradient blur on hover
    - Style card with white background, border-2 (hover to primary-200)
    - Add top accent bar with gradient (scales on hover)
    - Create square avatar container with rounded-2xl corners
    - Add rotating gradient background behind avatar
    - Add white frame with shadow around avatar
    - Implement avatar image hover scale and gradient overlay
    - Add role badge showing first word of role (gradient pill)
    - Display member name (bold, hover to primary-600) and role (primary-600)
    - Show contact info (email, phone) in gray-50 boxes (hover to primary-50)
    - Add bottom decorative gradient corner (appears on hover)
    - _Requirements: 6.8, 6.9, 6.10, 6.11, 6.12, 6.13, 6.14, 24.1, 24.2, 24.3, 24.4_

- [x] 7. Update News Section with enhanced article cards
  - [x] 7.1 Redesign NewsSection component
    - Implement gradient background (white via gray-50 to primary-50/20)
    - Add decorative gradient blurs
    - Update section header with "Latest News" badge (primary-100)
    - Add gradient heading text and decorative line
    - Implement responsive grid: 3-col (desktop), 2-col (tablet), 1-col (mobile)
    - Add centered "View All" button with gradient styling
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.15, 16.1, 16.2_
  
  - [x] 7.2 Redesign news article cards
    - Style card with white background, shadow-lg (hover shadow-2xl)
    - Create 16:9 aspect ratio image container
    - Add gradient overlay on image hover
    - Add category badge in top-left corner of image
    - Display article date with calendar icon (primary-600)
    - Truncate article title to 2 lines maximum
    - Truncate article excerpt to 3 lines maximum
    - Add "Read more" link with arrow (appears on hover)
    - Implement hover effects: lift card up, scale image
    - _Requirements: 7.7, 7.8, 7.9, 7.10, 7.11, 7.12, 7.13, 7.14, 25.1, 25.2, 25.3, 25.4, 25.5_

- [x] 8. Update Contact Section with enhanced form and info cards
  - [x] 8.1 Redesign ContactSection component
    - Implement gradient background (gray-50 via white to gray-50)
    - Add decorative gradient blurs (primary-100/30, accent-100/30)
    - Update section header with "Get In Touch" badge (primary-100)
    - Add gradient heading text and decorative line
    - Implement responsive layout: 2-col (desktop), stack (mobile)
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 16.1, 16.2_
  
  - [x] 8.2 Redesign contact information cards
    - Create 4 contact info cards (email, phone, address, office hours)
    - Style cards with white background, shadow-md (hover shadow-xl)
    - Add border gray-100 (hover to primary-200)
    - Create icon in gradient circle (primary-600 to accent-500)
    - Implement icon scale animation on hover
    - Display title and content for each card
    - _Requirements: 8.6, 8.7, 28.3_
  
  - [x] 8.3 Redesign contact form
    - Style form container with white background, shadow-xl, rounded-3xl
    - Create form fields: name, email, phone, subject, message
    - Mark name, email, subject, message as required
    - Mark phone as optional
    - Style inputs with border gray-300, rounded-xl
    - Add focus ring in primary-500
    - Style submit button with gradient (primary-600 to accent-500)
    - Add loading spinner for submit button
    - Display success message with green-50 background and checkmark
    - Implement form validation and error display
    - _Requirements: 8.8, 8.9, 8.10, 8.11, 8.12, 8.13, 8.14, 17.1, 17.2, 17.3, 17.4, 17.5, 17.6_

- [x] 9. Implement shared decorative elements and animations
  - [x] 9.1 Create reusable decorative components
    - Build FloatingOrb component with blur effects and float animation
    - Build GradientLine component for section dividers
    - Build PulseDot component for status indicators
    - Build BadgeComponent with various color schemes
    - Build ProgressBar component with animation
    - _Requirements: 19.1, 19.5, 19.10, 27.1, 27.2, 27.3_
  
  - [x] 9.2 Implement animation utilities
    - Create float animation keyframes (15-30s duration)
    - Create pulse animation keyframes (2-3s duration)
    - Create bounce animation for scroll indicator
    - Ensure all animations use GPU-accelerated properties
    - Set up staggered delays for ScrollReveal (0.1s * index)
    - _Requirements: 11.2, 11.3, 11.4, 11.6, 11.7, 11.8, 19.5, 19.6_
  
  - [ ]* 9.3 Write property tests for animation consistency
    - **Property 7: Animation Duration Consistency**
    - **Validates: Requirements 11.2, 28.6**
  
  - [ ]* 9.4 Write property tests for GPU-accelerated animations
    - **Property 9: GPU-Accelerated Animations**
    - **Validates: Requirements 11.8, 11.9**

- [x] 10. Ensure responsive behavior across all sections
  - [x] 10.1 Implement responsive grid layouts
    - Apply single-column grids for mobile (<640px)
    - Apply 2-column grids for tablet (640-1024px) where appropriate
    - Apply multi-column grids for desktop (>1024px)
    - Use consistent grid gaps: gap-6 sm:gap-8 lg:gap-10
    - _Requirements: 9.1, 9.2, 9.3, 9.7_
  
  - [x] 10.2 Implement responsive spacing and typography
    - Apply section padding: py-16 sm:py-20 md:py-24 lg:py-32
    - Apply container padding: px-4 sm:px-6 lg:px-8
    - Implement responsive text sizing with breakpoint modifiers
    - Ensure minimum 16px text size on mobile
    - Ensure minimum 44x44px touch targets on mobile
    - _Requirements: 9.4, 9.5, 9.6, 9.8, 9.9, 29.3, 29.4_
  
  - [ ]* 10.3 Write property tests for responsive grid behavior
    - **Property 2: Responsive Grid Behavior**
    - **Validates: Requirements 9.1, 9.2, 9.3**
  
  - [ ]* 10.4 Write property tests for section padding consistency
    - **Property 3: Section Padding Consistency**
    - **Validates: Requirements 9.5, 9.6**
  
  - [ ]* 10.5 Write property tests for touch target minimum size
    - **Property 5: Touch Target Minimum Size**
    - **Validates: Requirements 9.8, 26.8**

- [x] 11. Implement color palette consistency
  - [x] 11.1 Audit and update all color usage
    - Ensure all green tones use primary palette (primary-50 to primary-900)
    - Ensure all gold tones use accent palette (accent-50 to accent-900)
    - Ensure all brown tones use wood palette (wood-50 to wood-900)
    - Use primary-600 as main brand green
    - Use accent-600 as main accent gold
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8_
  
  - [ ]* 11.2 Write property tests for color palette consistency
    - **Property 1: Color Palette Consistency**
    - **Validates: Requirements 10.1, 10.2, 10.3, 10.4, 10.5, 10.6**

- [x] 12. Implement typography hierarchy
  - [x] 12.1 Apply consistent font families and weights
    - Use Poppins (font-heading) for all headings with bold weight
    - Use Inter (font-sans) for all body text with regular weight
    - Use semibold weight for subheadings
    - _Requirements: 12.1, 12.2, 12.9, 12.10, 12.11_
  
  - [x] 12.2 Apply responsive text sizing
    - Hero titles: text-4xl sm:text-5xl md:text-6xl lg:text-7xl
    - Section headings: text-3xl sm:text-4xl md:text-5xl lg:text-6xl
    - Subsection headings: text-2xl sm:text-3xl md:text-4xl
    - Card titles: text-xl sm:text-2xl md:text-3xl
    - Body text: text-base sm:text-lg
    - Small text: text-sm sm:text-base
    - _Requirements: 12.3, 12.4, 12.5, 12.6, 12.7, 12.8_
  
  - [ ]* 12.3 Write property tests for heading font consistency
    - **Property 10: Heading Font Consistency**
    - **Validates: Requirements 12.1, 12.9**
  
  - [ ]* 12.4 Write property tests for section heading size consistency
    - **Property 12: Section Heading Size Consistency**
    - **Validates: Requirements 12.4**

- [x] 13. Ensure accessibility compliance
  - [x] 13.1 Add ARIA labels and semantic HTML
    - Add aria-label or aria-labelledby to all sections
    - Use semantic HTML elements (header, nav, main, section, article, footer)
    - Add skip-to-content links for keyboard users
    - _Requirements: 13.1, 13.6, 13.7_
  
  - [x] 13.2 Implement focus indicators and keyboard navigation
    - Add visible focus indicators to all interactive elements
    - Ensure keyboard navigation works for all interactive elements
    - Test Tab, Enter, Space key functionality
    - _Requirements: 13.3, 13.5, 26.9_
  
  - [x] 13.3 Add alt text and form labels
    - Provide alt text for all images
    - Associate labels with all form inputs
    - Provide error messages for invalid form inputs
    - Add ARIA live regions for dynamic content changes
    - _Requirements: 13.2, 13.8, 13.9, 13.10_
  
  - [ ]* 13.4 Write property tests for accessibility ARIA labels
    - **Property 14: Accessibility ARIA Labels**
    - **Validates: Requirements 13.1**
  
  - [ ]* 13.5 Write property tests for image alt text
    - **Property 15: Image Alt Text**
    - **Validates: Requirements 13.2**
  
  - [ ]* 13.6 Write property tests for focus indicators
    - **Property 16: Focus Indicators**
    - **Validates: Requirements 13.3**

- [x] 14. Optimize images and implement error handling
  - [x] 14.1 Implement image optimization
    - Use Next.js Image component for all images
    - Apply lazy loading for below-fold images
    - Provide responsive image sizes with srcset
    - Use WebP format with fallbacks
    - Display blur placeholders during loading
    - Set width and height attributes to prevent layout shift
    - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5, 14.7_
  
  - [x] 14.2 Implement image error handling
    - Add fallback placeholder images for load failures
    - Implement onError handlers for all images
    - Add fallback avatars for member profiles
    - _Requirements: 14.6, 20.3, 24.8_
  
  - [ ]* 14.3 Write property tests for Next.js Image component usage
    - **Property 21: Next.js Image Component Usage**
    - **Validates: Requirements 14.1**
  
  - [ ]* 14.4 Write property tests for image dimensions
    - **Property 24: Image Dimensions**
    - **Validates: Requirements 14.7**

- [x] 15. Implement card design consistency
  - [x] 15.1 Apply consistent card styling
    - Use rounded-2xl or rounded-3xl border radius for all cards
    - Apply shadow-lg base shadow, shadow-2xl on hover
    - Use consistent padding: p-6 sm:p-8 lg:p-10
    - Apply white or semi-transparent backgrounds
    - Add border styling with hover color changes
    - _Requirements: 15.1, 15.2, 15.3, 15.4, 15.5, 15.6_
  
  - [x] 15.2 Implement card hover effects
    - Apply transform effects (scale or translate) on hover
    - Include decorative elements (gradients, icons, badges)
    - Ensure smooth transitions (300ms duration)
    - _Requirements: 15.7, 15.8, 28.1, 28.2, 28.6_
  
  - [ ]* 15.3 Write property tests for card border radius consistency
    - **Property 25: Card Border Radius Consistency**
    - **Validates: Requirements 15.1**
  
  - [ ]* 15.4 Write property tests for card shadow consistency
    - **Property 26: Card Shadow Consistency**
    - **Validates: Requirements 15.2, 15.3**

- [x] 16. Implement form validation and submission
  - [x] 16.1 Implement client-side form validation
    - Validate required fields (name, email, subject, message)
    - Validate email format using HTML5 email input type
    - Enforce maximum length limits on text inputs
    - Display validation errors for empty required fields
    - Display email validation error for invalid format
    - _Requirements: 17.1, 17.2, 17.7, 17.8_
  
  - [x] 16.2 Implement form submission handling
    - Display loading state on submit button with spinner
    - Display success message with checkmark icon on success
    - Display error message with details on failure
    - Clear form fields after successful submission
    - Maintain user input when errors occur
    - _Requirements: 17.3, 17.4, 17.5, 17.6, 20.8_
  
  - [x] 16.3 Implement form security
    - Sanitize all user input to prevent XSS attacks
    - Transmit data over HTTPS
    - Do not store form data in localStorage
    - _Requirements: 17.9, 30.1, 30.2, 30.5_
  
  - [ ]* 16.4 Write property tests for form validation
    - **Property 20: Form Validation Errors**
    - **Validates: Requirements 13.9, 17.1, 17.2**
  
  - [ ]* 16.5 Write property tests for text input maximum length
    - **Property 37: Text Input Maximum Length**
    - **Validates: Requirements 17.8**

- [x] 17. Implement gradient effects throughout
  - [x] 17.1 Apply gradient backgrounds
    - Add gradient backgrounds to hero, objectives, mission, executive sections
    - Use multi-stop gradients (3+ colors) for complex effects
    - Combine primary, accent, and wood colors in gradients
    - _Requirements: 23.1, 23.5, 23.7_
  
  - [x] 17.2 Apply gradient text and borders
    - Add gradient text effects to section headings
    - Add gradient borders to decorative elements
    - Add gradient button backgrounds to CTAs
    - Add gradient overlays on hover states
    - Animate or intensify gradients on hover
    - _Requirements: 23.2, 23.3, 23.4, 23.6, 23.8_

- [x] 18. Implement error handling and loading states
  - [x] 18.1 Implement content loading error handling
    - Display error message when content JSON fails to load
    - Provide refresh option for failed content loads
    - Implement error boundaries for component-level errors
    - Log errors for debugging purposes
    - Provide user-friendly error messages
    - _Requirements: 20.1, 20.2, 20.6, 20.7, 20.9_
  
  - [x] 18.2 Implement form error handling
    - Display error message below form when submission fails
    - Allow user to retry submission after failure
    - Maintain user input in forms when errors occur
    - _Requirements: 20.4, 20.5, 20.8_

- [x] 19. Checkpoint - Ensure all tests pass and review implementation
  - Verify all 8 sections render correctly with new designs
  - Test responsive behavior at all breakpoints (320px, 375px, 414px, 768px, 1024px, 1280px)
  - Test hover states and animations across all interactive elements
  - Verify color palette consistency across all sections
  - Test keyboard navigation and accessibility features
  - Verify form validation and submission flow
  - Test image loading and error handling
  - Ensure all tests pass, ask the user if questions arise

## Notes

- Tasks marked with `*` are optional property-based tests and can be skipped for faster MVP
- Each task references specific requirements for traceability
- The checkpoint ensures comprehensive validation before completion
- All sections build on existing component structure in components/sections/
- Reuse existing UI components from components/ui/ where possible
- Content is loaded from data/content.json and data/news/
- TypeScript interfaces are defined in lib/types.ts
- Animation utilities use Framer Motion and ScrollReveal component
- Color palette is already configured in tailwind.config.ts