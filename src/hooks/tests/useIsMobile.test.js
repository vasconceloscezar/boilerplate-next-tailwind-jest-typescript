import { renderHook, act } from '@testing-library/react-hooks'
import useIsMobile from '../useIsMobile'

// Helper function to trigger the window resize event
function fireResizeEvent(width) {
  global.innerWidth = width
  global.dispatchEvent(new Event('resize'))
}

describe('useIsMobile', () => {
  afterEach(() => {
    // Clean up any listeners that might be left from the tests
    global.removeEventListener('resize', fireResizeEvent)
  })

  it('should return true when window width is less than the given breakpoint', () => {
    global.innerWidth = 400 // Set the window width to a value less than 600
    const { result } = renderHook(() => useIsMobile(600))

    expect(result.current).toBe(true)
  })

  it('should return false when window width is greater than or equal to the given breakpoint', () => {
    global.innerWidth = 800 // Set the window width to a value greater than or equal to 600
    const { result } = renderHook(() => useIsMobile(600))

    expect(result.current).toBe(false)
  })

  it('should update the value when window width changes', () => {
    global.innerWidth = 400 // Set the window width to a value less than 600
    const { result } = renderHook(() => useIsMobile(600))

    act(() => {
      fireResizeEvent(800) // Trigger a window resize event with a width greater than or equal to 600
    })

    expect(result.current).toBe(false)
  })
})
