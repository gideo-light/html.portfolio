# P001 — Luxury Restaurant Showcase

Status: Creative Direction / Pre-Production
Studio: Threeell Studio
Project type: Interactive Premium Website
Purpose: Portfolio showcase + production-stack stress test

## Working Brand

**VANTA TABLE**

Positioning:
A fictional contemporary fine-dining restaurant built around fire, fermentation, seasonality, and precision.

This is a portfolio concept. It must feel like a credible international hospitality brand rather than a template restaurant website.

## What This Project Must Prove

P001 should demonstrate that Threeell Studio can deliver:
- Bespoke art direction
- Editorial typography
- High-end responsive composition
- Scroll-linked storytelling
- Sticky/pinned visual choreography
- Pointer/touch-responsive effects
- Advanced GSAP motion
- Selective WebGL/shader work
- Strong mobile adaptation
- Accessible fallback behavior
- Reservation conversion flow
- Production-minded performance

## Visual Direction

Avoid:
- Generic black-and-gold luxury styling
- Overused serif + thin gold lines as the entire identity
- Excessive glassmorphism
- Animation on every element
- Heavy 3D purely for spectacle

Direction:
- Ink black / warm bone / charred umber / oxidized red / muted herb green
- Editorial serif + restrained grotesk sans
- Strong asymmetry
- Large food imagery used as composition, not decoration
- Soft grain and controlled atmospheric texture
- Very deliberate negative space
- Motion that feels physical: weight, drag, friction, heat, smoke

## Core Experience

### 1. Entry / Loader
Short branded loading sequence only if actually necessary.

Idea:
A thin line behaves like heat shimmer, resolves into the wordmark, then opens into the hero.

Must not create fake loading delay.

### 2. Hero — The Table in Motion

Desktop:
- Left: large editorial headline and reservation CTA
- Right: 4 overlapping food/image compositions with different vertical offsets
- Pointer movement produces subtle depth, not card-tilt gimmicks
- A low-opacity colored fluid/shader field reacts to pointer velocity behind the imagery

Scroll behavior:
- Hero becomes temporarily pinned
- One primary dish remains visually anchored
- Other dish compositions peel/slip downward at different rates
- Headline reduces into a small running label
- Primary dish transitions into the next narrative section

Mobile:
- No desktop-style 4-image overload
- Use 2-image layered composition
- Shorter pin duration
- Touch movement influences aura/shader lightly
- Effects automatically reduce on lower-performance devices

### 3. Philosophy — Slow Transformation

Sticky storytelling section.

Visual remains pinned while three short narrative statements pass:

01 — Fire
02 — Time
03 — Restraint

The visual treatment changes subtly with each statement:
- heat distortion
- condensation
- smoke/colored diffusion

No literal fantasy effects.

### 4. Signature Menu — Pinned Dish / Moving Menu

This implements the interaction originally envisioned for a restaurant website.

Desktop:
- Food visual stays sticky on one side
- Menu categories scroll on the opposite side
- As each category reaches the active zone, the pinned composition changes
- Transition should feel like plating: mask, wipe, ingredient motion, or camera reframing
- Category progress appears as minimal typographic indexing

Possible categories:
- First
- Fire
- Sea
- Garden
- Sweet
- Cellar

Mobile:
- Sticky food image at top within a bounded section
- Menu items scroll below
- Category change swaps visual with a fast, low-cost mask transition

### 5. Signature Dessert — Scroll Assembly

A hero interaction unique to this showcase.

Concept:
A sculptural layered dessert assembles progressively as the visitor scrolls.

Possible construction:
- plate/base
- first pastry/cake layer
- cream
- second layer
- glaze
- garnish
- final dust / highlight

Implementation options:
A. Layered transparent image assets animated with GSAP
B. Lightweight Three.js composition if it materially improves the result
C. Hybrid DOM + WebGL

Rule:
Choose the cheapest rendering technique that still looks extraordinary.

Reverse scroll should partially disassemble the dessert naturally.

### 6. Dining Room / Atmosphere

Calmer section after the high-motion sequence.

- Full-width photography
- Editorial text
- Horizontal image reveal or controlled parallax
- Private dining / chef table callout

This section exists to restore rhythm and avoid animation fatigue.

### 7. Reservation

High-conversion section.

Fields:
- Date
- Time
- Party size
- Name
- Email
- Phone
- Optional note

Portfolio demo behavior:
Can use realistic front-end validation and a non-production/demo submission state until final service integration is intentionally configured.

Production pattern:
Validated server endpoint -> transactional email / booking integration.

### 8. Footer

Strong typographic ending, not a generic utility footer.

Potential interaction:
The restaurant wordmark becomes oversized while the page settles into a low-motion reactive gradient/smoke field.

Include:
- Address placeholder
- Hours
- Contact
- Social
- Reservation CTA
- Legal links

## Interaction System

### Motion tiers

Tier 1 — Essential UI motion
- navigation
- buttons
- menu states
- form feedback

Tier 2 — Brand motion
- typography reveal
- image masks
- section transitions
- sticky choreography

Tier 3 — Spectacle
- WebGL diffusion
- dessert assembly
- fluid pointer aura

Tier 3 must never prevent Tier 1 from functioning.

## Proposed Stack

- Next.js
- React
- TypeScript
- Tailwind CSS + custom CSS
- GSAP
- ScrollTrigger
- Three.js/WebGL only where justified
- Cloudflare Workers candidate for showcase deployment
- Cloudflare Web Analytics when published
- GitHub source control

## Performance Principles

- Use real responsive image sizes
- Lazy-load noncritical media
- Avoid autoplay video unless it earns its cost
- Keep shader resolution adaptive
- Disable/reduce expensive effects when device capability is weak
- Avoid long main-thread animation work
- Respect prefers-reduced-motion
- Do not ship huge source assets directly to the browser

## Accessibility Principles

- Semantic document structure
- Keyboard-operable navigation/forms
- Visible focus states
- Sufficient contrast
- Useful alt text
- Animation is enhancement, not the only carrier of meaning
- Reduced-motion experience remains visually intentional

## Portfolio Presentation

The final case study should show:
- Design rationale
- Desktop motion
- Mobile adaptation
- Interaction breakdown
- Performance considerations
- Stack
- Selected code/engineering notes
- Final live experience

## Next Production Steps

1. Lock brand identity and copy direction
2. Create wireframe/section architecture
3. Define typography and tokens
4. Generate temporary premium food/atmosphere assets
5. Build static responsive shell
6. Add GSAP motion
7. Add selective WebGL effect
8. Build dessert assembly
9. Add reservation demo
10. Mobile optimization
11. Accessibility/performance QA
12. Deploy showcase
13. Write portfolio case study
