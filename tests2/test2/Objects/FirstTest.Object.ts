import { expect, type Locator, type Page } from '@playwright/test';

export class UaKino {
    readonly page: Page;
    readonly LoginIcon: Locator;
    readonly getLoginfield: Locator;
    readonly getPasswordField: Locator;
    readonly continueBtn: Locator;
    readonly firstFilmTitle: Locator;
    readonly secondFilmTitle: Locator;
    readonly LoadMoreFilmBtn: Locator;
    readonly NamecheckFilm: Locator;

    constructor(page: Page) {
        this.page = page;
        this.LoginIcon = page.locator('#show-login').getByText('Авторизація');
        this.getLoginfield = page.locator("//input[@name='login_name']");
        this.getPasswordField = page.locator("//input[@name='login_password']");
        this.continueBtn = page.locator("//button[@title='Вход']");
        this.firstFilmTitle = page.getByLabel('1 / 5').nth(1);
        this.secondFilmTitle = page.getByLabel('2 / 5').nth(1);
        this.LoadMoreFilmBtn = page.locator("//div[@id='nav-load']//a[@href='https://uakino.club/page/2/']")
        this.NamecheckFilm = page.locator("//h1//span[@itemprop='name']")

    }

    async goto() {
        await this.page.goto('https://uakino.club/');
    }

    async getStarted() {
        await this.LoginIcon.first().click();
        await expect(this.getLoginfield).toBeVisible();
    }

    async pageObjectModel() {
        await this.getStarted();
        await this.getPasswordField.click();
    }
}