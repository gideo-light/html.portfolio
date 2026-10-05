# Cost Baseline

Last reviewed: 2026-10-05

This is an internal planning reference, not a client price list. Vendor pricing changes, so verify before quoting long-term contracts.

## Cloudflare Workers
Current public pricing:
- Free tier: 100,000 Worker requests/day
- Paid Workers plan: starts at $5/month
- Paid plan includes 10 million requests/month plus included CPU usage
- Static asset requests are free
- Paid Workers has usage-based overages

Studio use:
Strong default candidate for low-cost production and portfolio deployments.

## Cloudflare R2
Current public pricing includes:
- 10 GB/month storage free tier
- Standard storage after included usage: $0.015/GB-month
- No Internet egress charge from R2
- Request charges apply after included operation quotas

Studio use:
Large images, downloadable assets, video/media files, or other object storage when repository storage is inappropriate.

## Cloudflare Images
Current public pricing:
- Up to 5,000 unique transformations/month on the Free plan
- Paid transformations after included amount: $0.50 per 1,000 unique transformations
- Stored image and delivery pricing applies when using Cloudflare Images storage

Studio use:
Dynamic image resizing/optimization when justified.

## Vercel
Current public pricing:
- Hobby: $0, but restricted to personal/non-commercial use
- Pro: $20/month platform fee with one deploying seat and $20 monthly usage credit
- Additional usage is usage-based

Studio rule:
Never rely on Hobby for paid client/commercial deployments.

## Resend
Current public transactional-email pricing:
- Free: 3,000 emails/month, 100/day, 3 domains
- Pro: $20/month, 50,000 emails/month, 10 domains
- Paid overages available

Studio use:
Contact forms and transactional email. Decide whether each client owns its sending account/domain or whether an approved studio-managed model is appropriate.

## Cloudinary
Current public self-service pricing:
- Free: $0 with 25 monthly credits
- Plus: $99/month monthly billing
- Advanced: $249/month monthly billing

Studio rule:
Do not add Cloudinary by default. Use it when its media-management/transformation features justify the cost.

## UptimeRobot
Current public pricing:
- Free: 50 monitors, 5-minute interval
- Paid Solo starts around $12/month on annual billing / $13 monthly at the reviewed pricing
- Higher tiers provide faster checks and more team features

Studio use:
Start with baseline monitoring and move to paid monitoring as managed-client count and SLA expectations justify it.

## Sanity
Current platform offers a Free plan and paid plans. Current Free limits include up to 20 users, 2 datasets, 10,000 documents, and other quotas.

Studio use:
Optional headless CMS, not a default recurring cost.

## Cost Policy
- Never choose software merely because it has a free tier.
- Never build a commercial dependency around a free tier whose terms prohibit the intended use.
- Client-specific paid infrastructure should be included in the commercial model or billed/passed through transparently.
- Recheck vendor pricing before signing a long-term fixed-cost maintenance agreement.
