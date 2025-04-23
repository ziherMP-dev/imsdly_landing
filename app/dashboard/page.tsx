"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, FileStack, Settings, User, AlertCircle, Loader2, X, Check } from "lucide-react"
import { supabase } from "@/lib/supabase/client"
import Header from "@/components/header"
import { Input } from "@/components/ui/input"

export default function DashboardPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [isEditingName, setIsEditingName] = useState(false)
  const [newName, setNewName] = useState("")
  const [updateLoading, setUpdateLoading] = useState(false)
  
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        
        if (!session) {
          router.push('/auth')
          return
        }
        
        setUser(session.user)
        setNewName(session.user.user_metadata?.full_name || "")
        setLoading(false)
      } catch (error) {
        console.error("Auth error:", error)
        router.push('/auth')
      }
    }
    
    checkAuth()
  }, [router])
  
  const handleEditProfile = () => {
    setIsEditingName(true)
  }
  
  const handleCancelEdit = () => {
    setNewName(user?.user_metadata?.full_name || "")
    setIsEditingName(false)
  }
  
  const handleSaveName = async () => {
    try {
      setUpdateLoading(true)
      
      const { data, error } = await supabase.auth.updateUser({
        data: { full_name: newName }
      })
      
      if (error) throw error
      
      // Update local user state
      setUser({
        ...user,
        user_metadata: {
          ...user.user_metadata,
          full_name: newName
        }
      })
      
      setIsEditingName(false)
    } catch (error) {
      console.error("Failed to update profile:", error)
    } finally {
      setUpdateLoading(false)
    }
  }
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-[#1E88E5]" />
        <p className="mt-4 text-gray-600">Loading your dashboard...</p>
      </div>
    )
  }
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter font-poppins text-[#1E88E5]">
                  Welcome, {user?.user_metadata?.full_name || "User"}
                </h1>
                <p className="text-gray-500 font-inter">Manage your Imsdly account and license</p>
              </div>
              <Button 
                variant="outline" 
                className="bg-transparent border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                asChild
              >
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Return to Home
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
                    <User className="h-6 w-6 text-[#1E88E5]" />
                  </div>
                  <h2 className="text-xl font-bold font-poppins">Account Info</h2>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-500 font-inter">Email</span>
                    <span className="font-medium font-inter">{user?.email}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-inter">Name</span>
                    {isEditingName ? (
                      <div className="flex items-center gap-2">
                        <Input 
                          value={newName} 
                          onChange={(e) => setNewName(e.target.value)}
                          className="w-40 h-8 text-sm"
                          placeholder="Enter your name"
                        />
                        <button 
                          onClick={handleSaveName}
                          className="text-green-600 hover:text-green-700"
                          disabled={updateLoading}
                        >
                          {updateLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
                        </button>
                        <button 
                          onClick={handleCancelEdit}
                          className="text-red-600 hover:text-red-700"
                          disabled={updateLoading}
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <span className="font-medium font-inter">{user?.user_metadata?.full_name || "Not set"}</span>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 font-inter">Registered</span>
                    <span className="font-medium font-inter">{new Date(user?.created_at).toLocaleDateString()}</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleEditProfile}
                  disabled={isEditingName}
                >
                  Edit Name
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
