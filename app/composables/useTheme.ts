export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'qxchat-theme'

export function useTheme() {
  const theme = ref<Theme>('light')

  function apply(choice: Theme) {
    theme.value = choice
    document.documentElement.setAttribute('data-theme', choice)

    // Update theme-color meta for browser chrome
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) {
      meta.setAttribute('content', choice === 'dark' ? '#0f1318' : '#07111f')
    }

    try {
      localStorage.setItem(STORAGE_KEY, choice)
    } catch { /* storage may be unavailable */ }
  }

  function toggle() {
    apply(theme.value === 'light' ? 'dark' : 'light')
  }

  // Init: stored preference → system preference → light fallback
  onMounted(() => {
    let initial: Theme = 'light'

    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === 'dark' || stored === 'light') {
        initial = stored
      } else {
        initial = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      }
    } catch {
      initial = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    apply(initial)

    // Listen for system changes when no explicit choice has been made
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    mql.addEventListener('change', (e) => {
      try {
        if (!localStorage.getItem(STORAGE_KEY)) {
          apply(e.matches ? 'dark' : 'light')
        }
      } catch { /* ignore */ }
    })
  })

  return { theme, toggle, apply }
}
