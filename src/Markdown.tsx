import { useEffect, useState } from "preact/hooks";

export interface MarkdownProps {
  import: Promise<typeof import("*.md")>;
}

export function Markdown(props: MarkdownProps) {
  const [html, setHtml] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    props.import.then((md) => setHtml(md.html)).catch((e) => setError(e));
  }, [props.import]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div dangerouslySetInnerHTML={{ __html: html || "" }} />;
}
