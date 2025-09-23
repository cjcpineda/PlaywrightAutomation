# PlaywrightAutomation

## Section 1
Playwright intro + env setup
- playwright/test is a library that helps you write and run browser tests
- run `npx playwright test` or `npx playwright codegen <url>`, playwright automatically creates a `tests`, `playwright-report`, and it can create example test files if you run npx playwright test in a new project 
Commands to run a test: 
- npx playwright test --headed
- npx playwright show-report

## Section 2
Codegen with playwright
Test site: https://the-internet.herokuapp.com/login
- `npx playwright codegen https://the-internet.herokuapp.com/login`  launches Playwright's interactive code generation tool. It records your actions (clicks, typing, etc.). Playwright automatically generates test code (usually in JavaScript, TypeScript, Python, or C#) that you can use for automated browser testing
- hit record to track actions and the "eye-icon" for assertion. copy & paste into js file
- check out codegen_login.spec.js 
- run `npx playwright test --headed`
- playwright inspector

## Section 3
Understand codegen code
- //test('Name of Test', async ({page}) => {})
- https://playwright.dev/docs/locators Locators in Playwright are expressions or methods used to find and interact with elements on a web page, such as buttons, input fields, or links. They help your tests identify exactly which element to click, type into, or check for visibility
- you can also use dev tool (search by typing `$$`) or ask your dev team to create a unique_id for elements
- if you use an id, start with a # ie: `await page.locator('#someId').click;`
- playwright inspector tip: add `page.pause()` so it stops at a certain point then you can click the next/ play icon to go step by step


## Section 4
Build clickMe webpage
- check out clickMe.html
- building a simple HTML to understand html structure and adding a script
- basic structure: `<tag attribute="value>content</tag>

breakdown of the html code (you will need this in section 5)
1. id: Selects an element using its unique id attribute.
Example: #loginButton selects <button id="loginButton">.

2. class: Selects elements by their class attribute.
Example: .button-style selects <button class="button-style">.

3. tag name: Selects elements by their HTML tag.
Example: button selects all <button> elements.

4. attribute value: Selects elements with a specific attribute and value.
Example: [data-action="increment"] selects <button data-action="increment">.

5. partial attribute value: Selects elements where an attribute contains a certain value.
Example: [class*="style"] selects elements with a class that includes "style".

6. visible text: Selects elements by the text they display.
Example: text="CLICK ME" selects an element that shows "CLICK ME" on the page.

## Section 5
How to find Selectors
We will focus on: 
- selecting elements by id, class, tag name, attribute value, partial attribute value, visible text, playwright specific locators or by using ranorex selocity chrome plugin
- check out selectors.spec.js file