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
    <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-display text-4xl font-black mb-6 uppercase">
            Why <span className="text-olive-500">Mints Global?</span>
          </h2>
          <p className="text-brand-white-70 mb-8 leading-relaxed">{body}</p>
          <ul className="space-y-4">
            {bullets.map((item) => (
              <li key={item} className="flex items-center gap-3 font-bold text-sm uppercase tracking-wide">
                <CheckCircle2 className="text-olive-500 shrink-0" size={20} />
                {item}
              </li>
            ))}
          </ul>
          {learnMoreHref && (
            <Link
              to={learnMoreHref}
              className="mt-8 text-sm font-bold w-fit flex items-center gap-2 hover:text-white transition-colors uppercase tracking-wider text-olive-500"
            >
              Learn More
            </Link>
          )}
        </div>
        <div className="bg-olive-900 border border-white/5 rounded-3xl p-10 relative overflow-hidden aspect-square flex items-center justify-center">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-olive-500 via-olive-900 to-olive-950" />
          <div className="relative text-center">
            <div className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-white mb-2">
              <CountUp end={statEnd} decimals={statDecimals} duration={2.5} enableScrollSpy />
              {statSuffix}
            </div>
            <div className="font-bold text-olive-500 uppercase tracking-widest text-sm">{statLabel}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
