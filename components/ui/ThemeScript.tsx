// src/components/ThemeScript.tsx
'use client'

import { useEffect } from 'react'
import { setInitialTheme } from '@/lib/theme'

export function ThemeScript() {
  useEffect(() => {
    setInitialTheme()
  }, [])

  return null
}
