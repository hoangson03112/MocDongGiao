"use client"

import { useState, useCallback } from "react"

interface Notification {
  id: string
  type: "success" | "error" | "info" | "warning"
  title: string
  message: string
  duration?: number
}

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const addNotification = useCallback((notification: Omit<Notification, "id">) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newNotification = {
      ...notification,
      id,
      duration: notification.duration || 5000,
    }

    setNotifications((prev) => [...prev, newNotification])
  }, [])

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id))
  }, [])

  const clearAll = useCallback(() => {
    setNotifications([])
  }, [])

  return {
    notifications,
    addNotification,
    removeNotification,
    clearAll,
  }
}
