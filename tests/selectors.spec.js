import {test, expect} from '@playwright/test'

test.only("Learning selectors" , async ({page}) => {
    //navigate to the webpage
    await page.goto('http://127.0.0.1:5500/clickMe.html');

    // 1. Selecting by ID
    await page.locator('#clickButton').click();

    // 2. Selecting by class 
    await page.locator('.button-style').click();

    // 3. By Tag and Class
    await page.locator('button.button-style').click();

    // 4. By Attribute Value
    await page.locator('').click();

    await page.pause();



})