import Image from "next/image"

interface SEOImageProps {
  src: string
  alt: string
  width: number
  height: number
  title?: string
  className?: string
  priority?: boolean
  loading?: "lazy" | "eager"
}

export default function SEOOptimizedImage({
  src,
  alt,
  width,
  height,
  title,
  className,
  priority = false,
  loading = "lazy",
}: SEOImageProps) {
  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      title={title}
      className={className}
      priority={priority}
      loading={loading}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={{
        width: "100%",
        height: "auto",
      }}
    />
  )
}
