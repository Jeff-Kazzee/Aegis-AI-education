/**
 * Basic utility test to verify Jest configuration
 */

describe('Sample Utility Tests', () => {
  it('should perform basic arithmetic correctly', () => {
    expect(2 + 2).toBe(4)
    expect(5 * 3).toBe(15)
    expect(10 / 2).toBe(5)
  })

  it('should handle string operations', () => {
    const projectName = 'Project Aegis'
    expect(projectName.toLowerCase()).toBe('project aegis')
    expect(projectName.includes('Aegis')).toBe(true)
  })

  it('should work with arrays', () => {
    const features = ['education', 'community', 'pro-labor']
    expect(features).toHaveLength(3)
    expect(features).toContain('education')
    expect(features[0]).toBe('education')
  })

  it('should handle async operations', async () => {
    const promise = Promise.resolve('test complete')
    const result = await promise
    expect(result).toBe('test complete')
  })
})