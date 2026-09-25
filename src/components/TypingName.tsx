import { useEffect, useMemo, useState } from "react";

interface TypingNameProps {
  name?: string;
}

export function TypingName({ name = "Sophia Nicole Grefaldo" }: TypingNameProps) {
  const words = useMemo(
    () => [
      name,
      "Computer Science Graduate",
      "Full-Stack Developer",
      "AI & ML Developer",
      "Mobile App Developer",
      "Web Developer",
    ],
    [name]
  );
  const [wordIndex, setWordIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const pauseAtEnd = letterCount === currentWord.length && !deleting;
    const pauseAtStart = letterCount === 0 && deleting;
    const delay = pauseAtEnd ? 1800 : pauseAtStart ? 400 : deleting ? 40 : 80;

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
    <span className="inline-block relative">
      <span className="text-cyan-600 dark:text-cyan-400 drop-shadow-[0_0_20px_rgba(6,182,212,0.4)] font-bold tracking-tight">
        {words[wordIndex].slice(0, letterCount)}
      </span>
      <span className="inline-block w-[3px] h-[0.9em] ml-1 bg-cyan-500 dark:bg-cyan-400 align-middle animate-pulse shadow-[0_0_10px_#06b6d4]" />
    </span>
  );
}
