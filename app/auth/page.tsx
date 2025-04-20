import type { Metadata } from "next"
import UserAuthForm from "@/components/auth/user-auth-form"

export const metadata: Metadata = {
  title: "Authentication - Imsdly",
  description: "Sign in or create an account for Imsdly",
}

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-poppins text-[#1E88E5]">
              Account
            </h1>
            <p className="text-gray-500 md:text-xl font-inter max-w-[700px] mx-auto">
              Sign in to your Imsdly account or create a new one to manage your licenses and downloads
            </p>
          </div>

          <div className="w-full max-w-md mx-auto mt-8">
            <UserAuthForm />
          </div>
        </div>
      </div>
    </div>
  )
}
