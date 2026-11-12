import Link from 'next/link';
import { gitConfig } from '@/lib/shared';

const links = [
  { text: 'Docs', href: '/docs' },
  { text: 'Quickstart', href: '/docs/quickstart' },
  { text: 'Roadmap', href: '/docs/roadmap' },
];

// Fixed 64px bar like Orca's: logo, tab links, GitHub and a white primary button.
export function TopBar() {
  return (
    <header className="x207-topbar fixed inset-x-0 top-0 z-40 hidden h-16 items-center justify-between px-6 md:flex">
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo-x207.webp"
            alt=""
            width={28}
            height={28}
            className="size-7 invert mix-blend-multiply dark:invert-0 dark:mix-blend-lighten"
          />
          <span className="font-medium tracking-tight">x207</span>
        </Link>
        <nav className="flex items-center">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-2.5 text-[13.5px] font-medium transition hover:text-fd-foreground ${i === 0 ? 'text-fd-foreground' : 'text-fd-muted-foreground'}`}
            >
              {l.text}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-2">
        <a
          href={`https://github.com/${gitConfig.user}/${gitConfig.repo}`}
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-lg px-2 py-1.5 text-[13px] font-medium text-fd-muted-foreground transition hover:text-fd-foreground"
        >
          GitHub
        </a>
        <Link
          href="/docs/quickstart"
          className="inline-flex h-8 items-center rounded-lg bg-fd-primary px-3.5 text-[13px] font-medium text-fd-primary-foreground transition hover:opacity-90"
        >
          Get started
        </Link>
      </div>
    </header>
  );
}
