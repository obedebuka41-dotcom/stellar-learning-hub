# GrantFox Bounty Issue Drafts

These are draft issues for preparing Stellar Learning Hub for GrantFox-style contributor work. Before publishing on GrantFox, each section should be converted into a real GitHub issue with a final bounty amount, assignee process, and review expectations.

## Issue 1: Build Interactive Stellar Transaction Playground

**Labels:** `bounty`, `help wanted`, `good first issue`, `frontend`

### Goal

Create an interactive playground where learners can experiment with Stellar transaction examples in the browser.

### Background

New Stellar developers often understand concepts faster when they can edit example code and see transaction output immediately. This feature should provide a safe learning environment without requiring a live wallet connection.

### Requirements

- Add a reusable React playground component.
- Provide an editable code area using Monaco or a simple textarea.
- Include at least one preloaded Stellar transaction example.
- Show a transaction preview or structured output panel.
- Display friendly validation or runtime errors.
- Keep the UI responsive on mobile and desktop.

### Acceptance Criteria

- A learner can edit a sample Stellar transaction example.
- A learner can run or simulate the example from the UI.
- Output appears in a clear result panel.
- Errors are readable and do not crash the page.
- The app builds successfully.

### Suggested Files

- `src/components/CodePlayground.tsx`
- `src/app/playground/page.tsx`
- `src/lib/stellar/examples.ts`

### Difficulty

Beginner to intermediate.

### Bounty

To be decided.

---

## Issue 2: Create Stellar Wallet Integration Tutorial And Demo

**Labels:** `bounty`, `help wanted`, `intermediate`, `wallets`

### Goal

Create a step-by-step wallet integration tutorial for Stellar dApps using Freighter, Albedo, and xBull.

### Background

Wallet connection is one of the first real integration steps for a Stellar frontend developer. This tutorial should explain the flow clearly and provide working example code.

### Requirements

- Add a tutorial page for Stellar wallet integration.
- Include examples for Freighter, Albedo, and xBull.
- Add a small interactive demo area.
- Include network selection for testnet and mainnet.
- Show common error handling patterns.
- Include signing and verification examples where practical.

### Acceptance Criteria

- The page explains wallet detection, connection, signing, and errors.
- Code snippets are readable and formatted.
- Demo UI handles missing wallet/provider states.
- Network state is visible to the learner.
- The app builds successfully.

### Suggested Files

- `src/app/tutorials/wallet-integration/page.tsx`
- `src/components/WalletDemo.tsx`
- `src/lib/wallets.ts`

### Difficulty

Intermediate.

### Bounty

To be decided.

---

## Issue 3: Add Soroban Smart Contract Example Collection

**Labels:** `bounty`, `help wanted`, `advanced`, `soroban`

### Goal

Develop a set of Soroban smart contract examples with explanations, tests, and TypeScript client usage.

### Background

Developers need practical contract examples that show common patterns beyond simple hello-world contracts.

### Requirements

- Add at least three Soroban contract examples.
- Include Rust contract code.
- Include tests or test instructions for each contract.
- Add TypeScript client usage examples.
- Include deployment notes for Stellar testnet.
- Add security and design notes for each pattern.

### Example Contract Ideas

- Escrow contract
- Marketplace listing contract
- Voting token or poll contract
- Payment splitter
- Simple loyalty points contract

### Acceptance Criteria

- Each example has a clear explanation and file structure.
- Each example includes expected behavior and usage notes.
- TypeScript client examples show how a frontend would call the contract.
- Security notes explain limitations or risks.
- The app builds successfully.

### Suggested Files

- `examples/soroban/`
- `src/app/tutorials/soroban-examples/page.tsx`
- `src/content/soroban/`

### Difficulty

Advanced.

### Bounty

To be decided.

---

## Issue 4: Implement Quiz System For Learning Modules

**Labels:** `bounty`, `help wanted`, `frontend`, `learning`

### Goal

Add a quiz system that helps learners test their understanding after each module.

### Background

Quizzes make the hub feel more like a learning product instead of a static documentation site.

### Requirements

- Support multiple-choice questions.
- Support immediate feedback after answering.
- Track quiz progress in `localStorage`.
- Calculate and display score.
- Add a review state after quiz completion.
- Store quiz questions in a reusable data format.

### Acceptance Criteria

- A learner can answer questions and see whether answers are correct.
- Progress persists after page refresh.
- Scores are calculated correctly.
- Quiz data can be reused across modules.
- The app builds successfully.

### Suggested Files

- `src/components/Quiz.tsx`
- `src/lib/quiz.ts`
- `src/content/quizzes/stellar-basics.ts`

### Difficulty

Beginner to intermediate.

### Bounty

To be decided.
