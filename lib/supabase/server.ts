import { createClient } from "@supabase/supabase-js"
import { cookies } from "next/headers"
import { cache } from "react"

export const createServerClient = cache(() => {
  const cookieStore = cookies()

  return createClient(process.env.SUPABASE_URL as string, process.env.SUPABASE_ANON_KEY as string, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
    },
  })
})
