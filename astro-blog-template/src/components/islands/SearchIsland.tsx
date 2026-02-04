import { useEffect, useMemo, useState } from "preact/hooks";
import Fuse from "fuse.js";

type SearchItem = {
  title: string;
  description: string;
  slug: string;
};

interface Props {
  data: SearchItem[];
  placeholder?: string;
}

export default function SearchIsland({
  data,
  placeholder = "Buscar articulos…"
}: Props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);

  const fuse = useMemo(
    () =>
      new Fuse(data, {
        keys: ["title", "description", "slug"],
        threshold: 0.3,
      }),
    [data]
  );

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    setResults(fuse.search(query).map((r) => r.item));
  }, [query, fuse]);

  return (
    <div class="w-full max-2xl:px-0 max-xl:px-0 max-lg:px-4 max-sm:px-4">
      <input
        type="search"
        value={query}
        onInput={(e) => setQuery(e.currentTarget.value)}
        placeholder={placeholder}
        class="w-full h-14 rounded-xl bg-slate-900 border border-slate-800 py-2 px-5 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      <ul class="mt-6 flex flex-col w-full">
        {results.map((item) => (
          <li
            key={item.slug}
            class="w-full flex-col mb-2 pl-5 py-2 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900"
          >
            <a href={`/blog/${item.slug}`}>
              <strong class="text-white">{item.title}</strong>
              <p class="text-slate-400">{item.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}