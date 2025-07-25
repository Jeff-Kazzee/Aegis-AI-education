'use client'

import { useState, useEffect } from 'react'
import { SubstackPost, formatPostDate } from '@/lib/substack'

// Note: Metadata export needs to be in a separate server component for client components
// For now, we'll handle SEO via the layout or create a separate metadata file

export default function PostsPage() {
  const [posts, setPosts] = useState<SubstackPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch('/api/posts')
        
        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.status}`)
        }
        
        const data = await response.json()
        setPosts(data)
      } catch (err) {
        console.error('Error fetching posts:', err)
        setError('Unable to load posts. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading latest posts...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-sm rounded-lg px-8 py-12 text-center">
            <div className="text-red-600 mb-4">
              <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Unable to Load Posts</h1>
            <p className="text-gray-600 mb-6">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Posts
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay up to date with our latest insights on AI literacy, worker empowerment, 
            and practical technology education.
          </p>
        </div>

        {/* Posts List */}
        {posts.length === 0 ? (
          <div className="bg-white shadow-sm rounded-lg px-8 py-12 text-center">
            <p className="text-gray-600">No posts available at this time.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post, index) => (
              <article
                key={`${post.link}-${index}`}
                className="bg-white shadow-sm rounded-lg px-8 py-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex flex-col space-y-4">
                  {/* Post Header */}
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors duration-200"
                        aria-label={`Read "${post.title}" on Substack - opens in new tab`}
                      >
                        {post.title}
                      </a>
                    </h2>
                    
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <time dateTime={post.pubDate}>
                        {formatPostDate(post.pubDate)}
                      </time>
                      <span>•</span>
                      <span>By {post.author}</span>
                    </div>
                  </div>

                  {/* Post Summary */}
                  <p className="text-gray-700 text-base leading-relaxed">
                    {post.summary}
                  </p>

                  {/* Read More Link */}
                  <div>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                      aria-label={`Read full article "${post.title}" on Substack - opens in new tab`}
                    >
                      Read full article
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Footer Message */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">
            Want to stay updated? Subscribe to our{' '}
            <a
              href="https://jeffkazzee.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Substack newsletter
            </a>
            {' '}for the latest posts.
          </p>
        </div>
      </div>
    </div>
  )
}