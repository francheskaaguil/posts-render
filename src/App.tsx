import { Layout } from "@/components/layout";
import { About } from "@/pages/About";
import { PostsList } from "@/features/posts/PostsList";
import { CommentsList } from "@/features/comments/CommentsList";

function App() {
  return (
    <Layout>
      <div className="space-y-8">
        <About />
        <PostsList />
        <CommentsList />
      </div>
    </Layout>
  );
}

export default App;