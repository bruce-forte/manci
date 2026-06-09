import { stats } from "../data/mock";

interface Props {
  onNewPost: () => void;
}

export function Topbar({ onNewPost }: Props) {
  return (
    <header className="topbar">
      <div className="brand">manci<span>kak</span></div>
      <button type="button" className="topbar-item" title="Visit site">
        <span aria-hidden>🏠</span>
        <span>Visit site</span>
      </button>
      <button type="button" className="topbar-item" title="Comments">
        <span aria-hidden>💬</span>
        {stats.pendingComments > 0 && (
          <span className="badge">{stats.pendingComments}</span>
        )}
      </button>
      <button type="button" className="topbar-item" onClick={onNewPost}>
        <span aria-hidden>＋</span>
        <span>New</span>
      </button>
      <div className="topbar-right">
        <button type="button" className="topbar-item">
          <span aria-hidden>👤</span>
          <span>addamsson</span>
        </button>
      </div>
    </header>
  );
}
