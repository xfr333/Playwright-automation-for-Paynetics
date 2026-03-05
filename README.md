
# Paynetics Website Automation

Automated test suite for https://www.paynetics.digital built with Playwright and TypeScript.

## Tests

- **Test1 (UI):** Navigate to Fintechs page via main menu
- **Test2 (API):** Validate cookiebot configuration

## Project Structure

- **TestPlan.txt           - Short test plan, because we talk about it in the interview;
- tests/
- pages/
  -    HomePage.ts        - POM class for the main page navigation;
  -    FintechsPage.ts    - POM class for the Fintechs page and Cookiebot interception;
 -   paynetics.spec.ts    - Main test file;

## Installation

- npm install
- npx playwright install

## Run Tests

- npx playwright test
- npx playwright test --headed
- npx playwright show-report
