# Opportunity Radar

A personal tracker for hackathons, developer meetups, AI workshops, bootcamps, internships, and job fairs around Kolkata, online, and Japan.

[Live app](https://milan-opportunity-radar.milanchanda80.chatgpt.site)

## Features

- Structured cards, search, and filters for event type, location, eligibility, deadline, language, and profile fit.
- Sort by registration deadline, event date, or name.
- Saved, applied, attended, and skipped statuses.
- Notes, editable personal checklists, and duplicate checks.
- JSON import/export and optional tentative past leads.
- Public viewing with owner-only editing enforced on the server.

## Development

Requires Node.js 22+ and Bash. No npm dependencies.

```sh
npm test
npm run build
npm run validate
```

The frontend and API are embedded in `worker/index.js`. Opportunity records use Cloudflare D1. Migrations live in `drizzle/`.

## Hosting and identity

Deployed with ChatGPT Sites and the D1 binding `DB`. The manifest identifies the existing Site; forks must replace its project ID before deployment. Sites supplies trusted identity headers. Write operations require a signed-in user ID and the configured owner email. Replace this authentication integration before hosting on a different platform. The owner email is configured in the Worker and permission test.

Public visitors can view records, including notes and checklists. Only the owner's signed-in account can edit them.

## Limitations

This is a manual tracker, not an automatic event search service. Past leads are unverified and may refer to previous editions. Unknown details remain unknown. Confirm official links, dates, eligibility, and language requirements before applying. Fit is a manual assessment, not guaranteed eligibility.
