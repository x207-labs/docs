import { defineConfig } from 'fumadocs-mdx/config';
import { remarkMdxMermaid } from 'fumadocs-core/mdx-plugins';
import { remarkActiveCircle } from './src/lib/remark-active-circle';

// ```mermaid blocks become <Mermaid chart="..." />, rendered to SVG by pele (see src/components/mermaid.tsx).
// UM-208: %ACTIVE_CONTRACT%, %ACTIVE_API%, %ACTIVE_INTERFACE% and %ACTIVE_KEY% become the active circle of deployments.json; it runs first,
// so a token inside a mermaid block is replaced too.
export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkActiveCircle, remarkMdxMermaid],
  },
});
