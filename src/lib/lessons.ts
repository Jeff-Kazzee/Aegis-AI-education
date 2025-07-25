import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

export interface Lesson {
  slug: string
  title: string
  order: number
  content: string
  excerpt: string
}

const lessonsDirectory = path.join(process.cwd(), 'content/lessons')

// Process markdown content to HTML
async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkHtml, { sanitize: false })
    .process(markdown)
  return result.toString()
}

// Get all lesson slugs for static generation
export function getAllLessonSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(lessonsDirectory)
    return fileNames
      .filter(name => name.endsWith('.md'))
      .map(name => name.replace(/\.md$/, ''))
  } catch (error) {
    console.error('Error reading lessons directory:', error)
    return []
  }
}

// Get lesson data by slug
export async function getLessonBySlug(slug: string): Promise<Lesson | null> {
  try {
    const fullPath = path.join(lessonsDirectory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Convert markdown content to HTML
    const htmlContent = await markdownToHtml(content)

    return {
      slug,
      title: data.title || 'Untitled Lesson',
      order: data.order || 0,
      content: htmlContent,
      excerpt: data.excerpt || ''
    }
  } catch (error) {
    console.error(`Error loading lesson ${slug}:`, error)
    return null
  }
}

// Get all lessons sorted by order
export async function getAllLessons(): Promise<Lesson[]> {
  try {
    const slugs = getAllLessonSlugs()
    const lessons: Lesson[] = []

    for (const slug of slugs) {
      const lesson = await getLessonBySlug(slug)
      if (lesson) {
        lessons.push(lesson)
      }
    }

    // Sort by order number
    return lessons.sort((a, b) => a.order - b.order)
  } catch (error) {
    console.error('Error loading all lessons:', error)
    return []
  }
}

// Get lesson navigation (previous/next)
export async function getLessonNavigation(currentSlug: string): Promise<{
  previous: Lesson | null
  next: Lesson | null
}> {
  try {
    const allLessons = await getAllLessons()
    const currentIndex = allLessons.findIndex(lesson => lesson.slug === currentSlug)

    if (currentIndex === -1) {
      return { previous: null, next: null }
    }

    return {
      previous: currentIndex > 0 ? allLessons[currentIndex - 1] : null,
      next: currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null
    }
  } catch (error) {
    console.error('Error getting lesson navigation:', error)
    return { previous: null, next: null }
  }
}

// Get lesson overview data for course page
export async function getLessonsOverview(): Promise<Array<{
  slug: string
  title: string
  order: number
  excerpt: string
}>> {
  try {
    const allLessons = await getAllLessons()
    return allLessons.map(lesson => ({
      slug: lesson.slug,
      title: lesson.title,
      order: lesson.order,
      excerpt: lesson.excerpt
    }))
  } catch (error) {
    console.error('Error getting lessons overview:', error)
    return []
  }
}

// Utility function to create URL-friendly slugs
export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}