<<<<<<< Updated upstream
# PlaywrightAutomation
=======
# PlaywrightAutomation

## Section 1
playwright/test is a library that helps you write and run browser tests
- run `npx playwright test` or `npx playwright codegen <url>`, playwright will automatically creates a `tests`, `playwright-report`, and it can create example test files if you run npx playwright test in a new project 
Commands to run a test: 
- npx playwright test --headed
- npx playwright show-report

## Section 2
Test site: https://the-internet.herokuapp.com/login
- `npx playwright codegen https://the-internet.herokuapp.com/login`  launches Playwright's interactive code generation tool. It records your actions (clicks, typing, etc.). Playwright automatically generates test code (usually in JavaScript, TypeScript, Python, or C#) that you can use for automated browser testing
- hit record to track actions and the "eye-icon" for assertion. copy & paste into js file
- check out codegen_login.spec.js 
- run `npx playwright test --headed`

## Section 3
- //test('Name of Test', async ({page}) => {})
- 
- https://playwright.dev/docs/locators Locators in Playwright are expressions or methods used to find and interact with elements on a web page, such as buttons, input fields, or links. They help your tests identify exactly which element to click, type into, or check for visibility
- you can also use dev tool or ask your dev team to create a unique_id for elements
<<<<<<< Updated upstream
if you use an id, start with a # ie: `await page.locator('#someId').click;` 
>>>>>>> Stashed changes
=======
if you use an id, start with a # ie: `await page.locator('#someId').click;` 
>>>>>>> Stashed changes
