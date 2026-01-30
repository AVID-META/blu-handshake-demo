# blu-handshake-demo

This repository is a runnable demo of the Blu Platform AccessGate handshake flow:

- A small Vercel serverless API that exposes a handshake API (init, status, verify).
- A Vite + React + TypeScript client that renders the AccessGate UI (liquid-progress button, logs, map).

This demo is intentionally small and focused to demonstrate integration, not production hardened.

Quickstart (local)

1. Clone the repo and install dependencies for both client and run Vercel dev:
   - npm install
   - cd client && npm install
2. Local dev:
   - For the client: cd client && npm run dev
   - For API serverless emulation: install Vercel CLI and run `vercel dev` at repo root

Deployment (Vercel)

- Import the repository into Vercel. The project uses vercel.json to build the API functions and client static site.
- Set environment variables in Vercel project settings (see .env.example in repo).

Security notes

- Replace in-memory store with Redis for production.
- Use a KMS or secret manager for private keys. Do not commit PEMs to the repo.
- Use RSASSA-PSS + SHA-512 for signature verification and implement nonce + timestamp checks.
