# Project Standard

Every client or portfolio project should live in its own repository.

Recommended structure:

```
project-name/
├── README.md
├── docs/
│   ├── CLIENT.md
│   ├── DESIGN.md
│   ├── DEPLOYMENT.md
│   └── MAINTENANCE.md
├── src/
├── public/
├── assets/
├── .env.example
├── CHANGELOG.md
└── package.json
```

## Required Documentation

### README.md
- What the project is
- Current status
- Stack
- Setup instructions
- Important links

### CLIENT.md
- Business type
- Goals
- Audience
- Approved scope
- Important constraints
- Content ownership/approval notes

Do not store sensitive client secrets here.

### DESIGN.md
- Typography
- Color system
- Layout principles
- Motion principles
- Component notes
- Responsive rules

### DEPLOYMENT.md
- Hosting/deployment provider
- Build command
- Deployment process
- Domain/DNS notes
- Environment variable names only, never secret values
- Rollback procedure

### MAINTENANCE.md
- What is monitored
- Routine tasks
- Known dependencies
- Content-edit process
- What counts as maintenance vs new development

### CHANGELOG.md
Record meaningful production changes.

## Git Rules
- Main branch represents production-ready work.
- Significant changes should be made in a feature branch when practical.
- Use descriptive commit messages.
- Do not commit secrets.
- Keep `.env.example` safe and value-free.
- Large generated media should be handled deliberately rather than carelessly committed.

## Ownership Principle
The studio must be able to return to a project months later and understand how it works without relying on memory.
