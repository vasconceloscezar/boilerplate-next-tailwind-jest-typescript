import { renderHook } from '@testing-library/react-hooks'
import { useFetch } from '../useFetch'

describe('useFetch', () => {
  it('should return the expected data and loading status', async () => {
    const mockData = { id: 1, name: 'Test' }
    const mockUrl = 'https://example.com/data'
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    })
    const { result, waitForNextUpdate } = renderHook(() => useFetch(mockUrl))
    expect(result.current.loading).toBe(true)
    await waitForNextUpdate()
    expect(result.current.data).toEqual(mockData)
    expect(result.current.loading).toBe(false)
  })
  it('should return the expected error when the fetch fails', async () => {
    const mockError = new Error('Failed to fetch')
    const mockUrl = 'https://example.com/data'
    global.fetch = jest.fn().mockRejectedValue(mockError)
    const { result, waitForNextUpdate } = renderHook(() => useFetch(mockUrl))
    expect(result.current.loading).toBe(true)
    await waitForNextUpdate()
    expect(result.current.error).toEqual(mockError)
    expect(result.current.loading).toBe(false)
  })
})
