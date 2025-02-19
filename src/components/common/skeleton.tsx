interface SkeletonProps {
  className?: string;
}

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div className={`bg-primary animate-pulse rounded-md ${className}`} aria-hidden="true"></div>
  );
}
