"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download, FileStack, Settings } from "lucide-react"

export default function DashboardPage() {
  const router = useRouter()
  
  useEffect(() => {
    // For static export, redirect to auth page
    // The real dashboard functionality will be available in development/production
    router.push('/auth')
  }, [router])
  
  // Return a placeholder while redirecting
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter font-poppins text-[#1E88E5]">
                Dashboard
              </h1>
              <p className="text-gray-500 font-inter">Redirecting to login...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
