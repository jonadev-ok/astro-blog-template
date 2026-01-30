export function readingTime(text: string) {
  const WORDS_PER_MINUTE = 100;

  const words = text.trim().split(/\s+/).length;

  const minutes = Math.ceil(words / WORDS_PER_MINUTE);

  return {
    minutes,
    words,
  };
}
