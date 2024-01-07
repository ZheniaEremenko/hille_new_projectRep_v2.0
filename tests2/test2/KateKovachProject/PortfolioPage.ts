import { expect, type Locator, type Page } from '@playwright/test';

export class PortfolioTile {
    readonly page: Page;
    readonly Firsttile: Locator;
    readonly SecondTile: Locator;
    readonly ThirdTile: Locator;
    readonly FourTile: Locator;
    readonly FiveTile: Locator;
    readonly SixTile: Locator;

    constructor(page: Page) {
        this.page = page;
        this.Firsttile = page.getByRole('link', { name: 'Yaroslav&Kateryna' });
        this.SecondTile = page.getByRole('link', { name: 'NICKOLAS' });
        this.ThirdTile = page.getByRole('link', { name: 'Leonid &Alina' });
        this.FourTile = page.getByRole('link', { name: 'Spaceman' });
        this.FiveTile = page.getByRole('link', { name: 'CHRISTMAS HOLIDAYS' });
        this.SixTile = page.getByRole('link', { name: 'VIKTORIA' });
    }

    async goto() {
        await this.page.goto('https://kovach.photo/portfolio');
    }
}