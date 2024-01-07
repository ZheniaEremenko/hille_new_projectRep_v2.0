import { expect, type Locator, type Page } from '@playwright/test';

export class ContactsPage {
    readonly page: Page;
    readonly NameField: Locator;
    readonly EmailField: Locator;
    readonly DecriptionField: Locator;
    readonly SendButton: Locator;
    readonly FailedEmailField: Locator;
    readonly ContactEmail: Locator;
    readonly ContactPhone: Locator;

    constructor(page: Page) {
        this.page = page;
        this.NameField = page.locator("//*[@id='w_69703085']/div/form/div[2]/div[1]/div[2]/div/input");
        this.EmailField = page.locator('//*[@id="w_69703085"]/div/form/div[2]/div[1]/div[3]/div/input');
        this.DecriptionField = page.locator('//*[@id="w_69703085"]/div/form/div[2]/div[2]/div/div/textarea');
        this.SendButton = page.locator('//*[@id="w_69703085"]/div/form/div[3]/div/button/span');
        this.FailedEmailField = page.locator('//*[@id="w_69703085"]/div/form/div[2]/div[1]/div[3]/div/input');
        this.ContactEmail = page.locator('//*[@id="w_69703084"]/div/p/span');
        this.ContactPhone = page.locator('//*[@id="w_69703091"]/div/p/span');
    }

    async goto() {
        await this.page.goto('https://kovach.photo/contact');
    }
}