const comments = [
  {
    id: 1,
    name: "Alex",
    message: "This is a great post!",
  },
  {
    id: 2,
    name: "Jamie",
    message: "I enjoyed reading this.",
  },
];

export function CommentsList() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Comments</h2>

      {comments.map((comment) => (
        <article key={comment.id} className="rounded-lg border p-4">
          <h3 className="font-semibold">{comment.name}</h3>
          <p className="mt-2 text-muted-foreground">{comment.message}</p>
        </article>
      ))}
    </section>
  );
}