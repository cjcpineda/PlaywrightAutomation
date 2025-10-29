 export default class CommonActions {
    constructor(page){
        this.page = page;
    }

    //navigating to a URL
    async navigate(url){
        //await this.page.pause();
        await this.page.goto(url)
    }

    //clicking a button
    async click(selector){
        await this.page.click(selector)
    }

    //filling out values
    async fill(selector, text){
        await this.page.fill(selector, text)
    }

    //getting a text within an element
    async getText(selector){
        return await this.page.textContent(selector)
    }

    //checkmark
    async isChecked(selector){
        return await this.page.isChecked(selector)
    }
 }