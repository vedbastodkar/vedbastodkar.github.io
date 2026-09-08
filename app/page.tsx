// ── Marketing home page ─────────────────────────────────────────
// Narrative order: this is real → it has already won → real organisations
// already run it → here is the problem → here is the product → your
// organisation could be next.
//
// Section background rhythm — every neighbouring pair differs, so each
// section reads as its own block. Do not let two large blocks of the same
// colour end up adjacent:
//   §1 Hero         → bgSage  (#E6EDD9)
//   §2 Traction     → white   (#FFFFFF)  ← award + program partners + facts
//   §3 Problem      → dark    (#1A2E1A)  ← accentGold eyebrow + stat figures
//   — mission strip → bgSage  (#E6EDD9)  ← inside Problem
//   — Ticker strip  → bgSage  (#E6EDD9)  ← thin band, continues the sage
//   §4 Lessons      → white   (#FFFFFF)  ← the product itself
//   §5 Partnership  → dark    (#1A2E1A)  ← accentGold eyebrow
//   §6 JoinTeam     → bgSage  (#E6EDD9)  ← TEMPORARY recruiting strip
//   §7 Final CTA    → dark    (#1A2E1A)  ← accentGold headline
//
// Removed (Sept 2026, hierarchy pass): the standalone WhyItMatters stat grid
// (folded into Problem), Pillars (Learn/Simulate/Reflect — restated the
// LessonsScroll tour), and Gamification (restated the tour's "04 · Progress"
// block, using XP/Level wording the app itself does not use).

import Hero3D         from '@/components/sections/Hero3D'
import Traction       from '@/components/sections/Traction'
import Problem        from '@/components/sections/Problem'
import Ticker         from '@/components/sections/Ticker'
import LessonsScroll  from '@/components/sections/LessonsScroll'
import Partners       from '@/components/sections/Partners'
import JoinTeamStrip  from '@/components/sections/JoinTeamStrip'
import FinalCTA       from '@/components/sections/FinalCTA'
import Footer         from '@/app/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero3D />
      <Traction />
      <Problem />
      <Ticker />
      <LessonsScroll />
      <Partners />
      <JoinTeamStrip />
      <FinalCTA />
      <Footer />
    </main>
  )
}
