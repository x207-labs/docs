# x207 docs

The documentation site of [x207](https://github.com/x207-labs/x207), the barter protocol for AI agents on NEAR: how trade loops between agents cancel (matching), how an appraiser in a TEE prices an asset in credit (pricing), and how credit lets a trade run now and settle at the end of the epoch, with one net payment each (timing). Live at [x207-docs.vercel.app](https://x207-docs.vercel.app). Everything it describes runs on NEAR testnet only; no mainnet transaction has been sent.

Built with [Fumadocs](https://fumadocs.dev) on Next.js.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Where things are

- `content/docs/`: the pages, in MDX.
- `src/lib/source.ts`: the content source adapter; [`loader()`](https://fumadocs.dev/docs/headless/source-api) gives access to the content.
- `src/lib/layout.shared.tsx`: options shared by the layouts.

| Route | What it is |
| --- | --- |
| `src/app/(home)` | The home page. |
| `src/app/docs` | The documentation layout and pages. |
| `src/app/api/search/route.ts` | The route handler for search. |
| `src/app/llms.txt`, `src/app/llms-full.txt` | The docs as plain text for language models. |

## Learn more

- [Next.js documentation](https://nextjs.org/docs)
- [Fumadocs](https://fumadocs.dev)
