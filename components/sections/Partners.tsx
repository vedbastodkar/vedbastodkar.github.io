// ── §6 Partnership ──────────────────────────────────────────────
// bg: textTitle (#1A2E1A) — dark, so the partnership ask carries the same
// visual weight as the product. accentGold (#D1A945) for the eyebrow only.
// Buttons are bgSage-filled with dark text — brandGreen never sits on dark.
//
// This used to be a sage section of four partner-type cards, each ending in
// its own "Get in touch" mailto — four competing CTAs, and a near-verbatim
// duplicate of the four detailed rows on /partners. It now leads with what a
// partner actually gets, names the four audiences in a single row, and ends
// on one next step.

import Link from 'next/link'
import FadeUp from '@/app/components/FadeUp'

const OFFER = [
  {
    title: 'The full app, free for every student',
    body: 'No per-seat cost, no cost to families, no ads or upsells. Budget approval is not a prerequisite for getting started.',
  },
  {
    title: '95 standards-aligned lessons',
    body: 'Ten units, 3–5 minutes each, self-paced. Drops into an existing economics or life-skills course without new teacher training.',
  },
  {
    title: 'Progress dashboards for your staff',
    body: 'See who has started, who is engaged, and how far each student has gotten, without chasing anyone for updates.',
  },
  {
    title: 'Outcomes you can report',
    body: 'Participation and completion data your team can put straight into grant reporting and board updates.',
  },
]

const AUDIENCES = [
  'Schools & districts',
  'Youth organizations',
  'Corporate & foundation',
  'Individual students',
]

export default function Partners() {
  return (
    <section className="bg-textTitle grain-overlay" data-testid="partnership">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">

        {/* Header */}
        <FadeUp delay={0}>
          <div
            className="partnership-head"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '64px',
              alignItems: 'end',
              marginBottom: '56px',
            }}
          >
            <div>
              <h2
                className="font-body font-bold tracking-[-0.02em] leading-[1.06]"
                style={{ fontSize: 'clamp(36px, 4.4vw, 56px)', color: '#E6EDD9' }}
              >
                Your organization
                <br />
                could be next.
              </h2>
            </div>

            <div>
              <p
                className="font-body text-[16px] leading-[1.75] mb-8"
                style={{ color: 'rgba(230,237,217,0.62)' }}
              >
                Breakthrough Twin Cities and the Young Kings &amp; Queens Foundation
                already put Bread Head in front of their students. If you run a
                classroom, a program, or a fund that reaches teenagers, we can do the
                same for you, at no cost to the young people you serve.
              </p>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link
                  href="/partners"
                  className="partnership-cta-primary"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    fontSize: '15px',
                    color: '#1A2E1A',
                    background: '#E6EDD9',
                    textDecoration: 'none',
                    padding: '14px 30px',
                    borderRadius: '100px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    minHeight: '48px',
                    boxSizing: 'border-box',
                    transition: 'opacity 0.15s ease',
                  }}
                >
                  Partner with Bread Head →
                </Link>
                <a
                  href="mailto:partners@bread-head.org"
                  className="partnership-cta-ghost"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '15px',
                    color: '#E6EDD9',
                    background: 'transparent',
                    border: '1px solid rgba(230,237,217,0.28)',
                    textDecoration: 'none',
                    padding: '14px 30px',
                    borderRadius: '100px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    minHeight: '48px',
                    boxSizing: 'border-box',
                    transition: 'background 0.15s ease',
                  }}
                >
                  Email us
                </a>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* What a partner gets */}
        <div
          className="partnership-offer"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            columnGap: '64px',
            rowGap: '0',
          }}
        >
          {OFFER.map((o, i) => (
            <FadeUp key={o.title} delay={i * 0.06}>
              <div
                style={{
                  paddingTop: '28px',
                  paddingBottom: '28px',
                  borderTop: '1px solid rgba(230,237,217,0.12)',
                }}
              >
                <h3
                  className="font-body font-semibold text-[19px] leading-[1.3] mb-2"
                  style={{ color: '#E6EDD9' }}
                >
                  {o.title}
                </h3>
                <p
                  className="font-body text-[14px] leading-[1.7]"
                  style={{ color: 'rgba(230,237,217,0.55)', maxWidth: '460px' }}
                >
                  {o.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Who we work with */}
        <FadeUp delay={0}>
          <div
            className="partnership-audiences"
            style={{
              marginTop: '24px',
              paddingTop: '28px',
              borderTop: '1px solid rgba(230,237,217,0.12)',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              flexWrap: 'wrap',
            }}
          >
            <span
              className="font-body font-semibold text-[11px] tracking-[0.13em] uppercase"
              style={{ color: 'rgba(230,237,217,0.40)' }}
            >
              We work with
            </span>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {AUDIENCES.map((a) => (
                <span
                  key={a}
                  className="font-body font-medium text-[13.5px]"
                  style={{
                    color: 'rgba(230,237,217,0.78)',
                    border: '1px solid rgba(230,237,217,0.20)',
                    borderRadius: '100px',
                    padding: '8px 16px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
