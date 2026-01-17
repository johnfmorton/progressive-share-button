// Path: demo-page-assets/demo.ts
// This is the entry point for the demo page. It's a TypeScript file that
// loads in the module that we're building with this repo
declare const __APP_VERSION__: string

import { ProgressiveShareButton } from '../lib/progressive-share-button'
ProgressiveShareButton()

// Populate version info in footer
const versionInfo = document.getElementById('version-info')
if (versionInfo) {
    versionInfo.textContent = `v${__APP_VERSION__}`
}

import {
    ProgressiveShareSuccessEvent,
    ProgressiveShareFailEvent,
} from '../lib/progressive-share-button'

document.addEventListener('progressive-share-success', (e) => {
    const { detail } = e as ProgressiveShareSuccessEvent
    if (detail) {
        console.log('The progressive-share-success event was heard.', detail)
    }
})
document.addEventListener('progressive-share-fail', (e) => {
    const { detail } = e as ProgressiveShareFailEvent
    console.log('The progressive-share-fail event was heard.', detail)
})

import './style.pcss'

// Theme Management
const THEME_KEY = 'progressive-share-button-theme'

type Theme = 'light' | 'dark'

function getStoredTheme(): Theme | null {
    try {
        const stored = localStorage.getItem(THEME_KEY)
        if (stored === 'light' || stored === 'dark') {
            return stored
        }
    } catch {
        // localStorage may not be available
    }
    return null
}

function getSystemTheme(): Theme {
    if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
        return 'dark'
    }
    return 'light'
}

function setTheme(theme: Theme, save = true): void {
    const html = document.documentElement

    // Add transition class for smooth theme change
    html.classList.add('theme-transition')

    if (theme === 'dark') {
        html.classList.add('dark')
    } else {
        html.classList.remove('dark')
    }

    // Update toggle button icons
    updateToggleIcons(theme)

    // Remove transition class after animation completes
    setTimeout(() => {
        html.classList.remove('theme-transition')
    }, 300)

    // Save preference
    if (save) {
        try {
            localStorage.setItem(THEME_KEY, theme)
        } catch {
            // localStorage may not be available
        }
    }
}

function updateToggleIcons(theme: Theme): void {
    const sunIcon = document.getElementById('sun-icon')
    const moonIcon = document.getElementById('moon-icon')

    if (sunIcon && moonIcon) {
        if (theme === 'dark') {
            sunIcon.classList.remove('hidden')
            moonIcon.classList.add('hidden')
        } else {
            sunIcon.classList.add('hidden')
            moonIcon.classList.remove('hidden')
        }
    }
}

function getCurrentTheme(): Theme {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

export function toggleTheme(): void {
    const current = getCurrentTheme()
    const next = current === 'dark' ? 'light' : 'dark'
    setTheme(next)
}

function initTheme(): void {
    // Check for stored preference first
    const stored = getStoredTheme()
    if (stored) {
        setTheme(stored, false)
        return
    }

    // Fall back to system preference
    const system = getSystemTheme()
    setTheme(system, false)
}

function watchSystemTheme(): void {
    if (!window.matchMedia) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    mediaQuery.addEventListener('change', (e) => {
        // Only apply system preference if user hasn't set a manual preference
        const stored = getStoredTheme()
        if (!stored) {
            setTheme(e.matches ? 'dark' : 'light', false)
        }
    })
}

// Initialize theme when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initTheme()
    watchSystemTheme()

    // Set up theme toggle button
    const toggleButton = document.getElementById('theme-toggle')
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleTheme)
    }

    // Update support status with icons
    updateSupportStatus()
})

function createStatusIcon(isSupported: boolean): SVGSVGElement {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('class', 'status-icon')
    svg.setAttribute('fill', 'none')
    svg.setAttribute('viewBox', '0 0 24 24')
    svg.setAttribute('stroke-width', '2')
    svg.setAttribute('stroke', 'currentColor')

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    path.setAttribute('stroke-linecap', 'round')
    path.setAttribute('stroke-linejoin', 'round')

    if (isSupported) {
        path.setAttribute(
            'd',
            'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        )
    } else {
        path.setAttribute(
            'd',
            'M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        )
    }

    svg.appendChild(path)
    return svg
}

function updateSupportStatus(): void {
    const supported = document.getElementById('supported')
    if (!supported) return

    // Clear existing content
    supported.textContent = ''

    const isSupported = typeof navigator.share === 'function'

    // Create icon
    const icon = createStatusIcon(isSupported)
    supported.appendChild(icon)

    // Create text span
    const textSpan = document.createElement('span')

    if (isSupported) {
        console.log(
            'The Web Share API is supported. Set the message for the demo page.'
        )
        supported.classList.add('supported')
        textSpan.textContent =
            'The Web Share API is supported in your browser. You should see all of the share button examples.'
    } else {
        console.log(
            'The Web Share API is not supported. Set the message for the demo page.'
        )
        supported.classList.add('not-supported')
        textSpan.textContent =
            'Unfortunately, the Web Share API is not supported in your browser. You will only see the share button examples that have the debug attribute set to 1.'
    }

    supported.appendChild(textSpan)
}
