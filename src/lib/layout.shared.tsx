import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          {/* White-on-black logo from the landing page; inverted on light theme. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo-x207.webp"
            alt=""
            width={28}
            height={28}
            className="size-7 invert mix-blend-multiply dark:invert-0 dark:mix-blend-lighten"
          />
          <span className="font-semibold tracking-tight">x207</span>
          <span className="sr-only">{appName}</span>
        </>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
