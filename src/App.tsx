import { useState } from "react";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import { Dashboard } from "./pages/Dashboard";
import { Posts } from "./pages/Posts";
import { PostEditor } from "./pages/PostEditor";
import { PagesList } from "./pages/Pages";
import { Media } from "./pages/Media";
import { Comments } from "./pages/Comments";
import { Users } from "./pages/Users";
import { Appearance } from "./pages/Appearance";
import { Plugins } from "./pages/Plugins";
import { Tools } from "./pages/Tools";
import { Settings } from "./pages/Settings";

export type PageKey =
  | "dashboard"
  | "posts"
  | "post-editor"
  | "pages"
  | "media"
  | "comments"
  | "appearance"
  | "plugins"
  | "users"
  | "tools"
  | "settings";

function App() {
  const [page, setPage] = useState<PageKey>("dashboard");
  const [editId, setEditId] = useState<number | null>(null);

  const openEditor = (id: number | null) => {
    setEditId(id);
    setPage("post-editor");
  };

  const navigate = (k: PageKey) => {
    setPage(k);
    if (k !== "post-editor") setEditId(null);
  };

  return (
    <div className="admin">
      <Topbar onNewPost={() => openEditor(null)} />
      <Sidebar
        current={page === "post-editor" ? "posts" : page}
        onSelect={navigate}
      />
      <main className="main">
        {page === "dashboard" && <Dashboard />}
        {page === "posts" && (
          <Posts onNew={() => openEditor(null)} onEdit={(id) => openEditor(id)} />
        )}
        {page === "post-editor" && (
          <PostEditor postId={editId} onBack={() => navigate("posts")} />
        )}
        {page === "pages" && <PagesList />}
        {page === "media" && <Media />}
        {page === "comments" && <Comments />}
        {page === "users" && <Users />}
        {page === "appearance" && <Appearance />}
        {page === "plugins" && <Plugins />}
        {page === "tools" && <Tools />}
        {page === "settings" && <Settings />}
      </main>
    </div>
  );
}

export default App;
