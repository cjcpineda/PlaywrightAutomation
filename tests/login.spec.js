import {test, expect} from '@playwright/test'

//test('Name of Test', async ({page}) => {})

test.only('This is a login spec', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('#username').click();
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').click();
    await page.locator('#password').fill('SuperSecretPassword!');
    // to click login button
    await page.getByRole('button', {name: /login/i}).click();
    // to check for popup
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
    //to check for text
    await expect(page.locator('h4.subheader')).toContainText('Welcome to the Secure Area. When you are done click logout below.');
    // different ways to check logout button
    await page.locator('a.button.secondary.radius:has-text("Logout")').click();
    await page.pause();
})