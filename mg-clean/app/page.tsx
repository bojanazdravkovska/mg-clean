'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RedirectPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/en') // 🔁 replace 'en' with your default locale
  }, [router])

  return null
}
