# API Specification

The MVP's internal API surface is minimal, designed to abstract the external Substack service. The following OpenAPI 3.0 specification defines our single internal endpoint.

```yaml
openapi: 3.0.0
info:
  title: Project Aegis Internal API
  version: 1.0.0
  description: Internal API for Project Aegis, used to fetch dynamic content and abstract external services.
servers:
  - url: /api
    description: Internal API routes hosted within the Next.js application
paths:
  /posts:
    get:
      summary: Retrieves the latest posts from the integrated Substack feed.
      description: This endpoint fetches the Substack RSS feed, parses it, and returns a list of recent posts. It includes a server-side cache to minimize redundant calls to the Substack server.
      responses:
        '200':
          description: A successful response containing an array of Substack posts.
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/SubstackPost'
        '500':
          description: Internal Server Error. Occurs if the server fails to fetch or parse the Substack feed.
components:
  schemas:
    SubstackPost:
      type: object
      properties:
        title:
          type: string
        link:
          type: string
        pubDate:
          type: string
        summary:
          type: string
        author:
          type: string
```