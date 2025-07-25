import type { Metadata } from 'next'
import Link from 'next/link'
import { getLessonsOverview } from '@/lib/lessons'

export const metadata: Metadata = {
  title: 'AI Reality Check Course - Project Aegis',
  description: 'Learn critical AI literacy from a worker perspective. Cut through the hype and understand how AI really affects working people.',
}

export default async function CoursePage() {
  const lessons = await getLessonsOverview()

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Course Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            AI Reality Check for Working People
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Cut through the AI hype and understand how artificial intelligence really affects 
              your work and life. This course provides critical AI literacy from a worker&apos;s perspective—
              no corporate marketing, just facts you can use.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-blue-900 mb-2">What You&apos;ll Learn</h2>
              <ul className="text-blue-800 text-left space-y-2">
                <li>• How to separate AI marketing hype from reality</li>
                <li>• What AI actually is (and isn&apos;t) in plain language</li>
                <li>• Evidence-based analysis of AI&apos;s impact on jobs</li>
                <li>• How to protect your privacy from AI surveillance</li>
                <li>• Which AI tools actually help workers vs. waste time</li>
                <li>• How to organize collectively around workplace AI issues</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Course Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{lessons.length}</div>
            <div className="text-gray-600">Lessons</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">Self-Paced</div>
            <div className="text-gray-600">Learning</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">Free</div>
            <div className="text-gray-600">Access</div>
          </div>
        </div>

        {/* Lessons List */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-8 py-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900">Course Lessons</h2>
            <p className="text-gray-600 mt-2">
              Work through the lessons in order, or jump to topics that interest you most.
            </p>
          </div>

          {lessons.length === 0 ? (
            <div className="px-8 py-12 text-center">
              <p className="text-gray-600">Lessons are being prepared. Check back soon!</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {lessons.map((lesson) => (
                <article key={lesson.slug} className="px-8 py-6 hover:bg-gray-50 transition-colors duration-200">
                  <Link 
                    href={`/course/${lesson.slug}`}
                    className="block group"
                  >
                    <div className="flex items-start space-x-4">
                      {/* Lesson Number */}
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-semibold text-sm">
                            {String(lesson.order).padStart(2, '0')}
                          </span>
                        </div>
                      </div>

                      {/* Lesson Content */}
                      <div className="flex-grow min-w-0">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                          {lesson.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-3">
                          {lesson.excerpt}
                        </p>
                        <div className="flex items-center text-sm text-blue-600">
                          <span className="group-hover:underline">Start lesson</span>
                          <svg 
                            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Course Philosophy */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Anti-Hype</h3>
              <p>We cut through marketing claims and tech industry propaganda to give you facts you can verify and use.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Pro-Labor</h3>
              <p>Our perspective centers working people&apos;s interests, not corporate profits or Silicon Valley narratives.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Evidence-Based</h3>
              <p>Every claim is backed by research, real examples, and data you can check for yourself.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Practical</h3>
              <p>Focus on knowledge you can immediately apply to your work and life, not abstract concepts.</p>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="mt-12 text-center">
          {lessons.length > 0 && (
            <div className="space-y-4">
              <p className="text-gray-600">Ready to cut through the AI hype?</p>
              <Link
                href={`/course/${lessons[0].slug}`}
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Start with Lesson 1
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}