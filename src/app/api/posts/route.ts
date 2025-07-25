import { NextResponse } from 'next/server'
import { fetchSubstackPosts } from '@/lib/substack'

export async function GET() {
  try {
    const posts = await fetchSubstackPosts()
    
    return NextResponse.json(posts, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        // Add CORS headers if needed
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })
  } catch (error) {
    console.error('API Error fetching posts:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch posts',
        message: 'Unable to retrieve Substack posts at this time. Please try again later.'
      },
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
}