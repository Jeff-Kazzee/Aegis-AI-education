import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Site Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Project Aegis
            </h3>
            <p className="text-gray-600 text-sm mb-4 max-w-md">
              Empowering the working class with critical, model-agnostic AI literacy. 
              Building understanding and resilience in the age of artificial intelligence.
            </p>
            <p className="text-gray-500 text-sm">
              © {currentYear} Project Aegis. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
              Quick Links
            </h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/course"
                    className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                  >
                    Educational Modules
                  </Link>
                </li>
                <li>
                  <a 
                    href="/posts"
                    className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                  >
                    Latest Posts
                  </a>
                </li>
                <li>
                  <a 
                    href="/support"
                    className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                  >
                    Support Our Mission
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:jeffkazzee@gmail.com"
                    className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-gray-500 mb-2 sm:mb-0">
              Built with dedication to worker empowerment and AI literacy.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-xs text-gray-500">
                Made with Next.js & TypeScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}