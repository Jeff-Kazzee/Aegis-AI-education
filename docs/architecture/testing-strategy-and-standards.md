# Testing Strategy and Standards

The strategy focuses on automated unit tests to ensure reliability without high overhead.

Frameworks: Jest and React Testing Library.

Scope: The primary focus is on unit testing React components and library functions. E2E tests are out of scope for the MVP to maintain simplicity (NFR2).

Continuous Testing: All tests are run automatically via GitHub Actions on every push, preventing regressions.