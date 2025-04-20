"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase/client"
import type { User } from "@supabase/supabase-js"
import { Loader2, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import AuthForm from "./auth-form"

export default function UserAuthForm() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check for existing session
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      setUser(session?.user || null)
      setLoading(false)

      // Set up auth state listener
      const {
        data: { subscription },
      } = await supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user || null)
      })

      return () => {
        subscription.unsubscribe()
      }
    }

    checkUser()
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-[#1E88E5]" />
      </div>
    )
  }

  if (user) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
        <div className="text-center mb-6">
          <div className="h-20 w-20 rounded-full bg-[#E3F2FD] flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-[#1E88E5]">
              {user.user_metadata.full_name
                ? user.user_metadata.full_name.charAt(0).toUpperCase()
                : user.email?.charAt(0).toUpperCase()}
            </span>
          </div>
          <h2 className="text-xl font-bold font-poppins">{user.user_metadata.full_name || "User"}</h2>
          <p className="text-gray-500 font-inter">{user.email}</p>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2 font-poppins">Account Status</h3>
            <p className="text-sm text-gray-600 font-inter">
              {user.email_confirmed_at ? "Email verified" : "Email not verified"}
            </p>
          </div>

          <Button
            onClick={handleSignOut}
            variant="outline"
            className="w-full border-red-300 text-red-600 hover:bg-red-50 hover:text-red-700"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>
    )
  }

  return <AuthForm />
}
