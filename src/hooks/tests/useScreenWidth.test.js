import { renderHook, act } from '@testing-library/react-hooks'
import useScreenWidth from '../useScreenWidth'

describe('useScreenWidth', () => {
  // Utility function to trigger a window resize event
  const fireResizeEvent = (width) => {
    global.innerWidth = width
    global.dispatchEvent(new Event('resize'))
  }

  afterEach(() => {
    global.innerWidth = 1024 // Reset window width to a default value after each test
  })

  it('should return the initial window width', () => {
    const { result } = renderHook(() => useScreenWidth())

    expect(result.current).toBe(1024)
  })

  it('should update the screenWidth when window width changes', () => {
    const { result } = renderHook(() => useScreenWidth())

    act(() => {
      fireResizeEvent(800)
    })

    expect(result.current).toBe(800)
  })

  it('should remove the event listener when unmounted', () => {
    const { unmount } = renderHook(() => useScreenWidth())

    const originalRemoveEventListener = window.removeEventListener
    const removeEventListenerSpy = jest.fn()
    window.removeEventListener = removeEventListenerSpy

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalled()
    window.removeEventListener = originalRemoveEventListener
  })
})
