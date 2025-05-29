import { Skeleton } from "@/components/ui/skeleton"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section Skeleton */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-background/80">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <Skeleton className="h-12 w-[250px] sm:w-[350px] md:w-[450px] mx-auto" />
              <Skeleton className="h-6 w-[300px] sm:w-[400px] md:w-[600px] mx-auto" />
            </div>
            <div className="w-full max-w-md space-y-2">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-4 w-3/4 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section Skeleton */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg border bg-card p-6">
                <div className="space-y-4">
                  <Skeleton className="h-6 w-1/2" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Base Section Skeleton */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="space-y-2 text-center">
              <Skeleton className="h-8 w-[200px] mx-auto" />
              <Skeleton className="h-5 w-[300px] mx-auto" />
            </div>
            <Skeleton className="h-12 w-full" />
            <div className="grid gap-4 md:grid-cols-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="rounded-lg border bg-card">
                  <div className="p-6 space-y-4">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <div className="flex justify-end">
                      <Skeleton className="h-8 w-24" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Skeleton className="h-10 w-40" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section Skeleton */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2 text-center">
              <Skeleton className="h-8 w-[250px] mx-auto" />
              <Skeleton className="h-5 w-[200px] mx-auto" />
            </div>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="rounded-lg border bg-card p-4">
                  <Skeleton className="h-6 w-full" />
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
        </div>
      </section>

      {/* Support Ticket Section Skeleton */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2 text-center">
              <Skeleton className="h-8 w-[300px] mx-auto" />
              <Skeleton className="h-5 w-[400px] mx-auto" />
            </div>
            <div className="rounded-lg border bg-card">
              <div className="p-6 space-y-6">
                <div className="space-y-2">
                  <Skeleton className="h-6 w-1/3" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-32 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="flex justify-between">
                  <Skeleton className="h-10 w-24" />
                  <Skeleton className="h-10 w-24" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section Skeleton */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="space-y-2 text-center">
              <Skeleton className="h-8 w-[250px] mx-auto" />
              <Skeleton className="h-5 w-[350px] mx-auto" />
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-lg border bg-card p-6">
                  <div className="space-y-4">
                    <Skeleton className="h-6 w-2/3" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section Skeleton */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Skeleton className="h-10 w-[300px] sm:w-[400px] mx-auto bg-primary-foreground/20" />
              <Skeleton className="h-6 w-[400px] sm:w-[500px] mx-auto bg-primary-foreground/20" />
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Skeleton className="h-12 w-32 bg-primary-foreground/20" />
              <Skeleton className="h-12 w-32 bg-primary-foreground/20" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
