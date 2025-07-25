import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getLessonBySlug, getLessonNavigation, getAllLessonSlugs } from '@/lib/lessons'

interface LessonPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllLessonSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: LessonPageProps): Promise<Metadata> {
  const lesson = await getLessonBySlug(params.slug)
  
  if (!lesson) {
    return {
      title: 'Lesson Not Found - Project Aegis',
    }
  }

  return {
    title: `${lesson.title} - Project Aegis`,
    description: lesson.excerpt,
  }
}

export default async function LessonPage({ params }: LessonPageProps) {
  const lesson = await getLessonBySlug(params.slug)
  
  if (!lesson) {
    notFound()
  }

  const navigation = await getLessonNavigation(params.slug)

  return (
    <div className="min-h-screen bg-white">
      {/* Lesson Header */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link 
                  href="/course" 
                  className="hover:text-gray-700 transition-colors duration-200"
                >
                  Course
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900 font-medium">Lesson {lesson.order}</span>
              </li>
            </ol>
          </nav>

          {/* Lesson Title */}
          <div className="mb-4">
            <div className="flex items-center space-x-3 mb-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                Lesson {lesson.order}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              {lesson.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          <div 
            dangerouslySetInnerHTML={{ __html: lesson.content }}
            className="lesson-content"
          />
        </div>
      </article>

      {/* Lesson Navigation */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Previous Lesson */}
            <div className="w-full sm:w-auto">
              {navigation.previous ? (
                <Link
                  href={`/course/${navigation.previous.slug}`}
                  className="group flex items-center space-x-3 p-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 w-full sm:w-auto"
                >
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm text-gray-500">Previous</div>
                    <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200 truncate">
                      {navigation.previous.title}
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="p-4 rounded-lg border border-gray-200 bg-gray-50 w-full sm:w-auto opacity-50">
                  <div className="text-sm text-gray-500">No previous lesson</div>
                </div>
              )}
            </div>

            {/* Back to Course */}
            <div className="order-first sm:order-none">
              <Link
                href="/course"
                className="inline-flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span>All Lessons</span>
              </Link>
            </div>

            {/* Next Lesson */}
            <div className="w-full sm:w-auto">
              {navigation.next ? (
                <Link
                  href={`/course/${navigation.next.slug}`}
                  className="group flex items-center space-x-3 p-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 w-full sm:w-auto"
                >
                  <div className="min-w-0 flex-1 text-right sm:text-left">
                    <div className="text-sm text-gray-500">Next</div>
                    <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200 truncate">
                      {navigation.next.title}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ) : (
                <div className="p-4 rounded-lg border border-gray-200 bg-gray-50 w-full sm:w-auto opacity-50 text-right sm:text-left">
                  <div className="text-sm text-gray-500">No next lesson</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}