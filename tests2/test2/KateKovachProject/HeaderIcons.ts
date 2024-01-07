import { expect, type Locator, type Page } from '@playwright/test';

export class HeaderLinks {
    readonly page: Page;
    readonly Main: Locator;
    readonly Portfolio: Locator;
    readonly Blog: Locator;
    readonly ReviewComment: Locator;
    readonly Price: Locator;
    readonly Contacts: Locator;

    constructor(page: Page) {
        this.page = page;
        this.Main = page.getByRole('link', { name: 'ГОЛОВНА' }).first();
        this.Portfolio = page.getByRole('link', { name: 'ПОРТФОЛІО' }).first();
        this.Blog = page.getByRole('link', { name: 'БЛОГ' }).first();
        this.ReviewComment = page.getByRole('link', { name: 'ВІДГУКИ' }).first();
        this.Price = page.getByRole('link', { name: 'ПРАЙС' }).first();
        this.Contacts = page.getByRole('link', { name: 'КОНТАКТИ' }).first()
    }

    async goto() {
        await this.page.goto('https://kovach.photo/');
    }
}