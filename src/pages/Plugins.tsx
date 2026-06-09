interface Plugin {
  name: string;
  desc: string;
  author: string;
  version: string;
  active: boolean;
  update?: string;
}

const plugins: Plugin[] = [
  { name: "SEO Booster", desc: "Meta tags, sitemaps, OG cards.", author: "mancikak", version: "1.4.2", active: true },
  { name: "Forms Pro", desc: "Drag-and-drop form builder.", author: "Third Party", version: "2.1.0", active: true, update: "2.2.0" },
  { name: "Image Optimizer", desc: "Auto-compress media uploads.", author: "mancikak", version: "0.9.1", active: false },
  { name: "Cache Layer", desc: "Page cache with stale-while-revalidate.", author: "mancikak", version: "3.0.0", active: true },
  { name: "Comment Guard", desc: "Spam filter with rule engine.", author: "Third Party", version: "1.0.5", active: false },
];

export function Plugins() {
  return (
    <>
      <div className="page-head">
        <h1>Plugins</h1>
        <button type="button" className="btn">Add new plugin</button>
      </div>

      <ul className="subsubsub">
        <li><a href="#" className="current">All <span className="muted">({plugins.length})</span></a></li>
        <li><a href="#">Active <span className="muted">({plugins.filter(p => p.active).length})</span></a></li>
        <li><a href="#">Inactive <span className="muted">({plugins.filter(p => !p.active).length})</span></a></li>
        <li><a href="#">Updates available <span className="muted">({plugins.filter(p => p.update).length})</span></a></li>
      </ul>

      <table className="wp-list-table">
        <thead>
          <tr>
            <th className="col-check"><input type="checkbox" aria-label="Select all" /></th>
            <th>Plugin</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {plugins.map((p) => (
            <tr key={p.name}>
              <td><input type="checkbox" aria-label={`Select ${p.name}`} /></td>
              <td>
                <strong>{p.name}</strong>
                <div className="row-actions" style={{ visibility: "visible" }}>
                  {p.active
                    ? <a href="#">Deactivate</a>
                    : <a href="#">Activate</a>}
                  <span className="sep"> | </span>
                  <a href="#">Settings</a>
                  <span className="sep"> | </span>
                  <a href="#" style={{ color: "var(--wp-danger)" }}>Delete</a>
                </div>
              </td>
              <td>
                {p.desc}
                <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>
                  Version {p.version} | By {p.author}
                </div>
                {p.update && (
                  <div className="notice notice-warning" style={{ marginTop: 8 }}>
                    Update to {p.update} available. <a href="#">Update now</a>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
