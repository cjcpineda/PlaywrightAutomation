import {test, expect} from 'playwright/test'
import LoginPage from '../pages/PomManager.js'

let pm; // Pom Manager

test.describe('Login Tests', () => {
    test.beforeEach(async ({page}) => {
        pm = new PomManager(page)
    })

    test('Login with valid credentials', async () => {
        await pm.loginPage.navigate();
        await pm.loginPage.login('tomsmith', 'SuperSecretPassword!')
    })

})

