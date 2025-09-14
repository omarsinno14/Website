import { useTheme } from "../theme/useTheme";

const PALETTES = [
  // primary colors only (match your dark palettes in index.css)
  { key: "ocean",  label: "Ocean",  primary: "191 94% 42%" },  // cyan-ish
  { key: "sunset", label: "Sunset", primary: "10 90% 55%" },   // orange
  { key: "royal",  label: "Royal",  primary: "262 83% 60%" },  // violet
];

export default function ThemeControls() {
  const { palette, setPalette } = useTheme();

  return (
    <div className="fixed right-4 bottom-4 z-50 card p-3 backdrop-blur">
      <div className="flex items-center gap-2">
        {PALETTES.map(({ key, label, primary }) => (
          <button
            key={key}
            onClick={() => setPalette(key)}
            aria-label={`Switch to ${label} palette`}
            title={label}
            aria-pressed={palette === key}
            className={`h-8 w-8 rounded-full border border-border ring-1 ring-inset ring-border focus:outline-none transition ${
              palette === key ? "outline outline-2 outline-brand-primary" : ""
            }`}
            style={{ backgroundColor: `hsl(${primary})` }}
          />
        ))}
      </div>
    </div>
  );
}
