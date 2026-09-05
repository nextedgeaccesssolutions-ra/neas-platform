import { Activity, ArrowUpRight, CheckCircle2, ChevronRight, FileCheck, HardHat, PhoneCall, ShieldCheck } from "lucide-react";

const COMPANY_PHONE = "+639914265886";
const COMPANY_PHONE_DISPLAY = "+63 991 426 5886";

const capabilityItems = [
  ["Residential & Commercial", "Rope-access methods designed for complex work at height."],
  ["Wind, Telecom, Construction & Industrial", "Technical support across critical infrastructure and asset types."],
  ["Safety-led delivery", "Clear scope, site controls, and dependable project communication."],
  ["Equipment, Training & Consultancy", "PPE supply, work-at-height learning, and safety consultancy."],
] as const;

export default function IndustrialReferenceHero() {
  return (
    <section aria-label="NextEdge Access Solutions industrial access presentation" className="relative overflow-hidden border-b border-[#264d56] bg-[#07141c] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(245,158,11,.16),transparent_32%),linear-gradient(120deg,#07141c_0%,#102f39_58%,#07141c_100%)]" aria-hidden="true" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(245,158,11,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,.16)_1px,transparent_1px)] [background-size:44px_44px]" aria-hidden="true" />
      <div className="container relative grid min-h-[640px] items-center gap-12 py-20 md:grid-cols-[1.15fr_.85fr] md:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/35 bg-[#f59e0b]/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[.16em] text-[#fbbf24]">
            <span className="h-2 w-2 rounded-full bg-[#10b981] shadow-[0_0_0_4px_rgba(16,185,129,.14)]" aria-hidden="true" />
            Engineered precision · NEAS Philippines
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-.045em] md:text-7xl">
            High-angle access for
            <span className="block text-[#fbbf24]">critical work at height.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d3e0e2]">
            Certified rope access, inspection, maintenance, training, and equipment solutions for wind, telecom, construction, commercial, and industrial operations.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex h-12 items-center gap-3 rounded-md bg-[#f59e0b] px-6 font-bold text-[#07141c] shadow-[0_14px_35px_rgba(245,158,11,.18)] transition hover:-translate-y-0.5 hover:bg-[#fbbf24] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f59e0b]/35">
              Request a quote <ArrowUpRight size={18} />
            </a>
            <a href={`tel:${COMPANY_PHONE}`} className="inline-flex h-12 items-center gap-3 rounded-md border border-[#10b981]/45 bg-[#10b981]/10 px-5 font-semibold text-[#a7f3d0] transition hover:border-[#10b981] hover:bg-[#10b981]/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#10b981]/25">
              <PhoneCall size={17} /> Call now: {COMPANY_PHONE_DISPLAY}
            </a>
            <a href="#services" className="inline-flex h-12 items-center gap-2 rounded-md border border-[#55757b] bg-[#0f2730]/80 px-5 font-semibold text-[#e7eff0] transition hover:border-[#f59e0b]/65 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f59e0b]/25">
              Explore services <ChevronRight size={17} />
            </a>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[.14em] text-[#9db4b7]">
            <span className="inline-flex items-center gap-2"><Activity size={14} className="text-[#10b981]" /> Safe · Reliable · Professional</span>
            <span className="hidden h-1 w-1 rounded-full bg-[#55757b] sm:block" aria-hidden="true" />
            <span>Rapid project mobilisation</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="rounded-2xl border border-[#f59e0b]/25 bg-[#0b2029]/90 p-6 shadow-[0_24px_70px_rgba(0,0,0,.28)] backdrop-blur-md md:p-7">
            <div className="flex items-center justify-between border-b border-[#294b53] pb-4">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-[#f59e0b]/30 bg-[#f59e0b]/10 text-[#fbbf24]"><ShieldCheck size={23} /></div>
                <div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#fbbf24]">Capabilities snapshot</p><p className="mt-1 text-xs text-[#94acaf]">Built around the work, not the template.</p></div>
              </div>
              <span className="rounded bg-[#10b981]/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[.1em] text-[#6ee7b7]">NEAS</span>
            </div>
            <div className="mt-5 space-y-4">
              {capabilityItems.map(([title, description], index) => (
                <div key={title} className="flex items-start gap-3">
                  {index === 0 ? <ShieldCheck className="mt-0.5 shrink-0 text-[#10b981]" size={17} /> : index === 1 ? <HardHat className="mt-0.5 shrink-0 text-[#10b981]" size={17} /> : index === 2 ? <CheckCircle2 className="mt-0.5 shrink-0 text-[#10b981]" size={17} /> : <FileCheck className="mt-0.5 shrink-0 text-[#10b981]" size={17} />}
                  <div><p className="text-sm font-semibold text-white">{title}</p><p className="mt-1 text-xs leading-5 text-[#9db4b7]">{description}</p></div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-dashed border-[#41636a] bg-[#07141c]/70 p-4 text-xs leading-5 text-[#c4d3d5]">
              <span className="font-bold text-[#fbbf24]">20+ years</span> of combined local and international experience, with project communication designed for operations, HSE, and procurement teams.
            </div>
          </div>
        </div>
      </div>
      <div className="container relative grid grid-cols-2 gap-y-3 border-t border-[#294b53] py-5 text-[10px] font-bold uppercase tracking-[.22em] text-[#91aaad] sm:grid-cols-4">
        <span>Residential &amp; Commercial</span><span>Construction &amp; Industrial</span><span>Telecom &amp; Wind Energy</span><span>Training &amp; Consultancy</span>
      </div>
    </section>
  );
}
