# cypress-automation-test

This project contains the "Automation Exercise" page automation code. Automates an e-commerce checkout flow using Cypress. It is designed to be adaptable to multiple viewports (web, mobile and desktop)

## General Requirements

### Prerequisites

- Node.js (version 14 or higher)
- Yarn (optional but recommended for faster package management)
- Git (to clone the repository)

### Installation

1. **Clone the repository:**
For both Windows and macOS:

```bash
git clone <repository-url> (this can also be done directly from GitHub)
cd repository-name
```

2. **Install dependencies:**
```bash
npm install
```

if using yarn:
```bash
yarn install
```

3. **Installing Cypress and other dependencies:**
```bash
yarn add cypress @faker-js/faker eslint mochawesome --save-dev
```

### Running Cypress

**UI Mode**
```
npx cypress open
```

**Terminal or headless mode**
```
npm run test
```

### Running ESLint
Before doing a commit is recommended to use ESLint to fix any typos

```
npm run lint-fix
```

### Running mochawesome
The reports are generated automatically when the tests are ran headless. Reports can be found in the cypress/reports folder