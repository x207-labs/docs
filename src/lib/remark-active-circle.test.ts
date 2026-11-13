import { describe, expect, it } from 'vitest';
import { DEPLOYMENTS } from './deployments.generated';
import { remarkActiveCircle, replaceActiveTokens } from './remark-active-circle';

describe('UM-208: active circle tokens', () => {
  const active = DEPLOYMENTS.circles.find((c) => c.key === DEPLOYMENTS.active)!;

  it('replaces every token with the active circle of deployments.json', () => {
    expect(replaceActiveTokens('%ACTIVE_CONTRACT% %ACTIVE_API% %ACTIVE_INTERFACE% %ACTIVE_KEY% %OTHER%')).toBe(
      `${active.contract} ${active.apiUrl} ${active.interface} ${active.key} %OTHER%`,
    );
  });

  it('rewrites text, inline code, code blocks and link URLs in the tree', () => {
    const tree = {
      type: 'root',
      children: [
        { type: 'paragraph', children: [{ type: 'text', value: 'is ' }, { type: 'inlineCode', value: '%ACTIVE_CONTRACT%' }] },
        { type: 'link', url: 'https://x207.vercel.app/app?circle=%ACTIVE_KEY%', children: [{ type: 'text', value: 'circle=%ACTIVE_KEY%' }] },
        { type: 'code', value: 'curl -s %ACTIVE_API%/x207/faucet' },
      ],
    };
    remarkActiveCircle()(tree);
    expect(JSON.stringify(tree)).not.toContain('%ACTIVE_');
    expect(tree.children[1]).toMatchObject({ url: `https://x207.vercel.app/app?circle=${active.key}` });
    expect(tree.children[2]).toMatchObject({ value: `curl -s ${active.apiUrl}/x207/faucet` });
  });
});
