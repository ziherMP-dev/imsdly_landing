"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileStack, LogOut, User } from "lucide-react"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase/client"
import type { User as SupabaseUser } from "@supabase/supabase-js"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

export default function Header() {
  const [user, setUser] = useState<SupabaseUser | null>(null)
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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image 
            src="/imsdly_logo.png" 
            alt="Imsdly Logo" 
            width={30} 
            height={30}
          />
          <Link href="/" className="text-xl font-bold">
            Imsdly
          </Link>
        </div>
        <nav className="hidden md:flex items-center">
          <div className="flex items-center gap-1 px-4 py-1 mx-4 bg-slate-100/80 rounded-full">
            <Link 
              href="#features" 
              className="group relative px-4 py-2 text-sm font-medium text-gray-800 hover:text-[#1E88E5] transition-colors"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#1E88E5] scale-x-0 transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link 
              href="#how-it-works" 
              className="group relative px-4 py-2 text-sm font-medium text-gray-800 hover:text-[#1E88E5] transition-colors"
            >
              How It Works
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#1E88E5] scale-x-0 transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link 
              href="#devices" 
              className="group relative px-4 py-2 text-sm font-medium text-gray-800 hover:text-[#1E88E5] transition-colors"
            >
              Devices
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#1E88E5] scale-x-0 transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link 
              href="#pricing" 
              className="group relative px-4 py-2 text-sm font-medium text-gray-800 hover:text-[#1E88E5] transition-colors"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#1E88E5] scale-x-0 transition-transform group-hover:scale-x-100"></span>
            </Link>
          </div>
        </nav>
        <div className="flex items-center gap-4">
          {loading ? (
            <div className="w-24 h-9 bg-gray-200 animate-pulse rounded-md"></div>
          ) : user ? (
            <div className="flex items-center gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2 px-3 py-2 h-9 bg-[#1E88E5] text-white hover:bg-[#1976D2] border-[#1565C0]">
                    <span className="text-sm font-medium">
                      {user.user_metadata.full_name || user.email?.split('@')[0] || "User"}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.user_metadata.full_name || "User"}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/download" className="cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      <span>Download</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-red-600 focus:text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <Button className="bg-[#1E88E5] hover:bg-[#1976D2]">
              <Link href="/auth">Sign In</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
