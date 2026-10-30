import { Layout } from "@/components/layout";
import { About } from "@/pages/About";
import { PostsList } from "@/features/posts/PostsList";

function App() {
  return (
    <Layout>
      <div className="space-y-8">
        <About />
        <PostsList />
      </div>
    </Layout>
  );
}

export default App;