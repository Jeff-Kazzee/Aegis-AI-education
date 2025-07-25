import Parser from 'rss-parser'

export interface SubstackPost {
  title: string
  link: string
  pubDate: string
  summary: string
  author: string
}

const parser = new Parser()

// Cache configuration
const CACHE_DURATION = 30 * 60 * 1000 // 30 minutes in milliseconds
let cachedPosts: SubstackPost[] | null = null
let cacheTimestamp: number | null = null

export async function fetchSubstackPosts(): Promise<SubstackPost[]> {
  // Check if we have valid cached data
  if (
    cachedPosts && 
    cacheTimestamp && 
    Date.now() - cacheTimestamp < CACHE_DURATION
  ) {
    return cachedPosts
  }

  try {
    // Replace with actual Substack RSS URL when available
    const RSS_URL = 'https://projectaegis.substack.com/feed'
    
    const feed = await parser.parseURL(RSS_URL)
    
    const posts: SubstackPost[] = feed.items?.map(item => ({
      title: item.title || 'Untitled Post',
      link: item.link || '',
      pubDate: item.pubDate || item.isoDate || '',
      summary: extractSummary(item.contentSnippet || item.content || ''),
      author: item.creator || feed.title || 'Project Aegis'
    })) || []

    // Update cache
    cachedPosts = posts
    cacheTimestamp = Date.now()

    return posts
  } catch (error) {
    console.error('Error fetching Substack posts:', error)
    
    // Return cached data if available, otherwise return mock data
    if (cachedPosts) {
      return cachedPosts
    }
    
    // Return mock data for development/testing
    return getMockPosts()
  }
}

function extractSummary(content: string): string {
  // Remove HTML tags and extract first 150 characters
  const plainText = content.replace(/<[^>]*>/g, '')
  const summary = plainText.trim().substring(0, 150)
  return summary.length < plainText.length ? `${summary}...` : summary
}

function getMockPosts(): SubstackPost[] {
  return [
    {
      title: 'Welcome to Project Aegis: AI Literacy for Workers',
      link: 'https://projectaegis.substack.com/p/welcome',
      pubDate: new Date().toISOString(),
      summary: 'Introducing Project Aegis, a new platform dedicated to empowering workers with critical AI literacy skills...',
      author: 'Project Aegis'
    },
    {
      title: 'Understanding AI Hype vs Reality',
      link: 'https://projectaegis.substack.com/p/ai-hype-vs-reality',
      pubDate: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      summary: 'Separating fact from fiction in the AI revolution. What workers really need to know about artificial intelligence...',
      author: 'Project Aegis'
    },
    {
      title: 'Practical AI Tools for Small Business',
      link: 'https://projectaegis.substack.com/p/practical-ai-tools',
      pubDate: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
      summary: 'A comprehensive guide to AI tools that actually help small businesses and workers, without the marketing fluff...',
      author: 'Project Aegis'
    }
  ]
}

export function formatPostDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch (error) {
    return 'Date unavailable'
  }
}