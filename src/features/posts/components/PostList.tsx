import { Button } from "@/components/ui/button";
import { usePosts } from "../posts.hooks";
import PostRow, { PostRowSkeleton } from "./Post";

const PostList = () => {
  const { data, isPending, isError, refetch } = usePosts();

  if (isPending) {
    return (
      <div className="mt-8 grid gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <PostRowSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-8 text-center">
        <p className="text-muted-foreground">The posts couldn't be loaded.</p>
        <Button onClick={() => refetch()} className="mt-3">
          Try again
        </Button>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <p className="mt-8 text-center text-muted-foreground">
        No posts found.
      </p>
    );
  }

  return (
    <div className="mt-8 grid gap-4">
      {data.map((post) => (
        <PostRow key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;