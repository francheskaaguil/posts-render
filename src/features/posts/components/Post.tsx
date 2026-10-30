import { Link } from "react-router";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Post } from "../posts.types";

const PostRow = ({ post }: { post: Post }) => {
  return (
    <Card className="relative gap-3 transition-colors hover:bg-muted/40">
      <CardHeader>
        <h2 className="font-reading text-xl leading-snug">
          <Link
            to={`/posts/${post.id}`}
            className="before:absolute before:inset-0 before:content-['']"
          >
            {post.title}
          </Link>
        </h2>
        <CardAction className="text-sm text-muted-foreground">
          #{post.id}
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {post.body}
        </p>
      </CardContent>
    </Card>
  );
};

export const PostRowSkeleton = () => (
  <Card className="gap-3">
    <CardHeader>
      <Skeleton className="h-6 w-3/4" />
    </CardHeader>
    <CardContent>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-2/3" />
    </CardContent>
  </Card>
);

export default PostRow;