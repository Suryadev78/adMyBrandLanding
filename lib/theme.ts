export function setInitialTheme() {
    try {
      const savedTheme = localStorage.getItem('darkMode')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const shouldUseDark = savedTheme === null ? prefersDark : JSON.parse(savedTheme)
  
      if (shouldUseDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } catch {
      // Fallback to dark if localStorage not available
      document.documentElement.classList.add('dark')
    }
  }
  