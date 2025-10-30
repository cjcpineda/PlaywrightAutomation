# PlaywrightAutomation

## Section 1
#### Playwright intro + env setup
- playwright/test is a library that helps you write and run browser tests
- run `npx playwright test` or `npx playwright codegen <url>`, playwright automatically creates a `tests`, `playwright-report`, and it can create example test files if you run npx playwright test in a new project 
Commands to run a test: 
- npx playwright test --headed
- npx playwright show-report

## Section 2
#### Codegen with playwright

Test site: https://the-internet.herokuapp.com/login
- `npx playwright codegen https://the-internet.herokuapp.com/login`  launches Playwright Inspector. It records your actions (clicks, typing, etc.). Playwright automatically generates test code (usually in JavaScript, TypeScript, Python, or C#) that you can use for automated browser testing
- hit record to track actions and the "eye-icon" for assertion. copy & paste into js file
- check out codegen_login.spec.js 
- run `npx playwright test --headed`
- playwright inspector

## Section 3
#### Understand codegen code
- `//test('Name of Test', async ({page}) => {})`
- https://playwright.dev/docs/locators Locators in Playwright are expressions or methods used to find and interact with elements on a web page, such as buttons, input fields, or links. They help your tests identify exactly which element to click, type into, or check for visibility
- you can also use dev tool (search by typing `$$`) or ask your dev team to create a unique_id for elements
- if you use an id, start with a # ie: `await page.locator('#someId').click;`
- playwright inspector tip: add `page.pause()` so it stops at a certain point then you can click the next/ play icon to go step by step


## Section 4
#### Build clickMe webpage
- check out clickMe.html
- building a simple HTML to understand html structure and adding a script
- basic structure: `<tag attribute="value>content</tag>`

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
#### How to find Selectors
We will focus on: 
- selecting elements by id, class, tag name, attribute value, partial attribute value, visible text, playwright specific locators or by using ranorex selocity chrome plugin
- check out `selectors.spec.js` file for details
- install Ranorex plugin to help detect selectors

## Section 6
#### Playwright Assertions
- https://playwright.dev/docs/test-assertions Assertions are used to verify that your web application behaves as expected, such as checking if an element is visible, contains the correct text, or if a value matches what you expect
- check out `assertions.spec.js` practice page: https://the-internet.herokuapp.com/ 
- test.describe is used to group related tests together
- know the difference between `page.get<>` and `expect` 

## Section 7
Running Tests & Config
#### Running Tests & Config
Some examples of running playwright tests (ui runner, smoke test, running test project level or global level, etc.) and discussing config file
- running all tests `npx playwright test` 
- running a specific file: `npx playwright test <folder/filename>` 
- running by tags checkout assertions.spec.js , `@ assertions_group` or `@smoke` are tags: `...test --grep "@smoke" `
- vs code extension (the flask icon), you can run the projects here. Under projects on the bottom left corner, you can select which browser you want to test. You can enable/ disabled browsers through the playwright.config.js file
- script in package.json (example below) then in the terminal run `npx run test:smoke` 
```"scripts":{"test:smoke":"npx playwright test --grep \"@smoke\"",
"test:regression":"npx playwright test --grep'@regression'"}
```
- `playwright.config.js` The config file is like a settings menu for your Playwright tests. You can change how tests run without editing each test file. It lets you define things like:
  - Which browsers to test (Chromium, Firefox, WebKit)
  - Test timeouts and retries
  - Test directory and file patterns
  - Base URL for your tests (you wont have to add the whole URL , just add `(/)` after await page.goto)
  - Reporter options (how results are shown)
  - Global setup or teardown step

## Section 8
#### Setting Page & Hooks
In Playwright, the built-in {page} is a fixture. Fixtures automatically set up and tear down resources needed for tests. Built in {page} provides a fresh page tab in a specific browser within a browser context for each test. It ensures that each test runs in isolation.
However, sometimes you may need to set up the browser and context yourself to customize the configuration or manage multiple contexts. You can do this manually and organize the process using hooks such as beforeAll, afterAll, beforeEach, and afterEach:
  - beforeAll - hook is used to execute code before any tests in the test suite run. 
  - afterAll - hook is used to execute code after all tests in the test suite have finished
  - beforeEach - hook is used to execute code before each individual test runs.
  - afterEach - hook is used to execute code after each individual test has finished.

Hooks can be used for many things, like initialize and clean up test data before and after tests or perform login operations and store session tokens or cookies. In this lesson we will look into using hooks specifically for manual page setup and tear down.

Before sec. 8, we used ({page}) which was from playwright. Now, we manually created the `hooksAndPage.spec.js` file 

Notes:
- You can set your location in chrome under elements/ sensors --- check out the geolocation test
- `test.descibe` is used to group related tests together (beforeAll, beforeEach) and teardown (afterEach, afterAll)

## Section 9
#### Page Object Model(POM)
DRY (Don't Repeat Yourself) and KISS (Keep It Simple, Stupid) principles 
To create organized and maintainable test code by associating specific functions with each page of an application. Check out `pom_example` folder
- `pomTests.spec.js` Primary test file
- `CommonActions.js` Connects to the other page classes by providing the foundational actions needed for user interactions (navigate, click, fill, etc.)
- `pages folder` utilizes the functions defined in commonActions.js
  - `loginPage.js` This page object represents the login screen and includes methods for elements like the username and password input fields and the login button
  - `securePage.js` After successful authentication, this file represents the next page where users land
  - `checkboxesPage.js` This page object handles interactions related to checkbox elements

### POM part 2.
- creating assertions in page vs in test cases
- created the PomManager.js to keep code clean by managing the importing of all your page. aka not having to add  `import thisPage from .... ` everywhere
1. create SomethingPages.js
2. add/ import SmethingPages.js in PomManager.js
3. create the actual tests in `pomTests.spec.js`

- `test.descibe` 
 
 ## Section 10
 Playwright API Testing  