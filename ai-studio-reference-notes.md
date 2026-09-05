# Google AI Studio reference notes

The provided Google AI Studio app is accessible after browser authentication. Its title is “NextEdge Access Solutions - Digital Ecosystem.” The visible app preview includes a dark, high-contrast NEAS site with technical amber/gold accents, operational green status accents, monospace-style headings, a persistent header, request-quote actions, service cards, project/case-study cards, HSE content, careers, resources, and footer contact actions.

The app exposes source-file buttons for `src/components/home/TestimonialsSection.tsx`, `src/views/main/HomeView.tsx`, and `src/data/initialData.ts`, plus an editable prompt area. The accessible preview includes direct email, telephone, quote-wizard, service, project, HSE, careers, social, and website interactions. The supplied design prompt states the intended domain as `https://nextedge-access-solutions.com/` and emphasizes “Engineered Precision,” dark slate surfaces, hazard amber CTA accents, emerald safety/status accents, monospace technical metadata, and WCAG AA contrast.

No code has been copied yet. The current NEAS project must be compared before applying compatible changes; do not overwrite existing database, auth, CMS, or scheduling functionality solely from the visual reference.

## Authenticated project observations

The AI Studio app is now accessible. The project contains a dark industrial digital ecosystem with routes/sections for Home, Services, Industries, Projects, Safety/HSE, Careers, Resources, and Contact. The preview exposes `src/views/main/SafetyView.tsx`, `src/views/main/ContactView.tsx`, `src/components/common/QuoteModal.tsx`, `src/utils/emailUtils.ts`, `src/components/home/TestimonialsSection.tsx`, `src/views/main/HomeView.tsx`, `src/data/initialData.ts`, `src/components/common/Footer.tsx`, `src/types.ts`, and `src/utils/emailUtils.ts` as accessible source-file controls. The project history shows a build, but also shows quota-limit errors and canceled AI operations; therefore the accessible app may not represent a clean, complete export.

The preview explicitly includes a `Request a Quote` flow, direct hotline links, email dispatch links, a quote wizard, service/industry/project filters, HSE policy, careers, social links, a website link to `https://nextedge-access-solutions.com/`, and a footer. These are useful reference patterns, but user-generated testimonials must not be copied as fabricated content.

## HomeView source inspection

The HomeView source preview shows a component-driven React structure with imports for `Shield`, `ArrowRight`, `Crown`, `CheckCircle`, `Wind`, `Layers`, `Waves`, `Activity`, `Award`, `Globe2`, `HardHat`, `Users`, `FileCheck`, `AlertTriangle`, `ChevronRight`, `PhoneCall`, and `Mail`. It imports `MovingRopeAccessHero` and `TestimonialsSection`, and uses `AppContext` state for quote-modal and selected-quote-service behavior. The visible code renders the hero first, followed by a value-proposition section with technical cards and a testimonials component.

The reference has a strong dark industrial visual language, responsive grid sections, quote-modal entry points, and high-contrast CTA interactions. The visible AI Studio history indicates some edits were incomplete or quota-limited, so only stable design patterns and non-user-generated content should be adapted.

## Code-view findings

The selected HomeView code confirms an intended composition of a moving rope-access hero, value propositions, technical strength cards, testimonials, service navigation, and quote-modal interactions. The source preview is not exposed as a downloadable plain-text file through the current browser extraction, so the adaptation will be based on the visible component names, content structure, and design prompt rather than a blind copy.

The reference app has quota-limit and canceled-generation history. It also includes a TestimonialsSection request involving star ratings; this must not be copied as fabricated reviews or ratings. Any social-proof section in the current site should use verifiable project facts or be omitted.

## Export opportunity

The authenticated AI Studio code view exposes an `Export` control alongside the file explorer. A downloadable export may provide more complete source than the browser’s truncated code extraction, so it will be attempted before implementing large visual changes. If export is unavailable or incomplete, the current NEAS React architecture will be updated from the verified reference structure and design tokens only.

The current NEAS homepage already has the core conversion and content structure: hero, services, projects, resources, store/booking CTA, quote form, CMS blocks, database-backed project/navigation/global content, and an admin portal. The reference can therefore be adapted incrementally rather than replacing the working page wholesale.

## Export result

The AI Studio Export menu exposes a “Download as .zip file — Standard project archive” action, but the browser interaction did not confirm a persisted download: the semantic menu-item click did not persist, the option selector rejected the non-select widget, and a coordinate click closed the menu without reporting a download. The project remains usable in-browser, but no source archive is yet available locally.

## NEAS adaptation verification

The compatible adaptation is now implemented in the current project: the homepage hero uses a dark industrial command-style presentation with amber/emerald status cues, capability snapshot cards, direct hotline and quote actions, and the existing NEAS service labels. The current CMS blocks, project filters, quote form, store section, admin portal, and existing routes remain intact.

Desktop verification shows the hero fills the first viewport with readable hierarchy, a balanced two-column layout, and a visible quote CTA. Mobile verification shows the navigation collapsing cleanly, the hero text wrapping without overflow, and quote/call/service actions remaining reachable. No customer reviews, star ratings, or unsupported performance claims were copied from the AI Studio export.

## Final verification evidence

The final production validation completed successfully: TypeScript reported no errors, all 16 Vitest tests passed, and the production build completed. A source audit found the requested booking URL centralized in Home.tsx as `https://neas-store-booking.vercel.app/#quote` with no inconsistent legacy booking URL references. The desktop homepage review showed the dark industrial hero, navigation, capabilities card, quote CTA, and hotline action rendering without visible layout defects. The 390px mobile review showed the collapsed header, readable hero copy, stacked quote/call/service actions, and no horizontal overflow in the first viewport.

## Field-focused refinement verification

The updated homepage keeps the existing NEAS content flow while adding a compact field-operations strip, a higher-contrast industrial hero, technical service signals, and an industry discovery section. Desktop full-page review shows the new sections sit cleanly above the existing about, team, services, projects, training, resources, store, quote, and footer sections. Mobile full-page review shows the hero and industry cards stack correctly, the header remains compact, and the existing CTA/form flow remains reachable without visible horizontal overflow.

Validation after this refinement: TypeScript passed, 18 Vitest tests passed, and the production build completed. No new packages, external integrations, testimonials, certifications, or invented statistics were introduced.

## Hero label copy verification

The service strip now presents Residential & Commercial, Commercial & Construction, Telecom & Wind Energy, and Training & Consultancy. Desktop and mobile captures show the hero remains readable and the label copy does not introduce visible overflow in the reviewed viewport sizes. TypeScript, the 18-test Vitest suite, and the production build passed after the copy update.

## Capability and service-label verification

The hero capability snapshot remains content-backed and unchanged, while the service strip now cleanly reads Residential & Commercial, Construction & Industrial, Telecom & Wind Energy, and Training & Consultancy. Desktop review shows the labels align across the hero footer. Mobile review shows the stacked hero remains readable without visible horizontal overflow; the service strip is below the fold and inherits the same responsive layout rules.

Validation after this correction: TypeScript passed, all 18 Vitest tests passed, and the production build completed successfully.

## Capability snapshot taxonomy verification

The capability snapshot now uses the normalized titles Residential & Commercial; Wind, Telecom, Construction & Industrial; Safety-led delivery; and Equipment, Training & Consultancy. Desktop review confirms all titles and grounded descriptions fit the dark hero panel with strong contrast. Mobile review confirms the hero’s primary controls remain usable; the capability panel continues below the fold without introducing visible overflow.

Validation after the taxonomy correction: TypeScript passed, all 18 Vitest tests passed, and the production build completed successfully.
