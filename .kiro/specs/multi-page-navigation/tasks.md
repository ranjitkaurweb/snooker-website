# Implementation Plan: Multi-Page Navigation

## Overview

This plan converts the existing single-page sports association website into a multi-page application using Next.js 14 App Router. The implementation will transform anchor-based navigation into route-based navigation while preserving all existing functionality, styling, animations, and accessibility features.

## Tasks

- [x] 1. Create layout infrastructure
  - [x] 1.1 Create PageLayout component with usePathname integration
    - Create `components/layout/PageLayout.tsx` as a Client Component
    - Accept `children` and `transparent` props
    - Use `usePathname()` hook to get current route
    - Render Header with `currentPath` and `transparent` props
    - Render main content wrapper with proper semantic HTML
    - Render Footer component
    - _Requirements: 2.4, 5.1, 5.2, 5.3, 5.4_
  
  - [ ]* 1.2 Write property test for PageLayout
    - **Property 3: Layout Consistency**
    - **Validates: Requirements 2.4, 5.1, 5.2, 5.3, 5.4**
    - Test that Header and Footer are present for any page content
    - Use fast-check with minimum 100 iterations

- [x] 2. Update Header component for route-based navigation
  - [x] 2.1 Fix Header image loading using Next.js Image component
    - Replace `<img>` tags with Next.js `<Image>` component
    - Remove onError handlers (Next.js Image handles errors internally)
    - Add proper width, height, and alt attributes
    - Set priority for logo images
    - _Requirements: 10.1, 10.2, 10.3_
  
  - [x] 2.2 Add currentPath prop to Header component
    - Update HeaderProps interface to include optional `currentPath?: string`
    - Pass currentPath to Navigation component
    - Maintain existing transparent header behavior
    - _Requirements: 3.1, 3.2, 3.3_
  
  - [ ]* 2.3 Write unit tests for Header image migration
    - Test that Header uses Next.js Image component
    - Test that no img tags with onError handlers exist
    - _Requirements: 10.1, 10.2, 10.3_

- [x] 3. Update Navigation component for Link-based routing
  - [x] 3.1 Replace anchor links with Next.js Link components
    - Import Link from 'next/link'
    - Update navLinks array to use route paths instead of hash links
    - Add Contact link to navigation array
    - Replace all `<a href="#...">` with `<Link href="/...">`
    - Remove smooth scroll behavior
    - _Requirements: 2.1, 2.2, 2.3_
  
  - [x] 3.2 Implement pathname-based active route detection
    - Accept `currentPath` prop in NavigationProps interface
    - Replace scroll-based active detection with pathname comparison
    - Compare `currentPath` with `link.href` for active state
    - Apply active styling when paths match
    - Handle home route ("/") exact matching
    - _Requirements: 3.1, 3.2, 3.3_
  
  - [ ]* 3.3 Write unit tests for Navigation Link usage
    - Test that all navigation items use Link components
    - Test that no anchor tags with hash links exist
    - Test that Contact link is present in navigation
    - _Requirements: 2.1, 2.2_
  
  - [ ]* 3.4 Write property test for active route indication
    - **Property 4: Active Route Indication**
    - **Validates: Requirements 3.1, 3.2, 3.3**
    - Test that for any route, the corresponding nav item is highlighted
    - Use fast-check with minimum 100 iterations

- [x] 4. Checkpoint - Verify layout infrastructure
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Modify home page to render only HeroSection
  - [x] 5.1 Update app/page.tsx to render only HeroSection
    - Keep as Server Component
    - Load hero content using getSiteContent()
    - Wrap content with PageLayout component
    - Pass `transparent={true}` to PageLayout for transparent header
    - Remove all other section components (Vision, Mission, etc.)
    - _Requirements: 1.1, 4.1_
  
  - [x] 5.2 Add metadata export for home page
    - Export metadata object with unique title and description
    - Include OpenGraph tags
    - _Requirements: 6.1_
  
  - [ ]* 5.3 Write unit test for home page rendering
    - Test that only HeroSection is rendered
    - Test that other sections are not present
    - _Requirements: 4.1_

- [x] 6. Create vision page
  - [x] 6.1 Create app/vision/page.tsx
    - Create as Server Component
    - Load vision content using getSiteContent()
    - Render VisionSection component with loaded content
    - Wrap with PageLayout component (solid header)
    - _Requirements: 1.2, 4.2_
  
  - [x] 6.2 Add metadata export for vision page
    - Export metadata with title "Our Vision"
    - Include descriptive meta description about vision
    - _Requirements: 6.2_
  
  - [ ]* 6.3 Write unit test for vision page
    - Test that VisionSection is rendered
    - Test metadata is correct
    - _Requirements: 4.2, 6.2_

- [x] 7. Create mission page
  - [x] 7.1 Create app/mission/page.tsx
    - Create as Server Component
    - Load mission content using getSiteContent()
    - Render MissionSection component with loaded content
    - Wrap with PageLayout component
    - _Requirements: 1.3, 4.3_
  
  - [x] 7.2 Add metadata export for mission page
    - Export metadata with title "Our Mission"
    - Include descriptive meta description about mission
    - _Requirements: 6.3_
  
  - [ ]* 7.3 Write unit test for mission page
    - Test that MissionSection is rendered
    - Test metadata is correct
    - _Requirements: 4.3, 6.3_

- [x] 8. Create leadership page
  - [x] 8.1 Create app/leadership/page.tsx
    - Create as Server Component
    - Load leadership members using getSiteContent()
    - Render LeadershipSection component with loaded members
    - Wrap with PageLayout component
    - _Requirements: 1.4, 4.4_
  
  - [x] 8.2 Add metadata export for leadership page
    - Export metadata with title "Our Leadership"
    - Include descriptive meta description about leadership team
    - _Requirements: 6.4_
  
  - [ ]* 8.3 Write unit test for leadership page
    - Test that LeadershipSection is rendered
    - Test metadata is correct
    - _Requirements: 4.4, 6.4_

- [x] 9. Create executive page
  - [x] 9.1 Create app/executive/page.tsx
    - Create as Server Component
    - Load executive members using getSiteContent()
    - Render ExecutiveSection component with loaded members
    - Wrap with PageLayout component
    - _Requirements: 1.5, 4.5_
  
  - [x] 9.2 Add metadata export for executive page
    - Export metadata with title "Executive Committee"
    - Include descriptive meta description about executive committee
    - _Requirements: 6.5_
  
  - [ ]* 9.3 Write unit test for executive page
    - Test that ExecutiveSection is rendered
    - Test metadata is correct
    - _Requirements: 4.5, 6.5_

- [x] 10. Create news listing page
  - [x] 10.1 Create app/news/page.tsx
    - Create as Server Component
    - Load all news articles using getNewsArticles()
    - Render NewsSection component without maxDisplay limit
    - Pass all articles to NewsSection
    - Wrap with PageLayout component
    - _Requirements: 1.6, 4.6, 11.1, 11.2_
  
  - [x] 10.2 Add metadata export for news page
    - Export metadata with title "Latest News"
    - Include descriptive meta description about news and updates
    - _Requirements: 6.6_
  
  - [ ]* 10.3 Write unit test for news page
    - Test that NewsSection is rendered
    - Test that all articles are displayed (no limit)
    - Test metadata is correct
    - _Requirements: 4.6, 6.6, 11.1, 11.2_
  
  - [ ]* 10.4 Write property test for news card functionality
    - **Property 10: News Card Functionality**
    - **Validates: Requirements 11.3, 11.4**
    - Test that any news article renders with NewsCard and links correctly
    - Use fast-check with minimum 100 iterations

- [x] 11. Create contact page
  - [x] 11.1 Create app/contact/page.tsx
    - Create as Server Component wrapping Client Component
    - Render ContactSection component
    - Wrap with PageLayout component
    - _Requirements: 1.7, 4.7, 12.1, 12.2_
  
  - [x] 11.2 Add metadata export for contact page
    - Export metadata with title "Contact Us"
    - Include descriptive meta description about contact information
    - _Requirements: 6.7_
  
  - [ ]* 11.3 Write unit test for contact page
    - Test that ContactSection is rendered
    - Test that form fields are present
    - Test metadata is correct
    - _Requirements: 4.7, 6.7, 12.1, 12.2_
  
  - [ ]* 11.4 Write property test for form validation
    - **Property 11: Form Validation**
    - **Validates: Requirements 12.3, 12.4**
    - Test that any form submission triggers validation
    - Test that invalid data shows error messages
    - Use fast-check with minimum 100 iterations
  
  - [ ]* 11.5 Write property test for contact form responsiveness
    - **Property 12: Contact Form Responsiveness**
    - **Validates: Requirements 12.5**
    - Test that form maintains responsive layout at any viewport size
    - Use fast-check with minimum 100 iterations

- [x] 12. Checkpoint - Verify all pages render correctly
  - Ensure all tests pass, ask the user if questions arise.

- [x] 13. Update sitemap for new routes
  - [x] 13.1 Update app/sitemap.ts to include all new routes
    - Add entries for /, /vision, /mission, /leadership, /executive, /news, /contact
    - Maintain existing /news/[slug] dynamic routes
    - Set appropriate priority and changeFrequency for each route
    - _Requirements: 14.3_
  
  - [ ]* 13.2 Write unit test for sitemap generation
    - Test that all routes are included in sitemap
    - Test that news article routes are preserved
    - _Requirements: 14.3_

- [ ] 14. Implement comprehensive property-based tests
  - [ ]* 14.1 Write property test for route-to-content mapping
    - **Property 1: Route-to-Content Mapping**
    - **Validates: Requirements 1.1-1.7, 4.1-4.7, 13.1, 13.2**
    - Test that any defined route renders corresponding content
    - Use fast-check with minimum 100 iterations
  
  - [ ]* 14.2 Write property test for client-side navigation
    - **Property 2: Client-Side Navigation**
    - **Validates: Requirements 2.3**
    - Test that navigation doesn't trigger full page reload
    - Use fast-check with minimum 100 iterations
  
  - [ ]* 14.3 Write property test for SEO metadata uniqueness
    - **Property 5: SEO Metadata Uniqueness**
    - **Validates: Requirements 6.1-6.7**
    - Test that any page has unique title and description
    - Use fast-check with minimum 100 iterations
  
  - [ ]* 14.4 Write property test for responsive design preservation
    - **Property 6: Responsive Design Preservation**
    - **Validates: Requirements 7.1, 7.4**
    - Test that any page maintains responsive layout at any viewport size
    - Use fast-check with minimum 100 iterations
  
  - [ ]* 14.5 Write property test for accessibility compliance
    - **Property 7: Accessibility Compliance**
    - **Validates: Requirements 8.1, 8.2, 8.3, 8.4**
    - Test that any interactive element is keyboard accessible with proper ARIA
    - Use jest-axe for automated accessibility testing
    - Use fast-check with minimum 100 iterations
  
  - [ ]* 14.6 Write property test for animation and styling preservation
    - **Property 8: Animation and Styling Preservation**
    - **Validates: Requirements 9.1, 9.2, 9.4**
    - Test that any section component preserves animations and styling
    - Use fast-check with minimum 100 iterations
  
  - [ ]* 14.7 Write property test for smooth page transitions
    - **Property 9: Smooth Page Transitions**
    - **Validates: Requirements 9.3**
    - Test that any navigation between pages is smooth
    - Use fast-check with minimum 100 iterations
  
  - [ ]* 14.8 Write property test for component type correctness
    - **Property 13: Component Type Correctness**
    - **Validates: Requirements 13.3, 13.4**
    - Test that pages without interactivity are Server Components
    - Test that interactive components are Client Components
    - Use fast-check with minimum 100 iterations
  
  - [ ]* 14.9 Write property test for dynamic route preservation
    - **Property 14: Dynamic Route Preservation**
    - **Validates: Requirements 14.1, 14.2, 14.3**
    - Test that any news article slug renders correctly
    - Test that sitemap includes all valid routes
    - Use fast-check with minimum 100 iterations
  
  - [ ]* 14.10 Write property test for 404 error handling
    - **Property 15: 404 Error Handling**
    - **Validates: Requirements 14.4**
    - Test that any invalid route displays 404 page
    - Use fast-check with minimum 100 iterations

- [x] 15. Final integration and verification
  - [x] 15.1 Verify all routes are accessible
    - Manually test navigation to all 7 routes
    - Verify Header and Footer appear on all pages
    - Verify active route highlighting works
    - _Requirements: 1.1-1.7, 3.1-3.3, 5.1-5.4_
  
  - [x] 15.2 Verify responsive behavior
    - Test all pages at mobile, tablet, and desktop breakpoints
    - Verify mobile menu functionality
    - _Requirements: 7.1-7.4_
  
  - [x] 15.3 Verify accessibility
    - Test keyboard navigation through all routes
    - Verify screen reader compatibility
    - Run jest-axe on all pages
    - _Requirements: 8.1-8.4_
  
  - [x] 15.4 Verify animations and styling
    - Test scroll reveal animations on each page
    - Verify all Tailwind styling is preserved
    - Test hover and focus states
    - _Requirements: 9.1-9.4_
  
  - [x] 15.5 Verify existing routes still work
    - Test /news/[slug] dynamic routes
    - Test 404 page for invalid routes
    - Verify sitemap includes all routes
    - _Requirements: 14.1-14.4_

- [x] 16. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- The design uses TypeScript with Next.js 14 App Router
- Server Components are used by default, Client Components only where needed
- All property-based tests use fast-check with minimum 100 iterations
- Checkpoints ensure incremental validation throughout implementation
