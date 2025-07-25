# Components

WebApp (Next.js): The core, user-facing application that handles page routing and renders UI components.

Content Service (Local): A logical service responsible for reading and parsing lesson data from local Markdown files.

Substack Integration Service (Serverless Function): Encapsulates all logic for fetching and parsing the Substack RSS feed, exposing it via GET /api/posts.

## Component Diagram

```
graph TD
    User -- "Requests Pages" --> WebApp
    WebApp -- "Needs Lesson Data" --> ContentService
    ContentService -- "Provides Lesson Objects" --> WebApp
    WebApp -- "Needs Post Data" --> SubstackIntegrationService
    SubstackIntegrationService -- "Provides Post Objects" --> WebApp
    SubstackIntegrationService -- "Fetches RSS Feed" --> Substack_External[Substack RSS Feed]
```