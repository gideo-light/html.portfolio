# Threeell Studio — Production Stack

Last reviewed: 2026-10-05

This document defines the default technical stack. Deviations are allowed when a project has a clear reason.

## Core Frontend

### Default
- Next.js (current stable version per project)
- React
- TypeScript
- App Router for new builds unless a specific compatibility reason requires otherwise

### Styling
- Tailwind CSS for rapid layout/system work
- CSS custom properties for design tokens
- Purpose-built CSS for advanced visual treatment, animation, art direction, and effects

Tailwind is a tool, not the visual identity. Premium projects must not look like default component kits.

## Motion

### Default
- GSAP
- ScrollTrigger
- Native CSS transitions/animations for simple UI motion

Use advanced GSAP plugins only when they improve the experience.

Motion rules:
- Interaction must have purpose.
- Mobile behavior must be designed separately where necessary.
- Respect reduced-motion preferences.
- Avoid scroll hijacking unless there is a compelling, tested reason.
- Do not make core navigation or information depend on animation.

## 3D / Advanced Visuals

Use only when justified:
- Three.js
- WebGL
- GLSL shaders
- Canvas
- SVG

These are enhancement technologies, not defaults.

Progressive enhancement principle:
The website should still communicate and function if an advanced visual effect is unavailable or intentionally reduced.

## CMS Policy

### Default: No CMS
If Threeell Studio manages a site and content changes are rare, content stays in the codebase or structured project data.

Benefits:
- Smaller attack surface
- Lower maintenance burden
- Cleaner performance profile
- Fewer moving parts

### WordPress
Use WordPress when:
- The client explicitly requires WordPress
- Client staff need familiar editorial access
- Content changes frequently
- The project benefits from WordPress ecosystem functionality

Possible modes:
1. Custom WordPress theme
2. Headless WordPress using the WordPress REST API

Do not use WordPress only because it is familiar.

### Sanity
Secondary headless CMS option when:
- Structured content is important
- No WordPress requirement exists
- A cleaner purpose-built editorial model is preferable

Do not add a CMS to a project that does not need one.

## Forms and Transactional Email

Default service:
- Resend

Pattern:
Website form -> validated server endpoint -> Resend -> client destination inbox

Requirements:
- Server-side validation
- Spam protection/rate limiting where appropriate
- Clear success and failure states
- Never expose API keys in frontend code

## Analytics

Default:
- Cloudflare Web Analytics for lightweight privacy-first traffic/performance analytics

Use a more advanced analytics product only when the client's marketing requirements justify it.

## Media

### Normal project media
- Optimize images before deployment
- Use responsive image delivery
- Avoid shipping original camera-resolution assets unnecessarily

### Large or dynamic media
Preferred infrastructure:
- Cloudflare R2 for object storage
- Cloudflare Images when dynamic image transformation/delivery is useful
- Cloudinary only when its richer media workflow materially benefits the project

Do not commit huge video libraries or raw media archives directly into project repositories.

## Monitoring

Baseline:
- Uptime monitoring
- SSL/domain-expiry monitoring where available
- Form checks for important lead-generation sites
- Production error monitoring for application-style projects

Start lean; upgrade monitoring as the number and criticality of managed sites grows.

## Source Control

- GitHub
- One repository per client/showcase project
- Main branch = production-ready
- Feature branches for meaningful changes
- Descriptive commits
- No secrets in repositories

## Architecture Rule

Use the simplest architecture that can safely deliver the required experience.

Premium does not mean technically complicated.
Premium means the implementation, design, performance, interaction, reliability, and maintenance are all deliberate.
