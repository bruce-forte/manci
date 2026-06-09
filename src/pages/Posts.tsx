import { useMemo, useState } from "react";
import { posts as seed } from "../data/mock";
import type { Post, PostStatus } from "../data/mock";

interface Props {
  onNew: () => void;
  onEdit: (id: number) => void;
}

const filters: { key: PostStatus | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "published", label: "Published" },
  { key: "draft", label: "Drafts" },
  { key: "pending", label: "Pending" },
  { key: "trash", label: "Trash" },
];

export function Posts({ onNew, onEdit }: Props) {
  const [filter, setFilter] = useState<PostStatus | "all">("all");
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: seed.length };
    seed.forEach((p) => { c[p.status] = (c[p.status] ?? 0) + 1; });
    return c;
  }, []);

  const list = useMemo(() => {
    return seed.filter((p) => {
      if (filter !== "all" && p.status !== filter) return false;
      if (search && !p.title.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [filter, search]);

  const toggle = (id: number) => {
    const next = new Set(checked);
    if (next.has(id)) next.delete(id); else next.add(id);
    setChecked(next);
  };

  const toggleAll = () => {
    if (checked.size === list.length) setChecked(new Set());
    else setChecked(new Set(list.map((p) => p.id)));
  };

  return (
    <>
      <div className="page-head">
        <h1>Posts</h1>
        <button type="button" className="btn" onClick={onNew}>Add new post</button>
      </div>

      <ul className="subsubsub">
        {filters.map((f) => (
          <li key={f.key}>
            <a
              href="#"
              className={filter === f.key ? "current" : ""}
              onClick={(e) => { e.preventDefault(); setFilter(f.key); }}
            >
              {f.label} <span className="muted">({counts[f.key] ?? 0})</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="tablenav">
        <select defaultValue="">
          <option value="">Bulk actions</option>
          <option>Edit</option>
          <option>Move to Trash</option>
        </select>
        <button type="button" className="btn">Apply</button>
        <select defaultValue="">
          <option value="">All dates</option>
          <option>June 2026</option>
          <option>May 2026</option>
        </select>
        <select defaultValue="">
          <option value="">All categories</option>
          <option>Announcements</option>
          <option>Dev</option>
          <option>Community</option>
        </select>
        <button type="button" className="btn">Filter</button>
        <div className="search">
          <input
            type="search"
            placeholder="Search posts"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="button" className="btn">Search</button>
        </div>
      </div>

      <table className="wp-list-table">
        <thead>
          <tr>
            <th className="col-check">
              <input
                type="checkbox"
                checked={list.length > 0 && checked.size === list.length}
                onChange={toggleAll}
                aria-label="Select all"
              />
            </th>
            <th>Title</th>
            <th>Author</th>
            <th>Categories</th>
            <th>Tags</th>
            <th>💬</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {list.map((p: Post) => (
            <tr key={p.id}>
              <td className="col-check">
                <input
                  type="checkbox"
                  checked={checked.has(p.id)}
                  onChange={() => toggle(p.id)}
                  aria-label={`Select ${p.title}`}
                />
              </td>
              <td>
                <a
                  className="row-title"
                  href="#"
                  onClick={(e) => { e.preventDefault(); onEdit(p.id); }}
                >
                  {p.title}
                </a>
                {p.status !== "published" && (
                  <> — <span className={`status-pill status-${p.status}`}>{p.status}</span></>
                )}
                <div className="row-actions">
                  <a href="#" onClick={(e) => { e.preventDefault(); onEdit(p.id); }}>Edit</a>
                  <span className="sep"> | </span>
                  <a href="#">Quick edit</a>
                  <span className="sep"> | </span>
                  <a href="#" style={{ color: "var(--wp-danger)" }}>Trash</a>
                  <span className="sep"> | </span>
                  <a href="#">View</a>
                </div>
              </td>
              <td>{p.author}</td>
              <td>{p.categories.join(", ") || "—"}</td>
              <td>{p.tags.join(", ") || "—"}</td>
              <td>{p.comments}</td>
              <td>
                <span className="muted">{p.status === "published" ? "Published" : p.status === "draft" ? "Last modified" : "Saved"}</span>
                <br />
                {p.date}
              </td>
            </tr>
          ))}
          {list.length === 0 && (
            <tr>
              <td colSpan={7} style={{ textAlign: "center", padding: 32, color: "var(--wp-text-muted)" }}>
                No posts found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
