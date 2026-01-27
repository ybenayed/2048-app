import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Tile from '~/app/components/game/Tile.vue'

describe('Tile.vue', () => {
  it('should render a tile with value 2 and have orange background', () => {
    const wrapper = mount(Tile, {
      props: {
        value: 2
      }
    })

    const tile = wrapper.find('.tile')
    
    expect(tile.exists()).toBe(true)
    expect(wrapper.text()).toContain('2')
    expect(tile.classes()).toContain('bg-amber-100')
  })

  it('should render a tile with value 0 and no text', () => {
    const wrapper = mount(Tile, {
      props: {
        value: 0
      }
    })

    const tile = wrapper.find('.tile')
    
    expect(tile.exists()).toBe(true)
    expect(wrapper.text()).toBe('')
    expect(tile.classes()).toContain('bg-gray-300')
  })

  it('should render a tile with value 8 and have orange-300 background', () => {
    const wrapper = mount(Tile, {
      props: {
        value: 8
      }
    })

    const tile = wrapper.find('.tile')
    
    expect(tile.exists()).toBe(true)
    expect(wrapper.text()).toContain('8')
    expect(tile.classes()).toContain('bg-orange-300')
  })

  it('should render a tile with value 2048 and have yellow-500 background', () => {
    const wrapper = mount(Tile, {
      props: {
        value: 2048
      }
    })

    const tile = wrapper.find('.tile')
    
    expect(tile.exists()).toBe(true)
    expect(wrapper.text()).toContain('2048')
    expect(tile.classes()).toContain('bg-yellow-500')
  })
})
