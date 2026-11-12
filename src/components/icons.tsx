import type { ReactNode, SVGProps } from 'react';

/** Line icons (24px grid, currentColor) used on the docs home and in MDX: <Icon name="voucher" />. */
const paths: Record<string, ReactNode> = {
  circle: (
    <>
      <circle cx="12" cy="5" r="2.4" />
      <circle cx="5" cy="17.5" r="2.4" />
      <circle cx="19" cy="17.5" r="2.4" />
      <path d="M10.2 6.8 6.6 15.2M13.8 6.8l3.6 8.4M7.6 17.5h8.8" />
    </>
  ),
  voucher: (
    <>
      <path d="M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5V10a2 2 0 0 0 0 4v2.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16.5V14a2 2 0 0 0 0-4Z" />
      <path d="M9.5 9.5h5M9.5 12h5M9.5 14.5h3" />
    </>
  ),
  epoch: (
    <>
      <path d="M20 12a8 8 0 1 1-2.6-5.9" />
      <path d="M20 4v4.2h-4.2" />
      <path d="M12 8v4.2l2.8 1.8" />
    </>
  ),
  net: (
    <>
      <path d="M3 6h5l4 6 4 6h5M3 18h5l4-6 4-6h5" />
      <path d="m18.5 3.5 2.5 2.5-2.5 2.5M18.5 15.5l2.5 2.5-2.5 2.5" />
    </>
  ),
  stake: (
    <>
      <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
      <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
      <circle cx="12" cy="15.2" r="1.2" />
    </>
  ),
  settle: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.2 12.2 2.7 2.7 5-5.4" />
    </>
  ),
  agent: (
    <>
      <rect x="5" y="8" width="14" height="10.5" rx="3" />
      <path d="M12 8V5M9.5 5h5" />
      <circle cx="9.5" cy="13" r="1.1" />
      <circle cx="14.5" cy="13" r="1.1" />
      <path d="M3 12.5v2M21 12.5v2" />
    </>
  ),
  contract: (
    <>
      <path d="M7 3.5h7.5L19 8v12a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 7 20Z" />
      <path d="M14.5 3.5V8H19M9.5 12.5h6M9.5 15.5h6" />
    </>
  ),
  sdk: (
    <>
      <path d="m8.5 8-4 4 4 4M15.5 8l4 4-4 4M13.5 6l-3 12" />
    </>
  ),
  api: (
    <>
      <path d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 0 6H7a3 3 0 0 1-3-3Z" />
      <path d="M4 17a3 3 0 0 1 3-3h10a3 3 0 0 1 0 6H7a3 3 0 0 1-3-3Z" />
      <path d="M7.5 7h.01M7.5 17h.01" />
    </>
  ),
  solver: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </>
  ),
  dashboard: (
    <>
      <rect x="3.5" y="4" width="17" height="16" rx="2.5" />
      <path d="M3.5 9.5h17M9.5 9.5V20" />
    </>
  ),
  rocket: (
    <>
      <path d="M14 4c3.5.3 5.7 2.5 6 6-1.2 3.3-4 6-8 7.5L6.5 12C8 8 10.700 5.200 14 4Z" />
      <circle cx="14.5" cy="9.5" r="1.4" />
      <path d="M6.500 12 4 12.500l2-3.500M12 17.500 11.500 20l3.500-2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 19 6v5.500c0 4.200-3 7.300-7 9-4-1.700-7-4.800-7-9V6Z" />
      <path d="m9 12 2.200 2.200L15.200 10" />
    </>
  ),
  map: (
    <>
      <path d="M4 6.500 9 4l6 2.500L20 4v13.500L15 20l-6-2.500L4 20Z" />
      <path d="M9 4v13.500M15 6.500V20" />
    </>
  ),
  question: (
    <>
      <circle cx="12" cy="12" r="8.500" />
      <path d="M9.700 9.700a2.400 2.400 0 1 1 3.400 2.200c-.700.400-1.100.900-1.100 1.700M12 16.600h.01" />
    </>
  ),
  book: (
    <>
      <path d="M5 5.500A1.500 1.500 0 0 1 6.500 4H19v14.500H6.500A1.500 1.500 0 0 0 5 20Z" />
      <path d="M5 20a1.500 1.500 0 0 0 1.500 1.500H19M9 8.500h6" />
    </>
  ),
  bolt: <path d="M13 3 5.500 13H11l-1 8 7.500-10H12Z" />,
  layers: (
    <>
      <path d="m12 4 8.500 4.500L12 13 3.500 8.500Z" />
      <path d="m3.500 12.500 8.500 4.500 8.500-4.500M3.500 16.500l8.500 4.500 8.500-4.500" />
    </>
  ),
};

export type IconName = keyof typeof paths;

export function Icon({ name, size = 20, ...rest }: { name: IconName; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {paths[name] ?? paths.circle}
    </svg>
  );
}

/** Flat coin illustrations. Generic token art, not the issuers' logos. */
export function Coin({ kind, size = 48 }: { kind: 'usdt' | 'near' | 'x207'; size?: number }) {
  const c = { usdt: ['#34c46e', '#1f8f52'], near: ['#eaf6ff', '#9db0c2'], x207: ['#3d8bff', '#1a3cff'] }[kind];
  const id = `coin-${kind}`;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="8" y1="6" x2="40" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor={c[0]} />
          <stop offset="1" stopColor={c[1]} />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="22" fill={`url(#${id})`} />
      <circle cx="24" cy="24" r="17.500" fill="none" stroke="#fff" strokeOpacity=".35" strokeWidth="1.500" />
      {kind === 'usdt' && (
        <path d="M15 15h18M24 15v20M18.500 22.500c0 1.500 2.500 2.500 5.500 2.500s5.500-1 5.500-2.500-2.500-2.500-5.500-2.500-5.500 1-5.500 2.500Z" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
      )}
      {kind === 'near' && <path d="M16 33V15l16 18V15" stroke="#05070b" strokeWidth="3.200" strokeLinecap="round" strokeLinejoin="round" fill="none" />}
      {kind === 'x207' && (
        <g fill="none" stroke="#fff" strokeWidth="2.600" strokeLinecap="round">
          <circle cx="24" cy="15" r="3" />
          <circle cx="15.500" cy="30" r="3" />
          <circle cx="32.500" cy="30" r="3" />
          <path d="m22.500 17.700-5.500 9.600M25.500 17.700l5.500 9.600M18.700 30h10.600" />
        </g>
      )}
    </svg>
  );
}
