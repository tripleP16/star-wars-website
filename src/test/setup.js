// src/test/setup.js
import { config } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Create a Vuetify instance for testing
const vuetify = createVuetify({
  components,
  directives,
})

// Configure Vue Test Utils to use Vuetify globally
config.global.plugins = [vuetify]

// Provide a global wrapper that includes v-app
config.global.renderStubDefaultSlot = true
config.global.stubs = {}

// Mock window.matchMedia (required for Vuetify)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
})

// Mock ResizeObserver (required for some Vuetify components)
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}