# Tech Stack

This table outlines the specific technologies and pinned versions that are mandatory for all development work on Project 'Aegis'.

Category	Technology	Version	Purpose	Rationale
Language	TypeScript	5.4.x	Primary development language	Strong typing for maintainability and error prevention. First-class support in Next.js.
Framework	Next.js	14.2.x	Full-stack web framework	
Fulfills PRD requirements; enables Server-Side Rendering (SSR), Static Site Generation (SSG), and API routes in one package.

UI Library	React	18.x.x	Frontend component library	The foundation of Next.js; industry standard for building interactive UIs.
Styling	Tailwind CSS	3.4.x	Utility-first CSS framework	Enables rapid, consistent styling directly in markup, minimizing custom CSS and maximizing maintainability for a solo dev.
State Management	React Context + Hooks	18.x.x	Built-in state management	Adheres to the "minimal dependencies" rule. Sufficient for the MVP's needs without adding the complexity of a third-party library.
Content Parsing	gray-matter, remark	4.0.x, 15.0.x	Local Markdown processing	Standard, lightweight libraries for parsing Markdown files into HTML and extracting metadata (frontmatter). Required for FR1.
API Integration	rss-parser	3.13.x	Substack RSS Feed parsing	A simple and effective library for fetching and parsing the Substack RSS feed on the serverless function, fulfilling FR2.
Backend Testing	Jest	29.7.x	Unit testing framework	
Industry standard for testing JavaScript/TypeScript code, including the logic within our serverless API routes.
Frontend Testing	React Testing Library	15.0.x	Component testing utility	Encourages testing best practices by focusing on component behavior from a user's perspective. Integrates seamlessly with Jest.
CI/CD	GitHub Actions, Vercel	N/A	Automated testing & deployment	
As per the PRD, GitHub Actions will run tests on every push. Vercel automatically handles the deployment pipeline upon merge to the main branch.
Deployment	Vercel	N/A	Hosting and Serverless Platform	The chosen platform provides a seamless, zero-configuration deployment experience for Next.js, fulfilling NFR2.
Monitoring	Vercel Analytics	N/A	Performance & usage insights	A simple, privacy-focused, and built-in solution that requires no extra setup, perfect for a solo operator.