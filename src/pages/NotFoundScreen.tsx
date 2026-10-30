
import { Link, useLocation } from "react-router";
import { gutter } from "@/lib/layout";


const NotFoundScreen = () => {
  const { pathname } = useLocation();

  return (
    <div className={`mt-16 ${gutter}`}>
      <p className="text-sm tabular-nums text-muted-foreground sm:mt-2 sm:text-right">
        404
      </p>

      <div className="min-w-0 max-w-sm">
        <h1 className="font-reading text-[1.75rem] leading-[1.15] tracking-[-0.01em]">
          This page doesn't exist
        </h1>

        <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
          Nothing is routed at{" "}
          <code className="text-foreground">{pathname}</code>.
        </p>

        <div className="mt-6">
          <Link
        to="/"
        className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent"
        >
        Browse all posts
        </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundScreen;
