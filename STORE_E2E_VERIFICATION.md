# NEAS Online Store End-to-End Verification

**Live store:** https://neas-online-store.vercel.app/

The deployed store was verified against the production NEAS CMS backend on 2026-08-29.

| Test | Result |
|---|---|
| Store homepage | HTTP 200 and visually rendered on desktop and 375 × 812 mobile viewport |
| Invalid backend payload | HTTP 400 with typed tRPC validation errors |
| Service-booking submission | HTTP 200; appeared in `formSubmissions` as ID `30001` with form name `store_service_booking` |
| Meeting-request submission | HTTP 200; appeared in `formSubmissions` as ID `30002` with form name `store_meeting_request` |
| Equipment-quote submission | HTTP 200; appeared in `formSubmissions` as ID `30003` with form name `store_equipment_quote` |
| CMS cleanup | The three clearly labeled synthetic test records were removed; remaining synthetic test count is zero |
| Primary phone action | `tel:+639914265886` was discovered and activated at 1280 × 800 desktop and 375 × 812 mobile test sizes |
| Secondary phone action | `tel:+639957708144` was discovered and activated at desktop and mobile test sizes |
| Sales email action | `mailto:sales@nextedge-access-solutions.com` was discovered and activated at desktop and mobile test sizes |
| Information email action | `mailto:info.nextedgeaccesssolutions@gmail.com` was discovered and activated at desktop and mobile test sizes |

The store sends quote, service-booking, equipment, and meeting requests through its same-origin Vercel proxy to the public `publicSite.submitContact` tRPC procedure. Submissions therefore appear in the protected CMS submission inbox without exposing staff routes or credentials.

The contact-action test used a real headless Chromium session against the deployed Vercel URL. It enumerated every unique `tel:` and `mailto:` link, activated each link through a click event, and asserted the four expected destinations for both desktop and mobile viewports. The machine-readable result is stored with the standalone store source as `verification/contact-actions.json`.
