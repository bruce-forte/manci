import { useState } from "react";
import { posts } from "../data/mock";

interface Props {
  postId: number | null;
  onBack: () => void;
}

export function PostEditor({ postId, onBack }: Props) {
  const existing = postId != null ? posts.find((p) => p.id === postId) : null;
  const [title, setTitle] = useState(existing?.title ?? "");
  const [content, setContent] = useState(
    existing
      ? `This is the body of "${existing.title}". Edit freely — this is a mock editor.`
      : ""
  );
  const [status, setStatus] = useState(existing?.status ?? "draft");

  return (
    <>
      <div className="page-head">
        <h1>{existing ? "Edit post" : "Add new post"}</h1>
        <button type="button" className="btn" onClick={onBack}>← Back to posts</button>
      </div>

      <div className="editor-grid">
        <div className="editor-main">
          <input
            className="editor-title"
            placeholder="Add title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="editor-toolbar">
            <button type="button" title="Bold"><strong>B</strong></button>
            <button type="button" title="Italic"><em>I</em></button>
            <button type="button" title="Underline"><u>U</u></button>
            <button type="button" title="Heading">H2</button>
            <button type="button" title="Link">🔗</button>
            <button type="button" title="Image">🖼</button>
            <button type="button" title="Quote">❝</button>
            <button type="button" title="Code">{"</>"}</button>
            <button type="button" title="List">• List</button>
            <button type="button" title="Block">+ Block</button>
          </div>
          <div
            className="editor-content"
            contentEditable
            suppressContentEditableWarning
            onInput={(e) => setContent((e.target as HTMLElement).innerText)}
          >
            {content}
          </div>
        </div>

        <aside className="editor-side">
          <div className="card">
            <div className="card-head">Publish</div>
            <div className="card-body">
              <div className="meta-row"><span>Status:</span><strong>{status}</strong></div>
              <div className="meta-row"><span>Visibility:</span><strong>Public</strong></div>
              <div className="meta-row"><span>Date:</span><strong>Immediately</strong></div>
              <select value={status} onChange={(e) => setStatus(e.target.value as typeof status)}>
                <option value="draft">Draft</option>
                <option value="pending">Pending review</option>
                <option value="published">Published</option>
              </select>
              <div className="flex">
                <button type="button" className="btn">Save draft</button>
                <button type="button" className="btn">Preview</button>
                <button type="button" className="btn btn-primary right">Publish</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-head">Categories</div>
            <div className="card-body">
              <label className="flex"><input type="checkbox" defaultChecked /> Announcements</label>
              <label className="flex"><input type="checkbox" /> Dev</label>
              <label className="flex"><input type="checkbox" /> Community</label>
              <label className="flex"><input type="checkbox" /> Planning</label>
              <a href="#">+ Add new category</a>
            </div>
          </div>

          <div className="card">
            <div className="card-head">Tags</div>
            <div className="card-body">
              <input type="text" placeholder="Add tags, comma separated" />
              <p className="muted" style={{ fontSize: 12, marginTop: 6 }}>
                Separate tags with commas.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-head">Featured image</div>
            <div className="card-body">
              <a href="#">Set featured image</a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
