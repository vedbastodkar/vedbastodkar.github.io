// ── §2 Traction — the proof block, directly under the hero ──────
// bg: white (#FFFFFF)
// One section carries every credibility signal we actually have:
// the Congressional App Challenge win, the organisations already running
// Bread Head with their students, and the nonprofit / free-for-students
// facts. Replaces the old AwardStrip, which sat five screens down and
// carried the award alone.
//
// Nothing here may be a claim we cannot source. Award facts mirror
// CongressionalWin (/about); partner facts mirror PilotPartner.

import Image from 'next/image'
import Link from 'next/link'
import FadeUp from '@/app/components/FadeUp'
import PilotPartner from './PilotPartner'

const FACTS = [
  { k: '501(c)(3)', v: 'registered nonprofit' },
  { k: '95', v: 'lessons across 10 units' },
  { k: 'Free', v: 'for students, always' },
]

export default function Traction() {
  return (
    <section style={{ background: '#FFFFFF' }} data-testid="traction">
      <div
        className="traction-inner"
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '72px 24px 44px' }}
      >

        {/* ── Award: photo + citation ── */}
        <div
          className="traction-award"
          style={{
            display: 'grid',
            gridTemplateColumns: '44% 56%',
            gap: '56px',
            alignItems: 'stretch',
          }}
        >
          <FadeUp delay={0}>
            <div
              className="traction-photo"
              style={{
                position: 'relative',
                height: '100%',
                minHeight: '320px',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(26,46,26,0.10)',
                boxShadow: '0 12px 48px rgba(26,46,26,0.12)',
              }}
            >
              <Image
                src="/assets/omar_townhall_wide.png"
                alt="Congressional App Challenge award ceremony, Minneapolis"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center center' }}
                sizes="(max-width: 1023px) 100vw, 44vw"
                quality={90}
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

              {/* Gold winner badge */}
              <span
                style={{
                  alignSelf: 'flex-start',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: '11px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#B8922A',
                  background: 'rgba(193,154,50,0.09)',
                  border: '1px solid rgba(193,154,50,0.25)',
                  borderRadius: '100px',
                  padding: '6px 14px',
                  marginBottom: '18px',
                }}
              >
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M6 0l1.35 3.9H11l-3 2.2 1.14 3.9L6 7.9l-3.14 2.1L4 6.1 1 3.9h3.65L6 0z" fill="#B8922A" />
                </svg>
                2025 Winner · MN-05
              </span>

              <h2
                className="traction-h2"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontWeight: 700,
                  fontSize: 'clamp(28px, 3.2vw, 44px)',
                  color: '#1A2E1A',
                  lineHeight: 1.12,
                  letterSpacing: '-0.01em',
                  maxWidth: '520px',
                  margin: '0 0 14px',
                }}
              >
                Winner of the Congressional App Challenge.
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  color: 'rgba(26,46,26,0.62)',
                  lineHeight: 1.7,
                  margin: '0 0 26px',
                  maxWidth: '440px',
                }}
              >
                Bread Head took Minnesota&apos;s 5th District in the national student
                technology competition run by the U.S. House of Representatives.
                The award was presented at a congressional district townhall in
                Minneapolis.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href="https://www.congressionalappchallenge.us/25-MN05/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="traction-cta-gold"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#1A2E1A',
                    background: '#D1A945',
                    textDecoration: 'none',
                    padding: '12px 24px',
                    borderRadius: '100px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    minHeight: '44px',
                    boxSizing: 'border-box',
                  }}
                >
                  <span className="hidden md:inline">View official listing ↗</span>
                  <span className="inline md:hidden">Official listing →</span>
                </a>
                <Link
                  href="/about#CongressionalWin"
                  className="traction-cta-ghost"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '14px',
                    color: '#1A2E1A',
                    background: 'transparent',
                    border: '1px solid rgba(26,46,26,0.20)',
                    textDecoration: 'none',
                    padding: '12px 24px',
                    borderRadius: '100px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    minHeight: '44px',
                    boxSizing: 'border-box',
                  }}
                >
                  Read the story
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* ── Program partners ── */}
        <FadeUp delay={0}>
          <div
            style={{
              marginTop: '56px',
              paddingTop: '40px',
              borderTop: '1px solid rgba(26,46,26,0.10)',
            }}
          >
            <div
              className="traction-partners-head"
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                gap: '24px',
                marginBottom: '22px',
              }}
            >
              <Link
                href="/partners"
                className="traction-partners-link"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '14px',
                  color: '#4A5D4A',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                Partner with us →
              </Link>
            </div>

            <PilotPartner variant="compact" />
          </div>
        </FadeUp>

        {/* ── At-a-glance facts ── */}
        <FadeUp delay={0.06}>
          <div
            className="traction-facts"
            style={{
              marginTop: '40px',
              paddingTop: '32px',
              borderTop: '1px solid rgba(26,46,26,0.10)',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px',
            }}
          >
            {FACTS.map((f) => (
              <div key={f.k}>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 'clamp(24px, 2.4vw, 32px)',
                    color: '#1A2E1A',
                    lineHeight: 1.1,
                    margin: '0 0 6px',
                  }}
                >
                  {f.k}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: 'rgba(26,46,26,0.50)',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {f.v}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
