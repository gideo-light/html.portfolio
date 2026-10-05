# VANTA TABLE

P001 — Threeell Studio Luxury Restaurant Showcase

## Status
Working interactive prototype. Production build validated through GitHub Actions.

## Purpose
This project is the first full stress test of the Threeell Studio production system:
- bespoke design
- responsive implementation
- GSAP scroll choreography
- code-generated art direction
- pointer-responsive atmospheric canvas
- sticky menu storytelling
- scroll-built dessert sequence
- reduced-motion support
- reservation form UX
- CI build validation

## Stack
- Next.js 16.3.8
- React 19.3.0
- TypeScript
- GSAP 3.15.0
- Native CSS
- GitHub Actions

## Run Locally

```bash
cd apps/vanta-table
npm install
npm run dev
```

Then open the local URL printed by Next.js.

## Production Build

```bash
npm run build
npm start
```

## Current Asset Strategy
Version 0.1 deliberately uses no external photography. Dishes, room atmosphere and the interactive smoke field are code-generated so the design and motion system can be tested independently of final imagery.

Final art direction may introduce licensed, client-supplied or purposely generated food/interior photography without changing the underlying interaction architecture.

## Important
The reservation form is a portfolio prototype. It validates and shows a success state but intentionally does not transmit data.

## CI
Changes under `apps/vanta-table/**` trigger the Vanta Table GitHub Actions build workflow.

## Security
Do not commit production secrets, email API keys, analytics secrets or booking credentials.
