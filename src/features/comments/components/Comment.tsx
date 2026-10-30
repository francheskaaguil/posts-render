import { Avatar } from "@/components/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Comment as CommentType } from "../comments.types";

type CommentProps = {
  comment: CommentType;
};

export function Comment({ comment }: CommentProps) {
  const initial = comment.email.charAt(0).toUpperCase();

  return (
    <Card size="sm">
      <CardHeader className="flex flex-row items-center gap-3">
        <Avatar>{initial}</Avatar>
        <div className="min-w-0">
          <CardTitle>{comment.name}</CardTitle>
          <p className="text-xs text-muted-foreground">
            {comment.email}
          </p>
        </div>
      </CardHeader>

      <CardContent>
        <p className="leading-7 text-muted-foreground">{comment.body}</p>
      </CardContent>
    </Card>
  );
}

export function CommentSkeleton() {
  return (
    <Card size="sm">
      <CardHeader className="flex flex-row items-center gap-3">
        <Skeleton className="size-10 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </CardContent>
    </Card>
  );
}