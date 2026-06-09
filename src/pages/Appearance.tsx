interface Theme {
  name: string;
  desc: string;
  color: string;
  active?: boolean;
}

const themes: Theme[] = [
  { name: "Twenty Twenty-Six", desc: "Default mancikak theme", color: "#2271b1", active: true },
  { name: "Minimal Press", desc: "Clean, content-focused layout", color: "#1d2327" },
  { name: "Magazine X", desc: "Multi-column news theme", color: "#d63638" },
  { name: "Botanical", desc: "Soft, organic blog theme", color: "#00a32a" },
  { name: "Devlog", desc: "Code-friendly developer blog", color: "#7e57c2" },
  { name: "Folio", desc: "Portfolio-first design", color: "#ef6c00" },
];

export function Appearance() {
  return (
    <>
      <div className="page-head">
        <h1>Themes</h1>
        <button type="button" className="btn">Add new theme</button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        {themes.map((t) => (
          <div key={t.name} className="card" style={{ margin: 0 }}>
            <div
              style={{
                height: 140,
                background: `linear-gradient(135deg, ${t.color}, ${t.color}99)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: 600,
                fontSize: 18,
                letterSpacing: 0.5,
              }}
            >
              {t.name}
            </div>
            <div className="card-body">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <strong>{t.name}</strong>
                {t.active && <span className="status-pill status-published">Active</span>}
              </div>
              <p className="muted" style={{ marginTop: 4 }}>{t.desc}</p>
              <div className="flex" style={{ marginTop: 8 }}>
                {!t.active && <button type="button" className="btn btn-primary">Activate</button>}
                <button type="button" className="btn">Customize</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
