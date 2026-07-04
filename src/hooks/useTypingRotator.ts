import { useEffect, useState } from "react";

/**
 * Cycles through `words`, typing each one out, pausing, then deleting it.
 * Returns the current partial string to render next to a cursor.
 * Respects prefers-reduced-motion: if set, it just shows the first word.
 */
export function useTypingRotator(
  words: string[],
  { typeMs = 70, deleteMs = 40, holdMs = 1400 } = {}
): string {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (reduced || words.length === 0) {
      setText(words[0] ?? "");
      return;
    }

    const current = words[wordIndex % words.length];

    // Finished typing -> hold, then start deleting.
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), holdMs);
      return () => clearTimeout(t);
    }

    // Finished deleting -> advance to next word.
    if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );
      },
      deleting ? deleteMs : typeMs
    );
    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words, typeMs, deleteMs, holdMs, reduced]);

  return text;
}
