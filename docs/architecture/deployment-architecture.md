# Deployment Architecture

## CI/CD Pipeline

The pipeline is fully automated as per the PRD.

Continuous Integration (CI): On every push, GitHub Actions runs npm run test to validate code quality.

Continuous Deployment (CD): Merges to the main branch are automatically built and deployed to production by Vercel. Pushes to other branches create unique Preview Deployments.