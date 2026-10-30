import { Button } from "@/components/ui/button";
import { useComments } from "../comments.hooks";
import { Comment, CommentSkeleton } from "./Comment";

type CommentListProps = {
  postId: number;
};

export function CommentList({ postId }: CommentListProps) {
  const { data, isPending, isError, refetch } = useComments(postId);

  return (
    <section className="mt-12 space-y-6">
      <div className="flex items-center gap-2">
        <h2 className="font-reading text-2xl font-semibold">
          Comments
        </h2>
        {data && (
          <span className="text-sm text-muted-foreground">
            ({data.length})
          </span>
        )}
      </div>

      {isPending && (
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <CommentSkeleton key={index} />
          ))}
        </div>
      )}

      {isError && (
        <div className="space-y-3">
          <p className="text-sm text-destructive">
            Unable to load comments.
          </p>
          <Button variant="outline" onClick={() => refetch()}>
            Try again
          </Button>
        </div>
      )}

      {!isPending && !isError && data?.length === 0 && (
        <p className="text-sm text-muted-foreground">
          No comments yet.
        </p>
      )}

      {!isPending && !isError && data && data.length > 0 && (
        <div className="space-y-4">
          {data.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </section>
  );
}