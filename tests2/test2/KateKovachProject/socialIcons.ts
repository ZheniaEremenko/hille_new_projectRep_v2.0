import { expect, type Locator, type Page } from '@playwright/test';

export class SocialIcons {
    readonly page: Page;
    readonly FirstInstagramIcon: Locator;
    readonly SecondInstagramIcon: Locator;
    readonly PinterestIcon: Locator;
    readonly FacebookIcon: Locator;
    readonly TelegramIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.FirstInstagramIcon = page.locator('//i[@class="widget-social-icon-instagram"]');
        this.SecondInstagramIcon = page.locator('//a[@href="https://instagram.com/kateryna_kovach"]');
        this.PinterestIcon = page.locator('//i[@class="widget-social-icon-pinterest-circle-with-border"]');
        this.FacebookIcon = page.locator('//i[@class="widget-social-icon-facebook-circle-with-border"]');
        this.TelegramIcon = page.locator('//i[@class="widget-social-icon-telegram-circle-with-border"]')
    }

    async goto() {
        await this.page.goto('https://kovach.photo/');
    }
}