export type PostStatus = "published" | "draft" | "pending" | "trash";

export interface Post {
  id: number;
  title: string;
  author: string;
  categories: string[];
  tags: string[];
  comments: number;
  date: string;
  status: PostStatus;
}

export interface Page {
  id: number;
  title: string;
  author: string;
  date: string;
  status: PostStatus;
}

export interface MediaItem {
  id: number;
  name: string;
  type: "image" | "video" | "doc";
  color: string;
  size: string;
  uploaded: string;
}

export interface Comment {
  id: number;
  author: string;
  email: string;
  content: string;
  post: string;
  date: string;
  status: "approved" | "pending" | "spam" | "trash";
}

export interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  role: "Administrator" | "Editor" | "Author" | "Contributor" | "Subscriber";
  posts: number;
}

export const posts: Post[] = [
  { id: 1, title: "Welcome to mancikak", author: "addamsson", categories: ["Announcements"], tags: ["release", "intro"], comments: 12, date: "2026-06-08 14:22", status: "published" },
  { id: 2, title: "Roadmap for Q3 2026", author: "addamsson", categories: ["Planning"], tags: ["roadmap"], comments: 4, date: "2026-06-05 09:11", status: "published" },
  { id: 3, title: "Working draft: Theme system v2", author: "editor1", categories: ["Dev"], tags: ["themes"], comments: 0, date: "2026-06-04 16:40", status: "draft" },
  { id: 4, title: "How we built the editor", author: "addamsson", categories: ["Dev"], tags: ["editor", "ux"], comments: 7, date: "2026-06-01 12:00", status: "published" },
  { id: 5, title: "Community contributions update", author: "editor1", categories: ["Community"], tags: ["oss"], comments: 2, date: "2026-05-28 10:30", status: "pending" },
  { id: 6, title: "Old experiment - to be removed", author: "addamsson", categories: ["Misc"], tags: [], comments: 0, date: "2026-04-12 22:15", status: "trash" },
  { id: 7, title: "Plugin API overview", author: "author1", categories: ["Dev"], tags: ["api", "plugins"], comments: 9, date: "2026-05-22 11:08", status: "published" },
  { id: 8, title: "Performance numbers", author: "editor1", categories: ["Dev"], tags: ["perf"], comments: 3, date: "2026-05-18 17:55", status: "published" },
];

export const pages: Page[] = [
  { id: 1, title: "Home", author: "addamsson", date: "2026-06-01 10:00", status: "published" },
  { id: 2, title: "About", author: "addamsson", date: "2026-05-20 14:00", status: "published" },
  { id: 3, title: "Contact", author: "editor1", date: "2026-05-18 09:30", status: "published" },
  { id: 4, title: "Privacy Policy", author: "addamsson", date: "2026-04-02 16:11", status: "published" },
  { id: 5, title: "Pricing (WIP)", author: "addamsson", date: "2026-06-07 18:40", status: "draft" },
];

const palette = ["#2271b1", "#00a32a", "#dba617", "#d63638", "#7e57c2", "#26a69a", "#ef6c00", "#5d4037"];

export const media: MediaItem[] = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  name: `image-${String(i + 1).padStart(3, "0")}.jpg`,
  type: i % 7 === 0 ? "video" : i % 5 === 0 ? "doc" : "image",
  color: palette[i % palette.length],
  size: `${(Math.random() * 2 + 0.1).toFixed(2)} MB`,
  uploaded: `2026-06-0${(i % 9) + 1}`,
}));

export const comments: Comment[] = [
  { id: 1, author: "Alice", email: "alice@example.com", content: "Great post, thank you!", post: "Welcome to mancikak", date: "2026-06-08 15:00", status: "approved" },
  { id: 2, author: "Bob", email: "bob@example.com", content: "When will plugins API ship?", post: "Plugin API overview", date: "2026-06-07 09:14", status: "pending" },
  { id: 3, author: "spammy", email: "spam@x.io", content: "Buy cheap shoes!!!", post: "Roadmap for Q3 2026", date: "2026-06-06 02:31", status: "spam" },
  { id: 4, author: "Carol", email: "carol@example.com", content: "Loved the editor demo.", post: "How we built the editor", date: "2026-06-02 19:00", status: "approved" },
  { id: 5, author: "Dan", email: "dan@example.com", content: "Numbers look good but what about cold start?", post: "Performance numbers", date: "2026-05-19 08:42", status: "pending" },
];

export const users: User[] = [
  { id: 1, username: "addamsson", name: "Adam Adamsson", email: "info@hexworks.org", role: "Administrator", posts: 12 },
  { id: 2, username: "editor1", name: "Eve Editor", email: "eve@example.com", role: "Editor", posts: 6 },
  { id: 3, username: "author1", name: "Alan Author", email: "alan@example.com", role: "Author", posts: 3 },
  { id: 4, username: "contrib1", name: "Cory Contrib", email: "cory@example.com", role: "Contributor", posts: 1 },
  { id: 5, username: "sub1", name: "Sam Sub", email: "sam@example.com", role: "Subscriber", posts: 0 },
];

export const stats = {
  posts: posts.filter(p => p.status === "published").length,
  drafts: posts.filter(p => p.status === "draft").length,
  pages: pages.length,
  comments: comments.length,
  pendingComments: comments.filter(c => c.status === "pending").length,
  media: media.length,
  users: users.length,
};

export const activity = [
  { who: "addamsson", what: "published 'Welcome to mancikak'", when: "2h ago" },
  { who: "Bob", what: "commented on 'Plugin API overview'", when: "5h ago" },
  { who: "editor1", what: "edited 'Working draft: Theme system v2'", when: "1d ago" },
  { who: "system", what: "Auto-updated 2 plugins", when: "2d ago" },
  { who: "addamsson", what: "uploaded 3 media files", when: "3d ago" },
];
