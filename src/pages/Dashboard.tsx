import { stats, activity } from "../data/mock";

export function Dashboard() {
  return (
    <>
      <div className="page-head">
        <h1>Dashboard</h1>
      </div>

      <div className="notice notice-success">
        Welcome to mancikak. Mock data only — no backend wired up.
      </div>

      <div className="dash-stats">
        <div className="dash-stat"><span className="num">{stats.posts}</span><span className="lbl">Published posts</span></div>
        <div className="dash-stat"><span className="num">{stats.drafts}</span><span className="lbl">Drafts</span></div>
        <div className="dash-stat"><span className="num">{stats.pages}</span><span className="lbl">Pages</span></div>
        <div className="dash-stat"><span className="num">{stats.comments}</span><span className="lbl">Comments</span></div>
        <div className="dash-stat"><span className="num">{stats.media}</span><span className="lbl">Media items</span></div>
        <div className="dash-stat"><span className="num">{stats.users}</span><span className="lbl">Users</span></div>
      </div>

      <div className="dash-grid">
        <div className="card">
          <div className="card-head">At a glance</div>
          <div className="card-body">
            <ul className="activity-list">
              <li><span>{stats.posts} Posts</span><span className="when">published</span></li>
              <li><span>{stats.pages} Pages</span><span className="when">live</span></li>
              <li><span>{stats.comments} Comments</span><span className="when">{stats.pendingComments} pending</span></li>
              <li><span>mancikak 0.1.0</span><span className="when">build 2026-06-09</span></li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-head">Activity</div>
          <div className="card-body">
            <ul className="activity-list">
              {activity.map((a, i) => (
                <li key={i}>
                  <span><strong>{a.who}</strong> {a.what}</span>
                  <span className="when">{a.when}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-head">Quick draft</div>
          <div className="card-body">
            <input type="text" placeholder="Title" style={{ width: "100%", marginBottom: 8 }} />
            <textarea placeholder="What's on your mind?" rows={4} style={{ width: "100%", marginBottom: 8 }} />
            <button type="button" className="btn btn-primary">Save draft</button>
          </div>
        </div>

        <div className="card">
          <div className="card-head">News</div>
          <div className="card-body">
            <ul className="activity-list">
              <li><a href="#">Release notes — 0.1.0</a><span className="when">today</span></li>
              <li><a href="#">Theme guidelines</a><span className="when">2d ago</span></li>
              <li><a href="#">Plugin API RFC</a><span className="when">1w ago</span></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
