import { useEffect, useState } from "react";

const STORAGE_KEY = "omarsinno-theme-palette";

export function useTheme() {
  const [palette, setPalette] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return saved;
    } catch {}
    return "ocean";
  });

  useEffect(() => {
    const root = document.documentElement; // <html>
    root.setAttribute("data-theme", palette);
    try { localStorage.setItem(STORAGE_KEY, palette); } catch {}
  }, [palette]);

  return { palette, setPalette };
}
