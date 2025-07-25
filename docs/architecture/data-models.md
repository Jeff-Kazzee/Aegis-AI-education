# Data Models

Lesson: Represents a single educational lesson within a course module. The data is sourced directly from a local Markdown (.md) file.

slug: string - The URL-friendly identifier from the filename.

title: string - The lesson's title from the Markdown frontmatter.

order: number - A numeric value from the frontmatter for sequencing.

content: string - The main body of the lesson, parsed from Markdown into HTML.

excerpt: string - An optional summary from the frontmatter.

SubstackPost: Represents a single article fetched from the Substack publication's RSS feed.

title: string - The title of the post.

link: string - The direct URL to the full post on Substack.

pubDate: string - The publication date.

summary: string - A short summary of the post.

author: string - The author of the post.