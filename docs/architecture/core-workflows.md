# Core Workflows

## Workflow 1: User Views a Course Lesson

This workflow shows how static content is read and pre-rendered at build time for maximum performance.

```
sequenceDiagram
    participant User
    participant WebApp (Next.js)
    participant ContentService as Content Service (Local)

    User->>WebApp: Requests lesson page (e.g., /course/some-lesson)
    activate WebApp
    Note over WebApp,ContentService: This happens at build-time (SSG)
    WebApp->>ContentService: getLessonBySlug("some-lesson")
    activate ContentService
    ContentService-->>WebApp: Returns structured Lesson object
    deactivate ContentService
    WebApp-->>User: Serves pre-rendered HTML page
    deactivate WebApp
```

## Workflow 2: User Views the Substack Posts Page

This workflow details fetching dynamic content via our internal serverless API.

```
sequenceDiagram
    participant User
    participant WebApp (Next.js)
    participant SubstackIntegrationService as Substack Service (/api/posts)
    participant SubstackRSS as Substack RSS Feed (External)

    User->>WebApp: Requests /posts page
    activate WebApp
    WebApp->>SubstackIntegrationService: GET /api/posts
    activate SubstackIntegrationService
    SubstackIntegrationService->>SubstackRSS: Fetches RSS Feed
    activate SubstackRSS
    SubstackRSS-->>SubstackIntegrationService: Returns RSS/XML Data
    deactivate SubstackRSS
    SubstackIntegrationService-->>WebApp: Returns parsed posts as JSON
    deactivate SubstackIntegrationService
    WebApp-->>User: Serves page with list of posts
    deactivate WebApp
```