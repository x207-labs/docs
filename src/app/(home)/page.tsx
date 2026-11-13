import Link from 'next/link';
import { Icon, Coin, type IconName } from '@/components/icons';

const steps: { icon: IconName; title: string; text: string }[] = [
  { icon: 'stake', title: 'Join and stake', text: 'An agent owner joins a circle and locks a USDT stake. The stake bounds what the agent can owe.' },
  { icon: 'voucher', title: 'Pay with vouchers', text: 'A 402 endpoint accepts a signed voucher and serves at once; the debt is registered on chain after (register-first mode waits for the chain).' },
  { icon: 'net', title: 'Net each epoch', text: 'The circle contract nets every position in one step. A solver proposes debt cycles to clear, checked on chain in O(n).' },
  { icon: 'settle', title: 'Pay the residual', text: 'Only net debtors pay, in mock USDT on testnet. Creditors claim. A missed payment is covered from the debtor stake.' },
];

const sections: { href: string; icon: IconName; title: string; text: string }[] = [
  { href: '/docs/quickstart', icon: 'rocket', title: 'Quickstart', text: 'Run a first voucher payment on testnet.' },
  { href: '/docs/concepts', icon: 'circle', title: 'Concepts', text: 'Barter, marketplace, appraiser, then circles, vouchers and epochs.' },
  { href: '/docs/architecture', icon: 'layers', title: 'Architecture', text: 'How contracts, solver, backend and agents fit together.' },
  { href: '/docs/contracts', icon: 'contract', title: 'Smart contracts', text: 'Methods, views, events and errors.' },
  { href: '/docs/sdk', icon: 'sdk', title: 'SDK', text: 'Pay and receive vouchers from TypeScript.' },
  { href: '/docs/read-api', icon: 'api', title: 'Read API', text: 'Read-only HTTP endpoints for circles and epochs.' },
  { href: '/docs/solver', icon: 'solver', title: 'Solver', text: 'Find and submit debt-cycle clearings.' },
  { href: '/docs/agents', icon: 'agent', title: 'Agents', text: 'Example buyer and seller agents.' },
  { href: '/docs/dashboard', icon: 'dashboard', title: 'Dashboard', text: 'Watch circles and epochs live.' },
  { href: '/docs/security', icon: 'shield', title: 'Security', text: 'Trust model and what is not covered.' },
  { href: '/docs/roadmap', icon: 'map', title: 'Roadmap', text: 'What is next, including USDC.' },
  { href: '/docs/faq', icon: 'question', title: 'FAQ', text: 'Short answers to common questions.' },
];

const stats = [
  { value: '41.35', label: 'credit in 24 vouchers' },
  { value: '7.75', label: 'mock USDT actually moved' },
  { value: '18.7%', label: 'of gross value moved' },
  { value: 'testnet', label: 'epoch 8, mock USDT' },
];

function Hero() {
  return (
    <div className="relative w-full max-w-[420px]">
      {/* Logo sits outside the svg and has no transformed ancestor, so mix-blend can drop its black backdrop. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo-x207.webp"
        alt=""
        width={120}
        height={120}
        className="absolute left-1/2 top-1/2 size-[28%] -translate-x-1/2 -translate-y-1/2 invert mix-blend-multiply dark:invert-0 dark:mix-blend-lighten"
      />
      <HeroOrbits />
    </div>
  );
}

function HeroOrbits() {
  return (
    <svg viewBox="0 0 420 420" className="w-full text-fd-foreground" aria-hidden="true">
      <g className="x207-orbit" style={{ transformOrigin: '210px 210px' }}>
        <circle cx="210" cy="210" r="150" fill="none" stroke="currentColor" strokeOpacity=".22" strokeDasharray="3 7" />
        <circle cx="210" cy="60" r="9" fill="#0a84ff" />
        <circle cx="340" cy="285" r="9" fill="#5dcaa5" />
        <circle cx="80" cy="285" r="9" fill="#f5a524" />
        <path d="M210 60 340 285 80 285Z" fill="none" stroke="#0a84ff" strokeOpacity=".5" />
      </g>
      <g className="x207-orbit-rev" style={{ transformOrigin: '210px 210px' }}>
        <circle cx="210" cy="210" r="100" fill="none" stroke="currentColor" strokeOpacity=".18" strokeDasharray="2 8" />
        <circle cx="310" cy="210" r="5" fill="#5dcaa5" />
        <circle cx="110" cy="210" r="5" fill="#5dcaa5" />
      </g>
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden border-b border-fd-border">
        <div className="x207-hero-grid absolute inset-0" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card px-3 py-1 text-xs text-fd-muted-foreground">
              <span className="size-1.5 rounded-full bg-[#5dcaa5]" /> NEAR testnet only
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-6xl">
              Barter failed for three reasons.
              <br />
              <span className="text-fd-muted-foreground">x207 fixes all three.</span>
            </h1>
            <p className="mt-5 max-w-xl text-fd-muted-foreground md:text-lg">
              Matching, pricing, timing. x207 is a barter protocol for AI agents on NEAR: rings of agents barter digital assets on credit, a TEE appraiser gives price advice in credit, and a mutual-credit circle nets the debts so only the residual moves, in mock USDT on testnet.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/docs" className="rounded-lg bg-fd-foreground px-5 py-2.5 text-sm font-medium text-fd-background transition hover:opacity-90">
                Read the docs
              </Link>
              <Link href="/docs/quickstart" className="rounded-lg border border-fd-border bg-fd-card px-5 py-2.5 text-sm font-medium transition hover:bg-fd-accent">
                Quickstart
              </Link>
              <Link href="/docs/concepts/circular-barter" className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-fd-muted-foreground transition hover:text-fd-foreground">
                <Icon name="bolt" size={16} /> How a barter ring works
              </Link>
            </div>
            <p className="mt-6 flex items-center gap-2 text-xs text-fd-muted-foreground">
              <Icon name="question" size={14} /> Stuck? Use <b>Ask AI</b> or press <kbd className="rounded border border-fd-border px-1.5 py-0.5">Ctrl</kbd>/<kbd className="rounded border border-fd-border px-1.5 py-0.5">⌘</kbd> <kbd className="rounded border border-fd-border px-1.5 py-0.5">K</kbd> to search.
            </p>
          </div>
          <div className="flex justify-center">
            <Hero />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-fd-border bg-fd-border md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-fd-card px-5 py-6">
              <div className="text-3xl font-semibold tracking-tight">{s.value}</div>
              <div className="mt-1 text-sm text-fd-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-fd-muted-foreground">
          Recorded run: epoch 8 of the testnet circle <code>x207-v013.testnet</code>, mock USDT, 15 members. Not a production result, and that epoch used more NEAR gas than 24 plain transfers. The barter ring of epoch 184 on <code>x207-v018.testnet</code>: 81 credit traded, 72 removed by clearing, 8 mock USDT moved; one operator signed for all three agents and only credit moved. See <Link className="underline" href="/docs/concepts/epochs-and-clearing">Epochs and clearing</Link>.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">How it works</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-fd-border bg-fd-card p-5">
              <span className="absolute right-4 top-3 text-4xl font-semibold text-fd-border">{i + 1}</span>
              <div className="flex size-10 items-center justify-center rounded-xl bg-fd-accent text-fd-primary">
                <Icon name={s.icon} size={22} />
              </div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-fd-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-center gap-4">
          <Coin kind="usdt" size={44} />
          <Coin kind="near" size={44} />
          <Coin kind="x207" size={44} />
          <p className="text-sm text-fd-muted-foreground">Settlement token on testnet is a mock USDT anyone can mint. Coin art is generic, not issuer logos.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">Explore</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <Link key={s.href} href={s.href} className="group flex items-start gap-4 rounded-2xl border border-fd-border bg-fd-card p-4 transition hover:border-fd-primary/50 hover:bg-fd-accent">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-fd-accent text-fd-primary transition group-hover:bg-fd-primary group-hover:text-fd-primary-foreground">
                <Icon name={s.icon} size={20} />
              </div>
              <div>
                <div className="font-semibold">{s.title}</div>
                <div className="text-sm text-fd-muted-foreground">{s.text}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
