import { isAxiosError } from "axios";
import { Link, useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { Skeleton } from "@/components/ui/skeleton";
import { usePost } from "@/features/posts/posts.hooks";
import { gutter } from "@/lib/layout";

const toParagraphs = (body: string) =>
  body
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

const PostDetailsScreen = () => {
  const { postId } = useParams();
  const { isPending, isError, error, data, refetch } = usePost(Number(postId));

  if (isPending) {
    return (
      <div className="mt-12 space-y-6">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-5 w-1/3" />
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
    );
  }

  if (isError) {
    const isNotFound = isAxiosError(error) && error.response?.status === 404;

    return (
      <div className="mt-12 text-center">
        <h1 className="font-reading text-2xl">
          {isNotFound
            ? "No post at this address"
            : "The post didn't load"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {isNotFound
            ? "The post you're looking for doesn't exist."
            : "Something went wrong while loading this post."}
        </p>
        <div className="mt-5 flex justify-center gap-3">
          <Button onClick={() => refetch()}>Try again</Button>
          <Link to="/" className={buttonVariants({ variant: "outline" })}>
            Browse all posts
          </Link>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <article className="mt-12">
      <div className={gutter}>
        <span className="text-sm text-muted-foreground">#{data.id}</span>
        <div>
          <h1 className="font-reading text-3xl leading-tight tracking-tight">
            {data.title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Written by User {data.userId}
          </p>
        </div>
      </div>

      <div className={`${gutter} mt-10`}>
        <div />
        <div className="space-y-5 leading-8 text-foreground/85">
          {toParagraphs(data.body).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default PostDetailsScreen;