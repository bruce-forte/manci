import { media } from "../data/mock";

export function Media() {
  return (
    <>
      <div className="page-head">
        <h1>Media Library</h1>
        <button type="button" className="btn">Add new</button>
      </div>

      <div className="tablenav">
        <select defaultValue="">
          <option value="">All media items</option>
          <option>Images</option>
          <option>Videos</option>
          <option>Documents</option>
        </select>
        <select defaultValue="">
          <option value="">All dates</option>
          <option>June 2026</option>
        </select>
        <div className="search">
          <input type="search" placeholder="Search media" />
          <button type="button" className="btn">Search</button>
        </div>
      </div>

      <div className="media-grid">
        {media.map((m) => (
          <div
            key={m.id}
            className="media-tile"
            style={{
              background: `linear-gradient(135deg, ${m.color}, ${m.color}88)`,
            }}
            title={`${m.name} — ${m.size}`}
          >
            <div className="name">{m.name}</div>
          </div>
        ))}
      </div>

      <p className="muted" style={{ marginTop: 16 }}>
        Showing {media.length} of {media.length} items
      </p>
    </>
  );
}
