"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react"

interface Notification {
  id: string
  type: "success" | "error" | "info" | "warning"
  title: string
  message: string
  duration?: number
}

interface NotificationSystemProps {
  notifications: Notification[]
  onRemove: (id: string) => void
}

export default function NotificationSystem({ notifications, onRemove }: NotificationSystemProps) {
  useEffect(() => {
    notifications.forEach((notification) => {
      if (notification.duration) {
        const timer = setTimeout(() => {
          onRemove(notification.id)
        }, notification.duration)

        return () => clearTimeout(timer)
      }
    })
  }, [notifications, onRemove])

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "error":
        return <AlertCircle className="h-5 w-5 text-red-600" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />
      default:
        return <Info className="h-5 w-5 text-blue-600" />
    }
  }

  const getBackgroundColor = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200"
      case "error":
        return "bg-red-50 border-red-200"
      case "warning":
        return "bg-yellow-50 border-yellow-200"
      default:
        return "bg-blue-50 border-blue-200"
    }
  }

  if (notifications.length === 0) return null

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
      {notifications.map((notification) => (
        <Card key={notification.id} className={`${getBackgroundColor(notification.type)} shadow-lg`}>
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              {getIcon(notification.type)}
              <div className="flex-1">
                <h4 className="font-semibold text-sm">{notification.title}</h4>
                <p className="text-sm text-gray-600">{notification.message}</p>
              </div>
              <Button variant="ghost" size="sm" onClick={() => onRemove(notification.id)} className="h-6 w-6 p-0">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
