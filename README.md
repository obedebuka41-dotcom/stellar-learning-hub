# Stellar Learning Hub

Stellar Learning Hub is an open-source learning platform for developers who want to build on the Stellar network. The goal is to combine clear lessons, interactive examples, wallet integration guides, and Soroban smart contract projects into one practical developer education hub.

This project is being prepared for contributor-led development through GitHub issues and GrantFox-style bounties.

## What This Project Is For

Stellar has strong tools for payments, assets, wallets, and smart contracts, but new developers still need guided examples that show how the pieces fit together. Stellar Learning Hub is meant to help developers move from basic concepts to working applications.

The hub will focus on:

- Stellar fundamentals: accounts, assets, transactions, fees, and the Horizon API
- Wallet integration: Freighter, Albedo, xBull, signing flows, and network switching
- Soroban smart contracts: Rust examples, tests, deployments, and TypeScript clients
- Real application patterns: payments, escrow, marketplaces, voting, and cross-border flows
- Interactive learning: code playgrounds, quizzes, progress tracking, and example projects

## Current Status

This repository is in an early setup stage. The initial Next.js app and project direction are in place, but the main learning modules and interactive features still need to be built.

The current priority is to make the project easy for contributors to understand, run, and improve through focused GitHub issues.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the app.

## Planned Learning Areas

### Stellar Basics

- Understanding XLM and Lumens
- Creating and funding testnet accounts
- Building and submitting transactions
- Reading network data with Horizon

### Wallet Integration

- Detecting installed wallets
- Connecting to Freighter, Albedo, and xBull
- Signing and verifying transactions
- Handling network changes and common wallet errors

### Soroban Smart Contracts

- Writing Rust contracts
- Testing contract behavior
- Deploying to Stellar testnet
- Calling contracts from a TypeScript frontend

### Interactive Modules

- Browser-based Stellar transaction playground
- Quizzes after learning modules
- Code examples with expected output
- Progress tracking for learners

## Contributor Roadmap

Initial contribution areas are described in [BOUNTY_ISSUES.md](./BOUNTY_ISSUES.md). These should eventually become individual GitHub issues before the project is listed publicly for contributors.

Recommended first issues:

- Build the course/module data structure
- Create a lesson page layout
- Add the interactive transaction playground
- Add wallet integration examples
- Add quiz and progress tracking support
- Add Soroban contract examples

## Contributing

Contributions are welcome once issues are opened. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before working on the project.

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE).
