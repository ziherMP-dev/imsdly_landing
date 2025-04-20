"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function DownloadPage() {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (!session) {
        router.push("/auth")
        return
      }
      
      setAuthenticated(true)
      setLoading(false)
    }

    checkAuth()
  }, [router])

  // Simple function to download files directly without fetch
  const handleDownload = (filename: string, url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.target = "_blank"; // Opens in new tab if direct download fails
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-[#1E88E5]" />
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    )
  }

  if (!authenticated) {
    return null // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col space-y-8 mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tighter font-poppins text-[#1E88E5] sm:text-5xl">
            Download Imsdly
          </h1>
          <p className="max-w-[700px] text-gray-600 md:text-xl mx-auto">
            Choose your platform below to download the latest version of Imsdly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Windows Download */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-blue-50 mx-auto mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-12 w-12 text-[#1E88E5]" 
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M0,0V11.1H11.1V0ZM12.9,0V11.1H24V0ZM0,12.9V24H11.1V12.9ZM12.9,12.9V24H24V12.9Z"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-center mb-3">Windows</h2>
              <p className="text-gray-600 text-center mb-6">
                Download Imsdly for Windows 10 and above
              </p>
              <div className="mt-auto">
                <Button 
                  className="w-full bg-[#1E88E5] hover:bg-[#1976D2]"
                  onClick={() => handleDownload('imsdly-windows.exe', 'https://michalpuchalski.pl/downloads/file.exe')}
                >
                  <div className="flex items-center justify-center gap-2 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download for Windows
                  </div>
                </Button>
                <p className="text-xs text-gray-500 text-center mt-3">Version 1.0.0</p>
              </div>
            </div>
          </div>

          {/* Mac Download */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-blue-50 mx-auto mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-12 w-12 text-[#1E88E5]" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-center mb-3">macOS</h2>
              <p className="text-gray-600 text-center mb-6">
                Download Imsdly for macOS 10.15 and above
              </p>
              <div className="mt-auto">
                <Button 
                  className="w-full bg-[#1E88E5] hover:bg-[#1976D2]"
                  onClick={() => handleDownload('imsdly-macos.exe', 'https://michalpuchalski.pl/downloads/file1.exe')}
                >
                  <div className="flex items-center justify-center gap-2 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download for macOS
                  </div>
                </Button>
                <p className="text-xs text-gray-500 text-center mt-3">Version 1.0.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 