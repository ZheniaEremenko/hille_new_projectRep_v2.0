import { expect, type Locator, type Page } from '@playwright/test';

export class FiveTestObject {
    readonly page: Page;
    readonly gettitleLocator: Locator;
    readonly getSinonim: Locator;
    readonly getAntonim: Locator;
    readonly gethyperonim: Locator;
    readonly gethironimExpect: Locator;

    constructor(page: Page) {
        this.page = page;
        this.gettitleLocator = page.locator("//*[@id='rso']/div[1]/div/div/div/div[1]/div/div/span/a/h3");
        this.getSinonim = page.getByRole('link', { name: 'Синонимы' });
        this.getAntonim = page.getByRole('link', { name: 'Антонимы' });
        this.gethyperonim = page.getByRole('link', { name: 'Гиперонимы' });
        this.gethironimExpect = page.getByLabel('что-то').locator('div').filter({ hasText: '↑ ? ↑ ? ↑ ? ↑ ? ↑ ?' }).nth(2);
    }

    async getStarted() {
        await this.gettitleLocator.first().click();
        await expect(this.getSinonim).toBeVisible();
    }

    async pageObjectModel() {
        await this.getStarted();
        await this.getAntonim.click();
    }
}