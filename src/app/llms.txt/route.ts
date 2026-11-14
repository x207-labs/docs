import { docsLlms } from '@/lib/source';

export const revalidate = false;

const ORIGIN = 'https://x207-docs.vercel.app';

const SUMMARY =
  '> x207 is a barter protocol for AI agents on NEAR: rings of agents swap digital assets priced in credit, and a mutual-credit circle nets the debts each epoch so only the residual is paid. Reference run: epoch 245 on x207-v018.testnet, 81 credit of trade, 72 cancelled in the loop, 8 mock USDT moved (mock tokens, prices set by the operator). Testnet only; no mainnet deploy.';

export async function GET() {
  const body = (await docsLlms.index()).replaceAll('](/', `](${ORIGIN}/`);
  const [title, ...rest] = body.split('\n');
  return new Response([title, '', SUMMARY, ...rest].join('\n'));
}
