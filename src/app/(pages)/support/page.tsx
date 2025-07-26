import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support Us - Project Aegis',
  description: 'Support Project Aegis in providing critical AI literacy education for workers and small business owners.',
}

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-sm rounded-lg px-8 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Support Project Aegis
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Help us build a trusted, hype-free AI education platform for the working class
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Mission
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Project Aegis exists to empower workers and small business owners with critical, 
                model-agnostic AI literacy. In a landscape filled with hype and corporate interests, 
                we provide trusted, practical education that puts working people first.
              </p>
              <p>
                Our goal is to foster a community of capable, future-ready workers who can navigate 
                the AI revolution with confidence and skill—not fear or blind acceptance.
              </p>
            </div>
          </div>

          {/* Why Support Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Why Your Support Matters
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Building a truly independent educational platform requires resources. Your support helps us:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Maintain ad-free, unbiased content that serves learners, not advertisers</li>
                <li>Keep the platform accessible and affordable for working-class users</li>
                <li>Develop comprehensive, practical AI literacy curricula</li>
                <li>Build and maintain the technology infrastructure needed for quality education</li>
                <li>Ensure long-term sustainability as a single owner/operator platform</li>
              </ul>
              <p>
                Every contribution, no matter the size, helps us stay independent and focused on 
                our mission of empowering workers with essential AI knowledge.
              </p>
            </div>
          </div>

          {/* Donation Button Section */}
          <div className="text-center">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Support Our Work
              </h3>
              <p className="text-gray-700 mb-6">
                Help keep Project Aegis independent and accessible to all workers
              </p>
              <a
                href="https://buymeacoffee.com/maydayjeffu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-200 shadow-lg hover:shadow-xl"
                aria-label="Support Project Aegis on Buy Me a Coffee - opens in new tab"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-.766-1.48l-.777-.4A7.26 7.26 0 0 0 12 2.832 7.26 7.26 0 0 0 5.459 3.869l-.777.4c-.378.317-.647.882-.766 1.48L3.784 6.415c-.25 1.25-.006 2.57.69 3.70l.928 1.509c.194.317.751.317.945 0l.928-1.509c.696-1.13.94-2.45.69-3.70z"/>
                  <path d="M6.212 11.071l-.928-1.509c-.696-1.13-.94-2.45-.69-3.70l.132-.666c.119-.598.388-1.163.766-1.48l.777-.4A7.26 7.26 0 0 1 12 2.832a7.26 7.26 0 0 1 6.541 1.037l.777.4c.378.317.647.882.766 1.48l.132.666c.25 1.25.006 2.57-.69 3.70l-.928 1.509c-.194.317-.751.317-.945 0z"/>
                </svg>
                Buy Me a Coffee
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 text-center border-t border-gray-200 pt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-700 mb-4">
              Have questions, suggestions, or want to collaborate? We&apos;d love to hear from you.
            </p>
            <a
              href="mailto:jeffkazzee@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              jeffkazzee@gmail.com
            </a>
          </div>

          {/* Footer Message */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              Thank you for supporting independent, worker-focused AI education.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}