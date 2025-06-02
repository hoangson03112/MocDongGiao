import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function ProductCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="h-64 w-full" />
      <CardContent className="p-4">
        <Skeleton className="h-4 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-2" />
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-8 w-20" />
        </div>
      </CardContent>
    </Card>
  )
}

export function ProductGridSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  )
}

export function BlogCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="h-48 w-full" />
      <CardContent className="p-6">
        <Skeleton className="h-4 w-16 mb-3" />
        <Skeleton className="h-6 w-full mb-3" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4 mb-4" />
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-4 w-1/4" />
        </div>
      </CardContent>
    </Card>
  )
}

export function PageLoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-8 w-1/3 mb-8" />
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 space-y-4">
                <Skeleton className="h-6 w-1/2" />
                {Array.from({ length: 5 }).map((_, index) => (
                  <Skeleton key={index} className="h-4 w-full" />
                ))}
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-3">
            <ProductGridSkeleton />
          </div>
        </div>
      </div>
    </div>
  )
}
