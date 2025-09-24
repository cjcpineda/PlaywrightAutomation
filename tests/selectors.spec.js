import {test, expect} from '@playwright/test'

test("Learning selectors" , async ({page}) => {
    //navigate to the webpage
    await page.goto('http://127.0.0.1:5500/clickMe.html');

    // 1. Selecting by ID
    await page.locator('#clickButton').click();

    // 2. Selecting by class 
    await page.locator('.button-style').click();

    // 3. By Tag and Class
    await page.locator('button.button-style').click();

    // 4. By Attribute Value
    await page.locator('[data-action="increment"]').click();
    await page.locator('[id="clickButton"]').click();
    await page.locator('[class="button-style"]').click();

    // 5. Partial attribute
    await page.locator('[role*="but"]').click();

    // 6. By Text
    await page.locator('text=CLICK ME').click();

    // 7. Combine selectors for precision, class & text
    await page.locator('.button-style:text("CLICK ME")').click();

    // 8. has-text (partial text)
    await page.locator('button:has-text("clic")').click();

    // 9. Attribute
    await page.locator('[data-action="increment"]:text("CLICK ME")').click();

    // 10. Playwright locators https://playwright.dev/docs/locators 
    //get by text
    await page.getByText ('CLICK ME').click();
    //get by role
    await page.getByRole('button', {name: /click me/i}).click();
    //assert the counter
    await expect(page.locator('#counter')).toContainText('13');

    await page.pause();


})