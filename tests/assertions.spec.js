import {test, expect} from '@playwright/test'

test.describe("Learn assertions @assertions_group", () => {
    test('Verify web page behavior @smoke', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/');

        //1. to have URL
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
        //2. to have a Title
        await expect(page).toHaveTitle('The Internet');
    })

    test('Continue with Assertions @assertions_pt_1', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/');
        //3. assert visibility (to check if something is visible)
        await expect(page.locator('h1')).toBeVisible();
        //4. assert element to have text (text must be exact match)
        await expect(page.locator('h2')).toHaveText('Available Examples');
        //5. assert contains text (partial text)
        await expect(page.locator('body')).toContainText('JQuer');
        await page.pause();

    })
    test('Continue with assertions Pt. 2', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/');
        //6. assert count- check how many links are present
        await expect(page.locator('a')).toHaveCount(46);

        //7. to be checked
        await page.goto('https://the-internet.herokuapp.com/checkboxes');
        await page.getByRole('checkbox').nth(0).check();
        await page.getByRole('checkbox').nth(1).uncheck();
await page.pause();
        //testing stability, ie below is to wait for 1sec 
        await page.waitForTimeout(1000)
        //ie below - is to wait for something before proceeding to the next code
        let checkbox = await page.getByRole('checkbox').nth(0)
        
        //to verify - add assertions
        await expect(page.getByRole('checkbox').nth(0)).toBeChecked();
        await expect(page.getByRole('checkbox').nth(1)).not.toBeChecked();
    })
    test('Continue with Assertions Pt. 3', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/login');
       
        //8. have value
        await page.locator('#username').fill('tomsmith');
        await expect(page.locator('#username')).toHaveValue('tomsmith');
await page.pause();
        //9. element is enabled
        await expect(page.locator('button[type="submit"]')).toBeEnabled();
    })
    test('Continue Assertions Pt. 4', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com')
        
        //10. verify text store in variable
        const headerText = await page.locator('h1').textContent();
        expect (headerText).toBe('Welcome to the-internet')
    })

})