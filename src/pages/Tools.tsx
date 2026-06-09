export function Tools() {
  return (
    <>
      <div className="page-head">
        <h1>Tools</h1>
      </div>

      <div className="dash-grid">
        <div className="card">
          <div className="card-head">Import</div>
          <div className="card-body">
            <p>Import posts, pages, or media from another site.</p>
            <ul>
              <li><a href="#">WordPress XML</a></li>
              <li><a href="#">Markdown bundle</a></li>
              <li><a href="#">RSS feed</a></li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-head">Export</div>
          <div className="card-body">
            <p>Download all your content as a single file.</p>
            <label className="flex"><input type="radio" name="exp" defaultChecked /> All content</label>
            <label className="flex"><input type="radio" name="exp" /> Posts only</label>
            <label className="flex"><input type="radio" name="exp" /> Pages only</label>
            <button type="button" className="btn btn-primary" style={{ marginTop: 8 }}>Download export</button>
          </div>
        </div>

        <div className="card">
          <div className="card-head">Site health</div>
          <div className="card-body">
            <div className="meta-row"><span>PHP-equivalent runtime</span><strong>Node 25.2.1</strong></div>
            <div className="meta-row"><span>Database</span><strong>OK</strong></div>
            <div className="meta-row"><span>HTTPS</span><strong>Enabled</strong></div>
            <div className="meta-row"><span>Background jobs</span><strong>Running</strong></div>
          </div>
        </div>
      </div>
    </>
  );
}
