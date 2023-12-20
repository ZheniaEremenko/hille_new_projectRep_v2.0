import { expect, type Locator, type Page } from '@playwright/test';

export class WikiLanguages {
    readonly page: Page;
    readonly getEnglishLanguages: Locator;
    readonly gettingCebuanoLanguages: Locator;
    readonly EnglishHeaderTitle: Locator;
    readonly CebuanoHeaderTitle: Locator;
    readonly wikiLogo: Locator;
    readonly LogoDropdown: Locator;
    readonly MainMenu: Locator;
    readonly MainMenuCebuano: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getEnglishLanguages = page.locator("//div//ul//li[@class='interlanguage-link interwiki-en mw-list-item']//a[@hreflang='en']");
        this.gettingCebuanoLanguages = page.locator("//div//ul//li[@class='interlanguage-link interwiki-ceb mw-list-item']//a[@href='https://ceb.wikipedia.org/wiki/']");
        this.EnglishHeaderTitle = page.locator("//div[@id='mp-welcome']//span[@id='Welcome_to_Wikipedia']");
        this.CebuanoHeaderTitle = page.locator("//div[@class='cnotice-message-container']//p");
        this.wikiLogo = page.locator("//a[@class='mw-logo']//span[@class='mw-logo-container']")
        this.LogoDropdown = page.locator("//div[@id='vector-main-menu-dropdown']")
        this.MainMenu = page.locator("//div[@class='vector-menu-content']//a[@title='Visit the main page [alt-shift-z]']")
        this.MainMenuCebuano = page.locator("//a[@title='Bisitaha ang Unang Panid [alt-shift-z]']")
    }

    async goto() {
        await this.page.goto('https://uk.wikipedia.org/wiki/%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B0_%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D0%B0');
    }

    async getStarted() {
        await this.getEnglishLanguages.first().click();
        await expect(this.gettingCebuanoLanguages).toBeVisible();
    }

    async pageObjectModel() {
        await this.getStarted();
        await this.EnglishHeaderTitle.click();
    }
}