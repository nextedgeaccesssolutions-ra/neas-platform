# NEAS Final Verification

## Live services

| Service | URL | Result |
|---|---|---|
| Main website | https://nextedge-access-solutions.com/ | HTTP 200 |
| `www` website | https://www.nextedge-access-solutions.com/ | Redirects to apex; HTTP 200 |
| Protected CMS | https://nextedge-access-solutions.com/admin | HTTP 200; OAuth sign-in completed; authorized admin workspace loaded |
| Public CMS API | https://nextedge-access-solutions.com/api/trpc/publicSite.globals | HTTP 200 |
| Custom-domain store | https://store.nextedge-access-solutions.com/ | HTTP 200; Vercel reports valid project-specific CNAME |
| Store fallback | https://neas-online-store.vercel.app/ | HTTP 200 |

## CMS publication and rollback proof

A synthetic global announcement was created through the real server-side CMS procedure, published, observed through the live public globals API, rolled back through the durable global-section revision procedure, and removed. The proof returned:

```json
{
  "globalSectionId": 30001,
  "publishedVisible": true,
  "rollbackRemovedMarker": true,
  "revisionCount": 2
}
```

Follow-up database queries confirmed that zero synthetic global sections and zero synthetic revisions remained.

## Store backend and contact verification

Three approved synthetic requests—service booking, meeting request, and equipment quotation—were submitted through the deployed store proxy, confirmed in the CMS submissions table, and deleted afterward. Automated browser checks activated every deployed `tel:` and `mailto:` action at desktop and mobile viewport sizes.

## Quality checks

The main application passes TypeScript validation and all 10 Vitest tests. The standalone store completes a production Vite build. Desktop and mobile previews were reviewed for the homepage, CMS, and store experiences.

## DNS and email preservation

The apex and `www` hostnames use the Manus custom-domain routing required for the authenticated full-stack CMS. The `store` hostname uses Vercel's project-specific CNAME target. Existing webmail, MX, SPF, DKIM, DMARC, and ownership-verification records were preserved.
