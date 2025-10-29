import {expect} from "@playwright/test";
import CommonActions from "../utils/CommonActions.js";

export default class SecurePage {
    constructor(page) {
        this.actions =new CommonActions(page)
    }

    async getMessage(){
        return await this.actions.getText('#flash')
    }

    //assertion example in pages (check out tests if assertion for this is in tests)
    async assertLoggedInMessage(passedMessage) {
        const message = await this.getMessage()
        expect(message).toContain(passedMessage)
    }
}