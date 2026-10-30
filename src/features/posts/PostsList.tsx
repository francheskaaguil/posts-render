const posts = [
  {
    id: 1,
    title: "Welcome to Posts Reader",
    content: "This is your first sample post.",
  },
  {
    id: 2,
    title: "Learning React and TypeScript",
    content: "Explore posts using modern web technologies.",
  },
];

export function PostsList() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Latest Posts</h2>

      {posts.map((post) => (
        <article key={post.id} className="rounded-lg border p-4">
          <h3 className="font-semibold">{post.title}</h3>
          <p className="mt-2 text-muted-foreground">{post.content}</p>
        </article>
      ))}
    </section>
  );
}