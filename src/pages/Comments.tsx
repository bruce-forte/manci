import { comments } from "../data/mock";

export function Comments() {
  return (
    <>
      <div className="page-head">
        <h1>Comments</h1>
      </div>

      <ul className="subsubsub">
        <li><a href="#" className="current">All <span className="muted">({comments.length})</span></a></li>
        <li><a href="#">Pending <span className="muted">({comments.filter(c => c.status === "pending").length})</span></a></li>
        <li><a href="#">Approved <span className="muted">({comments.filter(c => c.status === "approved").length})</span></a></li>
        <li><a href="#">Spam <span className="muted">({comments.filter(c => c.status === "spam").length})</span></a></li>
        <li><a href="#">Trash <span className="muted">({comments.filter(c => c.status === "trash").length})</span></a></li>
      </ul>

      <table className="wp-list-table">
        <thead>
          <tr>
            <th className="col-check"><input type="checkbox" aria-label="Select all" /></th>
            <th>Author</th>
            <th>Comment</th>
            <th>In response to</th>
            <th>Submitted</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((c) => (
            <tr key={c.id}>
              <td><input type="checkbox" aria-label={`Select comment by ${c.author}`} /></td>
              <td>
                <strong>{c.author}</strong>
                <div className="muted" style={{ fontSize: 12 }}>{c.email}</div>
              </td>
              <td>
                {c.status === "pending" && <span className={`status-pill status-${c.status}`}>{c.status}</span>}{" "}
                {c.content}
                <div className="row-actions">
                  <a href="#">Approve</a><span className="sep"> | </span>
                  <a href="#">Reply</a><span className="sep"> | </span>
                  <a href="#">Spam</a><span className="sep"> | </span>
                  <a href="#" style={{ color: "var(--wp-danger)" }}>Trash</a>
                </div>
              </td>
              <td><a href="#">{c.post}</a></td>
              <td>{c.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
