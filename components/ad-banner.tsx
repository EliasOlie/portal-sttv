"use client"

import { Card } from "@/components/ui/card"

interface AdBannerProps {
  size: "leaderboard" | "rectangle" | "skyscraper" | "mobile"
  className?: string
}

export default function AdBanner({ size, className = "" }: AdBannerProps) {
  const dimensions = {
    leaderboard: { width: "728px", height: "90px", label: "728x90" },
    rectangle: { width: "300px", height: "250px", label: "300x250" },
    skyscraper: { width: "160px", height: "600px", label: "160x600" },
    mobile: { width: "320px", height: "100px", label: "320x100" },
  }

  const { width, height, label } = dimensions[size]

  return (
    <Card
      className={`flex items-center justify-center bg-muted border-2 border-dashed border-border ${className}`}
      style={{ width: "100%", maxWidth: width, height, margin: "0 auto" }}
    >
      <div className="text-center">
        <p className="text-sm font-medium text-muted-foreground">Espaço Publicitário</p>
        <p className="text-xs text-muted-foreground mt-1">{label}</p>
      </div>
    </Card>
  )
}
