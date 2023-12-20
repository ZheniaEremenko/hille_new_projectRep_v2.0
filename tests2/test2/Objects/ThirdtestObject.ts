import { expect, type Locator, type Page } from '@playwright/test';

export class wikipedia {
    readonly page: Page;
    readonly getSearchfield: Locator;
    readonly getSiteTile: Locator;
    readonly getPosttitle: Locator;
    readonly MainPageDropdown: Locator;
    readonly randoPost: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getSearchfield = page.locator("//div[@class='RNNXgb']//textarea[@class='gLFyf']");
        this.getSiteTile = page.locator("//div[@class='yuRUbf']//a[@href='https://uk.wikipedia.org/wiki/%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B0_%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D0%B0']//h3[@class='LC20lb MBeuO DKV0Md']");
        this.getPosttitle = page.locator("//div//div[@id='main-head']");
        this.MainPageDropdown = page.locator("//nav[@class='mw-portlet mw-portlet-navigation vector-menu-portal portal vector-menu']//div[@class='vector-menu-content']//ul//li[@id='n-mainpage-description']//span");
        this.randoPost = page.locator("//nav[@class='mw-portlet mw-portlet-navigation vector-menu-portal portal vector-menu']//div[@class='vector-menu-content']//ul//li[@id='n-mainpage-description']//span")
    }

    async goto() {
        await this.page.goto('https://www.google.com');
    }

    async getStarted() {
        await this.getSearchfield.first().click();
        await expect(this.getSiteTile).toBeVisible();
    }

    async pageObjectModel() {
        await this.getStarted();
        await this.getPosttitle.click();
    }
}