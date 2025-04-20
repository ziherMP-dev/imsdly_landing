import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { createServerClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download, FileStack, Settings } from "lucide-react"

export const metadata: Metadata = {
  title: "Dashboard - Imsdly",
  description: "Manage your Imsdly account and downloads",
}

export default async function DashboardPage() {
  const supabase = createServerClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect("/auth")
  }

  const user = session.user

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter font-poppins text-[#1E88E5]">
                Welcome, {user.user_metadata.full_name || "User"}
              </h1>
              <p className="text-gray-500 font-inter">Manage your Imsdly account and downloads</p>
            </div>
            <Button asChild className="bg-[#1E88E5] hover:bg-[#1976D2]">
              <Link href="/auth">
                <Settings className="mr-2 h-4 w-4" />
                Account Settings
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#E3F2FD] p-3 rounded-full">
                  <FileStack className="h-6 w-6 text-[#1E88E5]" />
                </div>
                <h2 className="text-xl font-bold font-poppins">Your License</h2>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-500 font-inter">Status</span>
                  <span className="font-medium text-green-600 font-inter">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-inter">Type</span>
                  <span className="font-medium font-inter">Lifetime License</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-inter">Purchase Date</span>
                  <span className="font-medium font-inter">{new Date().toLocaleDateString()}</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                View License Details
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#E3F2FD] p-3 rounded-full">
                  <Download className="h-6 w-6 text-[#1E88E5]" />
                </div>
                <h2 className="text-xl font-bold font-poppins">Download Imsdly</h2>
              </div>
              <p className="text-gray-500 mb-6 font-inter">
                Download the latest version of Imsdly for your operating system.
              </p>
              <div className="space-y-3">
                <Button className="w-full bg-[#1E88E5] hover:bg-[#1976D2]">Download for Windows</Button>
                <Button variant="outline" className="w-full">
                  Download for macOS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
