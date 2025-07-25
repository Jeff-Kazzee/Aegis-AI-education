# Security and Performance

Security: The MVP is secure by design due to a minimal attack surface (no database, no auth). All traffic is served over HTTPS, and dependencies are monitored.

Performance: The goal of a 90+ Lighthouse score (NFR1) is achieved through Static Site Generation (SSG) for lessons, Incremental Static Regeneration (ISR) for posts, automatic image optimization, and deployment to a global CDN.