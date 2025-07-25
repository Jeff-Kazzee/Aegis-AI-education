/**
 * Basic test to verify Jest pipeline works
 * Simple Node.js tests without React dependencies
 */

describe('Project Aegis - Basic Tests', () => {
  it('should verify project constants', () => {
    const projectName = 'Project Aegis'
    expect(projectName).toBe('Project Aegis')
    expect(projectName.toLowerCase()).toContain('aegis')
  })

  it('should handle basic functionality', () => {
    function add(a, b) {
      return a + b
    }
    
    expect(add(2, 3)).toBe(5)
    expect(add(-1, 1)).toBe(0)
  })

  it('should work with async operations', async () => {
    const asyncFunction = () => Promise.resolve('CI/CD Pipeline Working')
    const result = await asyncFunction()
    expect(result).toBe('CI/CD Pipeline Working')
  })

  it('should verify Node.js environment', () => {
    expect(typeof process).toBe('object')
    expect(process.env.NODE_ENV).toBeDefined()
  })
})