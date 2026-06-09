import { pages } from "../data/mock";

export function PagesList() {
  return (
    <>
      <div className="page-head">
        <h1>Pages</h1>
        <button type="button" className="btn">Add new page</button>
      </div>

      <div className="tablenav">
        <select defaultValue=""><option value="">Bulk actions</option><option>Trash</option></select>
        <button type="button" className="btn">Apply</button>
        <div className="search">
          <input type="search" placeholder="Search pages" />
          <button type="button" className="btn">Search</button>
        </div>
      </div>

      <table className="wp-list-table">
        <thead>
          <tr>
            <th className="col-check"><input type="checkbox" aria-label="Select all" /></th>
            <th>Title</th>
            <th>Author</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {pages.map((p) => (
            <tr key={p.id}>
              <td><input type="checkbox" aria-label={`Select ${p.title}`} /></td>
              <td>
                <a href="#" className="row-title">{p.title}</a>
                {p.status !== "published" && (
                  <> — <span className={`status-pill status-${p.status}`}>{p.status}</span></>
                )}
                <div className="row-actions">
                  <a href="#">Edit</a><span className="sep"> | </span>
                  <a href="#">Quick edit</a><span className="sep"> | </span>
                  <a href="#" style={{ color: "var(--wp-danger)" }}>Trash</a><span className="sep"> | </span>
                  <a href="#">View</a>
                </div>
              </td>
              <td>{p.author}</td>
              <td>
                <span className="muted">{p.status === "published" ? "Published" : "Last modified"}</span>
                <br />{p.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
