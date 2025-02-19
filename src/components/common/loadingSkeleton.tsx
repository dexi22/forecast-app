import Skeleton from "./skeleton";

export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid sm:grid-cols-2 gap-4">
        {Array(4).fill(null).map((_, index) => (
          <Skeleton className="w-full h-24" key={index} />
        ))}
      </div>
      {Array(2).fill(null).map(() => (
        <Skeleton className="w-full h-24" />
      ))}
    </div>
  );
}
