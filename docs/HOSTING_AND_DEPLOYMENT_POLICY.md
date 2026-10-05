# Hosting & Deployment Policy

Last reviewed: 2026-10-05

## Source of Truth
GitHub stores the source code and project history. GitHub is not automatically the production host.

## Default Hosting Direction

### Cloudflare Workers
Preferred for:
- Studio portfolio/showcase deployments
- Static and hybrid marketing sites
- Cost-sensitive managed websites
- Sites that benefit from Cloudflare's edge network, R2, Images, or other Workers services

Cloudflare currently recommends Workers as its primary application platform rather than starting new application projects on Pages.

For Next.js on Workers, use the currently supported Cloudflare deployment path only after compatibility testing. Deployment adapters can change over time, so compatibility must be reviewed per project before launch.

### Vercel Pro
Preferred when:
- Native Next.js deployment simplicity is materially valuable
- A project relies heavily on Vercel-native Next.js behavior
- Preview/developer workflow justifies the additional cost
- A project-specific reason makes Vercel the safer production choice

Do not deploy commercial client work on Vercel Hobby. Hobby is restricted to personal/non-commercial use.

## Hosting Ownership

For each paid client, decide at proposal stage:

### Client-Owned Infrastructure
Preferred for clients who need:
- Long-term portability
- Direct ownership
- Their own billing relationship
- Easier handover if the management relationship ends

Threeell Studio receives the access required to manage deployment.

### Studio-Managed Infrastructure
May be used where provider terms and the commercial agreement permit it.

Requirements:
- Client-specific cost tracking
- Documented deployment
- Documented migration/handover path
- No hidden dependency on one person's memory
- Hosting cost included transparently in the management model

Do not assume a provider permits resale, service-bureau use, or third-party hosting. Review current provider terms before standardizing multi-client hosting under one account.

## Domains
The client's production domain should normally be registered in the client's name/account, with Threeell Studio granted appropriate DNS access.

Avoid making the studio the sole legal owner of a client's domain unless there is a deliberate written agreement.

## Environment Variables and Secrets
- Store production secrets only in approved secret/environment-variable systems.
- Never commit secret values to GitHub.
- Keep .env.example value-free.
- Rotate credentials after exposure.
- Document the name/purpose of each variable without storing the secret.

## Deployment Flow
1. Develop locally / preview
2. Commit to GitHub
3. Run QA
4. Create production deployment
5. Verify domain/HTTPS
6. Verify forms/analytics
7. Record release in changelog
8. Keep a rollback path

## Rollback
Every production project must have at least one practical rollback method:
- Previous platform deployment
- Previous Git commit/tag
- Backup snapshot for CMS/data-dependent systems

## CMS Hosting
When WordPress is used, WordPress hosting is treated as its own infrastructure decision. The headless frontend and WordPress backend may be hosted separately.
