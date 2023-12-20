import { expect, type Locator, type Page } from '@playwright/test';

export class Tsn {
    readonly page: Page;
    readonly getFacebookLabel: Locator;
    readonly gettingStartedHeader: Locator;
    readonly pomLink: Locator;
    readonly tocList: Locator;
    readonly getYoutubeLabel: Locator;
    readonly getInstagranLabel: Locator;
    readonly getArticle: Locator;
    readonly allNewsBtn: Locator;
    readonly firstPost: Locator;
    readonly getTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getFacebookLabel = page.locator("//div[@class='c-banner__addon__body']//ul//li/a[@href='https://www.facebook.com/tsn.ua']")
        this.getYoutubeLabel = page.locator("//div[@class='c-banner__addon__body']//ul//li/a[@href='https://www.youtube.com/channel/UCXoJ8kY9zpLBEz-8saaT3ew']")
        this.getInstagranLabel = page.locator("//div[@class='c-banner__addon__body']//ul//li/a[@href='https://www.instagram.com/tsnua/']")
        this.gettingStartedHeader = page.locator('h1', { hasText: 'Installation' });
        this.getArticle = page.locator("//article[@class='c-card c-card--embed c-card--embed-xxl c-card--bold c-card--cover c-card--title-xl c-card--title-upper']")
        this.allNewsBtn = page.locator("//div//a[@data-category='news']/span[@class='c-bar__label c-bar__accent c-bar__accent--all']")
        this.firstPost = page.getByRole('link', { name: 'Поблизу Бахмута окупанти сконцентрували 80' })
        this.getTitle = page.locator("//h1[@id='article-2476213']//span")
    }

    async goto() {
        await this.page.goto('https://tsn.ua/');
    }

    async getStarted() {
        await this.getFacebookLabel.first().click();
        await expect(this.gettingStartedHeader).toBeVisible();
    }

    async pageObjectModel() {
        await this.getStarted();
        await this.pomLink.click();
    }
}