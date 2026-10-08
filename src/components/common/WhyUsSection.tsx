import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { SafeCountUp as CountUp } from '../SafeCountUp';

interface WhyUsSectionProps {
  /** Body paragraph below the heading */
  body: string;
  /** Four bullet points */
  bullets: [string, string, string, string];
  /** Numeric value for the CountUp stat */
  statEnd: number;
  /** Decimal places for the CountUp (default 0) */
  statDecimals?: number;
  /** Suffix to append after the stat number, e.g. "%" or "+" */
  statSuffix?: string;
  /** Label below the stat number */
  statLabel: string;
  /** Optional "Learn More" link rendered below the bullets */
  learnMoreHref?: string;
}

/**
 * Shared "Why Mints Global?" section used across service pages.
 * Renders a two-column layout: bullet list on the left, animated stat on the right.
 */
export function WhyUsSection({
  body,
  bullets,
  statEnd,
  statDecimals = 0,
  statSuffix = '%',
  statLabel,
  learnMoreHref,
}: WhyUsSectionProps) {
  return (
    <section className="py-20 sm:py-24 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#687838] block mb-3">Enterprise Advantage</span>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-[#182012]">
            Why <span className="text-[#687838]">Mints Global?</span>
          </h2>
          <p className="text-[#5A644D] mb-8 leading-relaxed text-sm sm:text-base">{body}</p>
          <ul className="space-y-3.5">
            {bullets.map((item) => (
              <li key={item} className="flex items-center gap-3 font-semibold text-sm text-[#182012]">
                <div className="w-5 h-5 rounded-full bg-[#EDF2E2] text-[#687838] flex items-center justify-center shrink-0">
                  <CheckCircle2 size={16} />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {learnMoreHref && (
            <Link
              to={learnMoreHref}
              className="mt-8 text-sm font-semibold w-fit inline-flex items-center gap-2 hover:text-[#515E2C] transition-colors text-[#687838]"
            >
              <span>Learn More</span>
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
        <div className="bg-white border border-[#E4E4E4] rounded-3xl p-8 sm:p-12 relative overflow-hidden aspect-square flex items-center justify-center shadow-xl shadow-[#687838]/8 hover:border-[#687838] transition-colors">
          <div className="absolute inset-0 opacity-60 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#EDF2E2] via-[#F4F7EE] to-transparent pointer-events-none" />
          <div className="relative text-center z-10">
            <div className="font-mono text-5xl sm:text-6xl lg:text-7xl font-bold text-[#182012] mb-3 tabular-nums">
              <CountUp end={statEnd} decimals={statDecimals} duration={2.5} enableScrollSpy />
              <span className="text-[#687838] ml-1">{statSuffix}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDF2E2] border border-[#DBE4C7] font-sans font-bold text-[#353E20] uppercase tracking-wider text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#687838]"></span>
              <span>{statLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
