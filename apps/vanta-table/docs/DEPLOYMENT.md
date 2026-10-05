# Deployment

## Current State
Source is stored in the Threeell Studio GitHub repository.

GitHub Actions performs a production build after relevant pushes.

## Intended Showcase Hosting
Cloudflare Workers is the current preferred candidate, subject to a final deployment compatibility check when publishing.

## Commands

Install:
```bash
npm install
```

Build:
```bash
npm run build
```

Run:
```bash
npm start
```

## Environment
The current prototype requires no production secrets.

Future reservation/email integration must use server-side environment variables.

## Rollback
Git commit history is the current rollback mechanism.

## Before Public Publication
- choose final URL/domain
- add final metadata/social image
- choose final imagery strategy
- perform browser/device QA
- run performance audit
- integrate analytics
- decide reservation integration
- document production provider settings
