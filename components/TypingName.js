"use client";

import { useEffect, useMemo, useState } from "react";

export function TypingName({ name = "Your Name" }) {
  const words = useMemo(() => [name, "BSCS Student", "Full-Stack Developer"], [name]);
  const [wordIndex, setWordIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const pauseAtEnd = letterCount === currentWord.length && !deleting;
    const pauseAtStart = letterCount === 0 && deleting;
    const delay = pauseAtEnd || pauseAtStart ? 900 : deleting ? 48 : 86;

    const timeoutId = window.setTimeout(() => {
      if (pauseAtEnd) {
        setDeleting(true);
        return;
      }

      if (pauseAtStart) {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
        return;
      }

      setLetterCount((count) => count + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [deleting, letterCount, wordIndex, words]);

  return (
    <span className="typing-name" aria-label={words[wordIndex]}>
      {words[wordIndex].slice(0, letterCount)}
      <span className="typing-cursor" aria-hidden="true" />
    </span>
  );
}
