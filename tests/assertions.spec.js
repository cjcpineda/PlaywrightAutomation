import {test, expect} from '@playwright/test'

test.describe ("Learn assertions", () => {
    test('Verify web page behavior', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/');

        //1. to have URL
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/');

        //2. to have a Title
        await expect(page).toHaveTitle('The Internet');

        await page.pause();
    })

    test('Continue with Assertions', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/');
        //3. assert visibility (to check if something is visible)
        await expect(page.locator('h1')).toBeVisible();
        //4. assert element to have text (text must be exact match)
        await expect(page.locator('h2')).toHaveText('Available Examples');
        //5. assert contains text (partial text)
        await expect(page.locator('body')).toContainText('JQuer');
        await page.pause();

    })
    test.only('Continue with assertions Pt. 2', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/');
        //6. assert count- check how many links are present
        await expect(page.locator('a')).toHaveCount(46);
        await page.pause();
    })
})