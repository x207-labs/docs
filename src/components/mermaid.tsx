import { render } from 'pele';

/**
 * Diagram from Mermaid source, rendered to inline SVG on the server by pele (https://pele.run).
 * No client JS. Colours come from --pele-* CSS variables set in global.css, so it follows light/dark.
 * A syntax error fails the build on purpose, so a broken diagram never ships.
 */
export function Mermaid({ chart }: { chart: string }) {
  const { svg, width } = render(chart.trim());
  return (
    <figure className="x207-diagram not-prose my-6 overflow-x-auto rounded-xl border border-fd-border bg-fd-card p-4">
      <div
        className="mx-auto"
        style={{ maxWidth: Math.max(width, 320) }}
        // pele output of our own, trusted, build-time source
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </figure>
  );
}
