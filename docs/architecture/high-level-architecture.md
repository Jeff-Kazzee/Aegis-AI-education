# High Level Architecture

## Technical Summary

Project 'Aegis' will be implemented as a serverless, statically-oriented web application using the Next.js framework, deployed on the Vercel platform. The architecture prioritizes performance, security, and extremely low operational overhead, making it ideal for a solo operator. Core educational content will be sourced from local Markdown files, enabling simple, git-based content management. Dynamic content, such as the latest posts, will be fetched from Substack's RSS feed via a serverless function, decoupling our platform from theirs. This approach directly supports the PRD goals of creating a trusted, hype-free, and financially self-sufficient educational resource.

## Platform and Infrastructure Choice

Platform: Vercel is the chosen platform.

Key Services: We will leverage Vercel's native features, including:

Serverless Functions: For all backend logic, such as fetching the Substack feed.

Global CDN: For optimal performance and delivery of content worldwide.

CI/CD: Automated builds, testing, and deployments via GitHub integration.

Deployment Host and Regions: Vercel's global edge network will be used, with no specific region configuration required, simplifying management.

## Repository Structure

Structure: A Monorepo structure will be used, as specified in the PRD's technical assumptions. This keeps all project code (frontend, serverless functions, content) in a single, manageable repository.

## High Level Architecture Diagram

```
graph TD
    subgraph User's Device
        A[Browser]
    end

    subgraph Vercel Platform
        B(Next.js Application)
        C(Serverless Function <br> /api/posts)
        D[Local Markdown Content <br> /course/**]
    end

    subgraph External Services
        E[Substack RSS Feed]
        F[Buy Me a Coffee]
    end

    A -- "Requests course page" --> B
    B -- "Reads from" --> D
    D -- "Renders as HTML" --> B
    B -- "Serves page" --> A

    A -- "Requests posts page" --> B
    B -- "Calls API route" --> C
    C -- "Fetches data from" --> E
    E -- "Returns RSS feed" --> C
    C -- "Returns data as JSON" --> B
    B -- "Serves page with posts" --> A

    A -- "Clicks 'Support Us'" --> F
```

## Architectural Patterns

Jamstack: The architecture is fundamentally Jamstack. We will serve a static, pre-rendered shell and client-side JavaScript that pulls in dynamic content from APIs. This pattern is key to achieving our high-performance goals (NFR1) and enhancing security by minimizing server-side processes.

Serverless: All backend logic is handled by on-demand, serverless functions. This directly fulfills the PRD's requirement (FR2, NFR2) for a "no traditional backend" architecture that is cost-effective and scales automatically.