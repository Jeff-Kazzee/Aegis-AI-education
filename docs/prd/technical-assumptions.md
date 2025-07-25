# Technical Assumptions

Repository Structure: The project will be developed within a standard Monorepo.

Service Architecture: A serverless architecture will be used, leveraging Vercel Functions for any backend logic, which aligns with the MVP's "no traditional backend" requirement.

Testing Requirements: The project will include automated unit tests that run via GitHub Actions before any deployment to ensure code quality and prevent regressions.

Additional Technical Assumptions and Requests: The project will be built with Next.js and deployed on Vercel, adhering to a strict "minimal dependencies" philosophy to ensure long-term maintainability by a solo operator.