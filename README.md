
# Cypress Web Automation Setup for Acme HelpDesk

Cypress is a modern end-to-end testing framework built specifically for web applications. It offers fast, reliable, and easy-to-write tests that run directly in the browser. Cypress provides powerful features such as time travel debugging, automatic waiting, and real-time reloads.

Cypress is widely used in:  
- Automated UI and functional testing of web applications  
- Regression testing  
- Integration testing with CI/CD pipelines  

---

## Prerequisites

Before running the tests, make sure you have the following installed:  
- [Node.js](https://nodejs.org/) (v12 or higher)  
- [npm](https://www.npmjs.com/) (usually comes with Node.js)  
- A code editor (VS Code, Cursor, Sublime are recommended)  

---

## Installation

1. Clone this repository:  
```bash
git clone https://github.com/rifkykurniawan/AcmeHelpDesk-Cypress
cd AcmeHelpDesk-Cypress
```

2. Install the dependencies:  
```bash
npm install
```

3. Install Cypress:  
```bash
npm install cypress --save-dev
```

---

## Project Structure

```
cypress-react-admin-helpdesk/
├── cypress/
│   ├── e2e/             # Test spec files (test cases)
│   ├── fixtures/        # Sample test data (JSON files)
│   ├── support/         # Custom commands and reusable logic
├── cypress.config.js    # Cypress configuration file
├── package.json
```

---

## Running Tests

You can run Cypress tests in different ways:

### Open Cypress Test Runner (Interactive Mode)

```bash
npx cypress open
```

This opens a UI where you can select and run tests interactively in a real browser.

### Run Tests Headlessly (CLI Mode)

```bash
npx cypress run
```

This runs all tests in headless mode, useful for CI pipelines.

### Run Specific Test File

```bash
npx cypress run --spec "cypress/e2e/tickets.cy.js"
```

---

## Adding Scripts to package.json

Add these scripts to your `package.json` for easier commands:

```json
"scripts": {
  "cypress:open": "cypress open",
  "cypress:run": "cypress run"
}
```

Run them with:

```bash
npm run cypress:open
npm run cypress:run
```

---

## Contributing

1. Fork the repository  
2. Create a feature branch  
3. Commit your changes  
4. Push to your branch  
5. Create a Pull Request  

---

Feel free to customize the tests and folder structure as you grow your test suite!

---

If you want me to generate more example tests or help with advanced Cypress features, just ask!
