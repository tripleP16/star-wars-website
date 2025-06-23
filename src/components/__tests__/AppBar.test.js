import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'
import { createVuetify } from 'vuetify'
import { VApp, VLayout, VMain } from 'vuetify/components'
import AppBar from '../AppBar.vue'

// Mock routes for testing
const routes = [
  {
    path: '/',
    name: 'Home',
    component: { template: '<div>Home</div>' }
  },
  {
    path: '/inhabitants',
    name: 'Inhabitants',
    component: { template: '<div>Inhabitants</div>' }
  },
  {
    path: '/planets',
    name: 'Planets',
    component: { template: '<div>Planets</div>' }
  }
]

// Create router instance for testing
const createTestRouter = () => {
  return createRouter({
    history: createWebHistory(),
    routes
  })
}

// Helper function to mount component with proper Vuetify layout context
const mountWithVuetifyLayout = (component, options = {}) => {
  const vuetify = createVuetify()
  const router = createTestRouter()
  
  // Create a wrapper component that provides the complete Vuetify layout context
  const TestWrapper = {
    template: `
      <v-app>
        <v-layout>
          <AppBar />
          <v-main></v-main>
        </v-layout>
      </v-app>
    `,
    components: {
      AppBar: component,
      VApp,
      VLayout,
      VMain
    }
  }
  
  return mount(TestWrapper, {
    global: {
      plugins: [vuetify, router],
      ...options.global
    },
    ...options
  })
}

describe('AppBar', () => {
  it('renders the app bar with correct title', () => {
    const wrapper = mountWithVuetifyLayout(AppBar)
    expect(wrapper.text()).toContain('Star Wars Explorer')
  })

  it('renders navigation buttons', () => {
    const wrapper = mountWithVuetifyLayout(AppBar)
    
    // Find buttons using component name
    const buttons = wrapper.findAllComponents({ name: 'VBtn' })
    expect(buttons.length).toBeGreaterThanOrEqual(2)
    
    // Check button text content
    const buttonTexts = buttons.map(btn => btn.text())
    expect(buttonTexts).toContain('People')
    expect(buttonTexts).toContain('Planets')
  })

  it('has correct navigation links', () => {
    const wrapper = mountWithVuetifyLayout(AppBar)
    
    const buttons = wrapper.findAllComponents({ name: 'VBtn' })
    const peopleButton = buttons.find(btn => btn.text() === 'People')
    const planetsButton = buttons.find(btn => btn.text() === 'Planets')

    expect(peopleButton?.props('to')).toBe('/inhabitants')
    expect(planetsButton?.props('to')).toBe('/planets')
  })

  it('has correct button variants', () => {
    const wrapper = mountWithVuetifyLayout(AppBar)
    
    const buttons = wrapper.findAllComponents({ name: 'VBtn' })
    
    buttons.forEach(button => {
      expect(button.props('variant')).toBe('text')
      expect(button.props('exact')).toBe(true)
    })
  })

  it('has correct app bar styling', () => {
    const wrapper = mountWithVuetifyLayout(AppBar)
    
    const appBar = wrapper.findComponent({ name: 'VAppBar' })
    expect(appBar.exists()).toBe(true)
    expect(appBar.props('flat')).toBe(true)
  })

  it('has correct container structure', () => {
    const wrapper = mountWithVuetifyLayout(AppBar)
    
    const container = wrapper.findComponent({ name: 'VContainer' })
    expect(container.exists()).toBe(true)
    expect(container.props('fluid')).toBe(true)
  })

  it('has correct title styling', () => {
    const wrapper = mountWithVuetifyLayout(AppBar)
    
    // Find the span with the title
    const titleSpan = wrapper.find('span')
    expect(titleSpan.exists()).toBe(true)
    expect(titleSpan.text()).toBe('Star Wars Explorer')
  })

  it('has correct button spacing', () => {
    const wrapper = mountWithVuetifyLayout(AppBar)
    
    // Check that buttons container exists
    const buttonContainer = wrapper.find('.gap')
    expect(buttonContainer.exists()).toBe(true)
  })

  it('renders without errors', () => {
    expect(() => {
      mountWithVuetifyLayout(AppBar)
    }).not.toThrow()
  })

  it('has correct component structure', () => {
    const wrapper = mountWithVuetifyLayout(AppBar)
    
    // Check that the main Vuetify components exist
    expect(wrapper.findComponent({ name: 'VAppBar' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'VContainer' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'VApp' }).exists()).toBe(true)
  })
})