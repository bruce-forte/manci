import { users } from "../data/mock";

export function Users() {
  return (
    <>
      <div className="page-head">
        <h1>Users</h1>
        <button type="button" className="btn">Add new user</button>
      </div>

      <ul className="subsubsub">
        <li><a href="#" className="current">All <span className="muted">({users.length})</span></a></li>
        <li><a href="#">Administrator <span className="muted">(1)</span></a></li>
        <li><a href="#">Editor <span className="muted">(1)</span></a></li>
        <li><a href="#">Author <span className="muted">(1)</span></a></li>
        <li><a href="#">Contributor <span className="muted">(1)</span></a></li>
        <li><a href="#">Subscriber <span className="muted">(1)</span></a></li>
      </ul>

      <div className="tablenav">
        <select defaultValue="">
          <option value="">Bulk actions</option>
          <option>Delete</option>
          <option>Change role</option>
        </select>
        <button type="button" className="btn">Apply</button>
        <div className="search">
          <input type="search" placeholder="Search users" />
          <button type="button" className="btn">Search</button>
        </div>
      </div>

      <table className="wp-list-table">
        <thead>
          <tr>
            <th className="col-check"><input type="checkbox" aria-label="Select all" /></th>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Posts</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td><input type="checkbox" aria-label={`Select ${u.username}`} /></td>
              <td>
                <a href="#" className="row-title">{u.username}</a>
                <div className="row-actions">
                  <a href="#">Edit</a><span className="sep"> | </span>
                  <a href="#" style={{ color: "var(--wp-danger)" }}>Delete</a>
                </div>
              </td>
              <td>{u.name}</td>
              <td><a href={`mailto:${u.email}`}>{u.email}</a></td>
              <td>{u.role}</td>
              <td>{u.posts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
