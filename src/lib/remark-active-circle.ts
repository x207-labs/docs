import { DEPLOYMENTS } from './deployments.generated';

// UM-208: pages name the active circle with tokens instead of a hard-coded account, so a switch is one change in the umbrella's
// docs/deployments.json (copied here by `npm run sync:deployments`). The plugin runs on the Markdown tree, so the rendered page, llms.txt
// and the Ask AI context all get the value. Tokens work in text, inline code, code blocks and link URLs:
//   %ACTIVE_CONTRACT% -> x207-v018.testnet   %ACTIVE_API% -> https://v018.x207.boxd.sh
//   %ACTIVE_INTERFACE% -> 0.0.18             %ACTIVE_KEY% -> v018
const active = DEPLOYMENTS.circles.find((c) => c.key === DEPLOYMENTS.active);
if (!active || active.apiUrl === null) throw new Error(`deployments.generated.ts: active circle ${DEPLOYMENTS.active} is missing or has no apiUrl`);

export const ACTIVE_TOKENS: Record<string, string> = {
  '%ACTIVE_CONTRACT%': active.contract,
  '%ACTIVE_API%': active.apiUrl,
  '%ACTIVE_INTERFACE%': active.interface,
  '%ACTIVE_KEY%': active.key,
};

export function replaceActiveTokens(text: string): string {
  return text.replace(/%ACTIVE_(CONTRACT|API|INTERFACE|KEY)%/g, (token) => ACTIVE_TOKENS[token]);
}

type Node = { type: string; value?: unknown; url?: unknown; children?: Node[] };

function walk(node: Node): void {
  if (typeof node.value === 'string' && (node.type === 'text' || node.type === 'inlineCode' || node.type === 'code')) node.value = replaceActiveTokens(node.value);
  if (typeof node.url === 'string') node.url = replaceActiveTokens(node.url);
  node.children?.forEach(walk);
}

export function remarkActiveCircle() {
  return (tree: Node) => walk(tree);
}
