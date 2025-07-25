Project "Aegis": Product Requirements Document (PRD)
Version: 1.0
Date: July 25, 2025
Author: John, Product Manager

1. Goals and Background Context
Goals:

To empower the working class with critical, model-agnostic AI literacy.

To provide a trusted, hype-free, and pro-labor alternative to mainstream AI education.

To foster a community of capable, future-ready workers and small business owners.

To build a financially self-sufficient platform that is sustainable for a single owner/operator.

Background Context:
The rapid advancement of AI presents a crisis for the working class, who face threats of job displacement and invasive algorithmic management. The current information ecosystem fails to address these threats, instead trapping users in algorithmic silos that profit from confirmation bias and hype. This project aims to fill the void left by this systemic failure by creating a trusted educational resource. It will provide the practical skills and critical thinking necessary for workers to navigate the AI transition with agency and power.

Change Log:
| Date | Version | Description | Author |
| :--- | :--- | :--- | :--- |
| 2025-07-25 | 1.0 | Initial PRD creation. | John, PM |

2. Requirements
Functional Requirements:

FR1: The platform must display educational content, organized as a series of posts or a course module.

FR2: The platform must display the latest posts from an integrated Substack publication.

FR3: The platform must provide a clear and accessible link or button for users to make a donation via Buy Me a Coffee.

Non-Functional Requirements:

NFR1: The platform must be highly performant, achieving a Google Lighthouse score of 90+ across performance, accessibility, and SEO.

NFR2: The platform must be easily maintainable by a single developer and built to leverage free or low-cost service tiers (Vercel, etc.) to minimize operational costs.

NFR3: The platform must be fully responsive, providing an excellent and accessible user experience on both desktop and mobile web browsers.

NFR4: The platform must be secure by default, utilizing modern best practices for web development and ensuring all integrations use secure HTTPS connections.

3. User Interface Design Goals
Overall UX Vision:
The user experience will prioritize clarity, accessibility, and trustworthiness. It should feel like a calm, educational, and supportive space, free of the distracting patterns and "dark UX" common on the web. The design will be simple, respectful of the user's time, and heavily focused on readability.

Key Interaction Paradigms:
The platform will be a content-consumption experience, similar to a well-designed blog or documentation site. Navigation will be simple and predictable. Any interactive elements will be used purposefully to enhance learning, not for novelty.

Core Screens and Views (for MVP):

Homepage

Core Educational Module Page (with posts/lessons)

Substack Posts Page

Donation Page

Accessibility:
The site will adhere to WCAG 2.1 AA standards to ensure it is usable by people with a wide range of disabilities.

Branding:
The branding will aim for a modern, clean, and professional aesthetic. The goal is to build trust and feel accessible, avoiding any overly activist styling that might dissuade a broader audience. The focus will be on a simple color palette and highly readable typography.

Target Device and Platforms:
The platform will be a responsive website, designed to work seamlessly on both desktop and mobile web browsers.

4. Technical Assumptions
Repository Structure: The project will be developed within a standard Monorepo.

Service Architecture: A serverless architecture will be used, leveraging Vercel Functions for any backend logic, which aligns with the MVP's "no traditional backend" requirement.

Testing Requirements: The project will include automated unit tests that run via GitHub Actions before any deployment to ensure code quality and prevent regressions.

Additional Technical Assumptions and Requests: The project will be built with Next.js and deployed on Vercel, adhering to a strict "minimal dependencies" philosophy to ensure long-term maintainability by a solo operator.

5. Epic List
Epic 1: MVP Foundation & Launch
Goal: To establish the core technical foundation, deliver the first educational module, integrate the Substack and donation platforms, and launch the Minimum Viable Product.

Epic 2: Community & Engagement Features
Goal: To build upon the successful MVP by adding user accounts and a community forum, transforming the platform from a content site into an interactive community hub.

6. Epic 1 Details: MVP Foundation & Launch
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

7. Epic 2 Details: Community & Engagement Features
Expanded Goal: To build upon the successful MVP by adding user accounts and a community forum, transforming the platform from a content site into an interactive community hub where users can track progress and support each other.

User Stories:

Story 2.1: User Registration

As a new visitor, I want to create a secure account using my email and a password, so that I can access members-only content and community features.

Acceptance Criteria:

A registration page is created with fields for email and password.

Upon successful submission, a new user account is created in the system.

The user is automatically logged in and redirected to their new profile page.

Clear error messages are shown for invalid email formats, weak passwords, or if the email is already in use.

Story 2.2: User Login & Logout

As a registered user, I want to log in and out of the platform, so that I can securely manage my session.

Acceptance Criteria:

A login page is created with fields for email and password.

Upon successful login, the user is redirected to their profile page.

A clear error message is shown for incorrect credentials.

When a user is logged in, the main navigation includes a link to their profile and a logout button.

Clicking logout ends the user's session and redirects them to the homepage.

Story 2.3: Basic User Profile Page

As a logged-in user, I want a basic profile page, so that I can confirm I am logged in and have a central place for my account.

Acceptance Criteria:

A new page is created at a /profile route that is only accessible to logged-in users.

The page displays the user's registered email address.

The page includes the logout button.

Any visitor who is not logged in is redirected to the login page when attempting to access this route.

Story 2.4: Community Platform Access Page

As a logged-in user, I want to access a private community space, so that I can connect with other users.

Acceptance Criteria:

A new "Community" page is created that is only accessible to logged-in users.

The page contains information about the community and its rules.

A prominent button or link provides the invitation to join the designated private community platform (such as a Slack, Discord, or private Subreddit).

Visitors who are not logged in are redirected to the login page when attempting to access this route.

8. Checklist Results Report
Executive Summary:
This PRD has undergone a thorough validation against the PM Checklist. The document is comprehensive, logically sequenced, and tightly aligned with the Project Brief and MVP goals. It is deemed complete, robust, and ready for the architectural phase.

Category Statuses:
| Category | Status | Critical Issues |
| :--- | :--- | :--- |
| 1. Problem Definition & Context | PASS | None |
| 2. MVP Scope Definition | PASS | None |
| 3. User Experience Requirements | PASS | None |
| 4. Functional Requirements | PASS | None |
| 5. Non-Functional Requirements | PASS | None |
| 6. Epic & Story Structure | PASS | None |
| 7. Technical Guidance | PASS | None |
| 8. Cross-Functional Requirements | PASS | None |
| 9. Clarity & Communication | PASS | None |

Final Decision: READY FOR ARCHITECT

9. Next Steps
Architect Prompt:
Winston (Architect),

Here is the finalized Product Requirements Document and the foundational Project Brief for this vital mission. Our goal is to build an educational platform that empowers the working class with a pro-labor, anti-hype perspective on AI.

Your task is to design a full-stack architecture based on the technical assumptions and requirements detailed herein (Next.js, Vercel, Serverless, Monorepo). The architecture you create must be manageable by a solo operator, prioritizing simplicity, security, and low operational overhead. We need a foundation that is not only technically excellent but also embodies our core principles of empowerment and long-term sustainability.