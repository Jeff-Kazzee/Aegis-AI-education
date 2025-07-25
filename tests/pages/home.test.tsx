import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    
    const heading = screen.getByRole('heading', {
      name: /project aegis/i,
      level: 1,
    })
    
    expect(heading).toBeInTheDocument()
  })

  it('displays the mission statement', () => {
    render(<Home />)
    
    const missionText = screen.getByText(/empowering the working class/i)
    expect(missionText).toBeInTheDocument()
  })

  it('has navigation links to course and posts', () => {
    render(<Home />)
    
    const courseLink = screen.getByRole('link', { name: /start learning/i })
    const postsLink = screen.getByRole('link', { name: /read posts/i })
    
    expect(courseLink).toHaveAttribute('href', '/course')
    expect(postsLink).toHaveAttribute('href', '/posts')
  })

  it('displays the welcome message', () => {
    render(<Home />)
    
    const welcomeMessage = screen.getByText(/welcome to project aegis/i)
    expect(welcomeMessage).toBeInTheDocument()
  })
})