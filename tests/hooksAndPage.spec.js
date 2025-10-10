import { test, expect} from 'playwright/test';
import { chromium } from 'playwright';

// setup: browser => context => page
let browser;
let context;
let page;

test.beforeAll(async () =>{
    // launch chrome browser before all tests
    browser = await chromium.launch();
    console.log("BEFORE ALL HOOK LAUNCHED CHROMIUM BROWSER");
})

test.beforeEach(async () =>{
    //create context for a browser
    context = await browser.newContext();
    //create new page
    page = await context.newPage()
    //navigate to test url
    await page.goto('https://the-internet.herokuapp.com')
    //add pause execution
    console.log('BEFORE EACH LAUNCHED NEW PAGE');
    await page.pause();
})

test.afterEach(async () => {
    //close page and context
    await page.close();
    await context.close();
    console.log('AFTER EACH CLOSED NEW PAGE');
})

test.afterAll(async () => {
    //closer browser
    await browser.close();
})

test.only('A/B Test', async () => {
    await page.click('text="A/B Testing"');
    const header = await page.textContent('h3');
    expect(header).toBe('A/B Test Control');
})
