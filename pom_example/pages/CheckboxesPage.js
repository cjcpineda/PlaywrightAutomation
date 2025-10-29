import { expect } from '@playwright/test';
import CommonActions from '../utils/CommonActions.js'

export default class CheckboxesPage {
    constructor(page){
        this.actions = new CommonActions(page)
    }

    //navigate to the page
    async navigate(){
        await this.actions.navigate('https://the-internet.herokuapp.com/checkboxes')
    }

    //this will click on the checkbox
    //index will specify which one because there are more than 1 checkboxes
    async checkCheckbox(index){
        await this.actions.click(`input[type="checkbox"]:nth-of-type(${index})`)
    }
    //this will check if its actually checked. if checked, it will return true or false
    async isItChecked(index){
        return await this.actions.isChecked(`input[type="checkbox"]:nth-of-type(${index})`)
    }
    //assert as checked or not checked
    async assertCheckbox(index, expectedChecked) {
        const isChecked =await this.isItChecked(index)
        expect(isChecked).toBe(expectedChecked)
    }
}