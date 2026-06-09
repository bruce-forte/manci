import type { PageKey } from "../App";

interface Item {
  key: PageKey;
  label: string;
  icon: string;
  sepAfter?: boolean;
}

const items: Item[] = [
  { key: "dashboard", label: "Dashboard", icon: "⌂", sepAfter: true },
  { key: "posts", label: "Posts", icon: "📝" },
  { key: "media", label: "Media", icon: "🖼" },
  { key: "pages", label: "Pages", icon: "📄" },
  { key: "comments", label: "Comments", icon: "💬", sepAfter: true },
  { key: "appearance", label: "Appearance", icon: "🎨" },
  { key: "plugins", label: "Plugins", icon: "🧩" },
  { key: "users", label: "Users", icon: "👥" },
  { key: "tools", label: "Tools", icon: "🔧" },
  { key: "settings", label: "Settings", icon: "⚙" },
];

interface Props {
  current: PageKey;
  onSelect: (k: PageKey) => void;
}

export function Sidebar({ current, onSelect }: Props) {
  return (
    <nav className="sidebar" aria-label="Main">
      <ul>
        {items.map((it) => (
          <li key={it.key}>
            <button
              type="button"
              className={"sidebar-item" + (current === it.key ? " active" : "")}
              onClick={() => onSelect(it.key)}
            >
              <span className="icon" aria-hidden>{it.icon}</span>
              <span>{it.label}</span>
            </button>
            {it.sepAfter && <div className="sidebar-sep" />}
          </li>
        ))}
      </ul>
    </nav>
  );
}
