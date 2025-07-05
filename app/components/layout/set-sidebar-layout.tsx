"use client"

import { useEffect } from "react"

export function SetSidebarLayout() {
  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      const PREFERENCES_STORAGE_KEY = "user-preferences"
      const LAYOUT_STORAGE_KEY = "preferred-layout"
      
      try {
        // Get current preferences or create new ones
        const storedPrefs = localStorage.getItem(PREFERENCES_STORAGE_KEY)
        let preferences = storedPrefs ? JSON.parse(storedPrefs) : {}
        
        // Set layout to sidebar
        preferences.layout = "sidebar"
        
        // Save back to localStorage
        localStorage.setItem(PREFERENCES_STORAGE_KEY, JSON.stringify(preferences))
        localStorage.setItem(LAYOUT_STORAGE_KEY, "sidebar")
      } catch (e) {
        console.error("Failed to set sidebar layout:", e)
      }
    }
  }, [])

  // This component doesn't render anything
  return null
}
