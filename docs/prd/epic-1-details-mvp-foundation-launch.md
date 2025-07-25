# Epic 1 Details: MVP Foundation & Launch

Expanded Goal: To establish the core technical foundation, deliver the first educational module, integrate the Substack and donation platforms, and launch the Minimum Viable Product. This epic will result in a live, functional website that fulfills all our MVP requirements.

User Stories:

Story 1.1: Project Initialization & CI/CD Pipeline

As the owner, I want a new Next.js project initialized in a GitHub repo and connected to Vercel, so that I have a functioning CI/CD pipeline for automated testing and deployment.

Acceptance Criteria:

A new Next.js project is created and pushed to a new GitHub repository.

The GitHub repository is connected to a new Vercel project.

A basic unit test is created and configured to run automatically via GitHub Actions on every push.

Pushing to the main branch successfully and automatically deploys the site to the Vercel production URL.

Story 1.2: Basic Site Layout & Navigation

As a user, I want a consistent header and footer on all pages with simple navigation, so that I can easily understand the site structure and find key content.

Acceptance Criteria:

A site-wide header component is created containing the site title/logo and navigation links ("Home," "Course," "Posts," "Support Us").

A site-wide footer component is created with basic information (e.g., copyright, links).

Both components are responsive and display cleanly on mobile and desktop screens.

Story 1.3: Donation Page

As a user, I want a clear "Support Us" page, so that I understand the project's mission and how to contribute financially.

Acceptance Criteria:

A new page is created at the /support route.

The page contains text explaining the project's mission and why donations are important.

A prominent button links directly to the specified Buy Me a Coffee page.

The donation link opens in a new browser tab.

Story 1.4: Substack Integration Page

As a user, I want to see the latest Substack posts on the website, so that I can access all the project's written content in one place.

Acceptance Criteria:

A new page is created at the /posts route.

The page dynamically fetches and displays a list of the most recent posts from the Substack publication.

Each item in the list shows the post's title, publication date, and a brief summary.

Clicking on any post links the user directly to the full article on Substack.

Story 1.5: Educational Module & Lesson Pages

As a user, I want to view the core educational module and its lessons in a clean, readable format, so that I can focus on learning the material.

Acceptance Criteria:

A main course page is created at the /course route that lists the lessons of the first module.

A reusable template is created for individual lesson pages.

Lesson content is sourced from local Markdown files for easy editing.

Simple "Previous" and "Next" navigation links are present on each lesson page.

The text is highly readable and accessible on both desktop and mobile.