"use client"

import { SetSidebarLayout } from "@/app/components/layout/set-sidebar-layout"
import { API_ROUTE_CSRF } from "@/lib/routes"
import { useQuery } from "@tanstack/react-query"

export function LayoutClient() {
  useQuery({
    queryKey: ["csrf-init"],
    queryFn: async () => {
      await fetch(API_ROUTE_CSRF)
      return true
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
  })

  return <SetSidebarLayout />
}
