import { useSyncExternalStore } from 'react'

const STORAGE_KEY = 'cidev-theme'
const listeners = new Set()

function readInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    /* localStorage indisponível */
  }
  return 'light'
}

let currentTheme = readInitialTheme()

export function applyTheme(theme) {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  root.dataset.theme = theme
  root.style.colorScheme = theme
}

export function setTheme(theme) {
  if (theme !== 'light' && theme !== 'dark') return
  if (theme === currentTheme) return
  currentTheme = theme
  try {
    window.localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    /* ignora falha de persistência */
  }
  const commit = () => {
    applyTheme(theme)
    listeners.forEach((listener) => listener())
  }
  if (typeof document !== 'undefined' && document.startViewTransition) {
    document.startViewTransition(commit)
  } else {
    commit()
  }
}

export function toggleTheme() {
  setTheme(currentTheme === 'dark' ? 'light' : 'dark')
}

function subscribe(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot() {
  return currentTheme
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
  return { theme, setTheme, toggleTheme }
}

// Sync the DOM with the resolved theme as soon as the module loads.
applyTheme(currentTheme)
