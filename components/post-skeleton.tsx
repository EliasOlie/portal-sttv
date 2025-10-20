export function PostCardSkeleton() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative h-48 bg-gray-200 animate-pulse"></div>
      <div className="p-6">
        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-2"></div>
        <div className="h-6 bg-gray-200 rounded animate-pulse mb-3"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse mb-4"></div>
        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
}

export function PostDetailSkeleton() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="h-10 w-3/4 bg-gray-200 rounded animate-pulse mb-4 mx-auto"></div>
      <div className="h-6 w-1/2 bg-gray-200 rounded animate-pulse mb-8 mx-auto"></div>

      <div className="relative h-80 bg-gray-200 animate-pulse mb-8 rounded-lg"></div>

      <div className="space-y-4">
        <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse"></div>

        <div className="h-4 mt-8 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>

        <div className="h-6 mt-8 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
}
