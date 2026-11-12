import { defineConfig } from 'fumadocs-mdx/config';
import { remarkMdxMermaid } from 'fumadocs-core/mdx-plugins';

// ```mermaid blocks become <Mermaid chart="..." />, rendered to SVG by pele (see src/components/mermaid.tsx).
export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMdxMermaid],
  },
});
