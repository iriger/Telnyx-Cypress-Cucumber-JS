# Telnyx.com Automated Testing Suite

## Summary

This repository contains an automated testing framework for telnyx.com using Cypress, Page Object Model (POM), Cucumber, and JavaScript. The framework allows for efficient end-to-end testing of the Telnyx website with BDD-style test scenarios that are both readable and maintainable.

## Requirements

- Node.js (v16.0.0 or higher)
- npm (v7.0.0 or higher)
- Git

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/telnyx-cypress-tests.git
   cd telnyx-cypress-tests
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Running Tests

To run all tests in headless mode:
```bash
npm test
```

To open Cypress Test Runner:
```bash
npm run cypress:open
```

## Writing Tests

### Feature Files

Feature files describe test scenarios in Gherkin syntax and are located in `cypress/e2e/features/`.

### Page Objects

Page Object Models are located in `cypress/pages/` and represent website pages with their elements and methods.
