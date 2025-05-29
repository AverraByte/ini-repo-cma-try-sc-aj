import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Skeleton */}
          <div className="w-full md:w-64 shrink-0">
            <Skeleton className="h-10 w-full bg-gray-800/50 mb-6" />
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-6 w-3/4 bg-gray-800/50" />
                  <div className="pl-4 space-y-2">
                    {[...Array(3)].map((_, j) => (
                      <Skeleton key={j} className="h-4 w-full bg-gray-800/30" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Skeleton */}
          <div className="flex-1">
            <Skeleton className="h-12 w-3/4 bg-gray-800/50 mb-8" />
            <Skeleton className="h-6 w-full bg-gray-800/30 mb-4" />
            <Skeleton className="h-6 w-full bg-gray-800/30 mb-4" />
            <Skeleton className="h-6 w-2/3 bg-gray-800/30 mb-8" />

            <Skeleton className="h-8 w-1/2 bg-gray-800/50 mb-4" />
            <Skeleton className="h-6 w-full bg-gray-800/30 mb-4" />
            <Skeleton className="h-6 w-full bg-gray-800/30 mb-4" />
            <Skeleton className="h-6 w-4/5 bg-gray-800/30 mb-8" />

            <Skeleton className="h-64 w-full bg-gray-800/20 mb-8" />

            <Skeleton className="h-8 w-1/2 bg-gray-800/50 mb-4" />
            <Skeleton className="h-6 w-full bg-gray-800/30 mb-4" />
            <Skeleton className="h-6 w-full bg-gray-800/30 mb-4" />
            <Skeleton className="h-6 w-3/4 bg-gray-800/30 mb-4" />
          </div>
        </div>
      </div>
    </div>
  )
}
