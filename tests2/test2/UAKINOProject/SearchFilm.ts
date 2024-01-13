import { expect, type Locator, type Page } from '@playwright/test';

export class UaKinoSearch {
    readonly page: Page;
    readonly LoginIcon: Locator;
    readonly getLoginfield: Locator;
    readonly getPasswordField: Locator;
    readonly continueBtn: Locator;
    readonly Facebook: Locator;
    readonly Google: Locator;
    readonly AuthIcon: Locator;
    readonly Searchfiled: Locator;
    readonly Searchbutton: Locator;
    readonly Tileone: Locator;
    readonly Tiletwo: Locator;
    readonly Tilethree: Locator;
    readonly title: Locator

    constructor(page: Page) {
        this.page = page;
        this.LoginIcon = page.locator('#show-login').getByText('Авторизація');
        this.getLoginfield = page.getByPlaceholder('Ваш логін');
        this.getPasswordField = page.getByPlaceholder('Ваш пароль');
        this.continueBtn = page.locator("//button[@title='Вход']");
        this.Facebook = page.locator('#overlay').getByRole('link').first()
        this.Google = page.locator('#overlay').getByRole('link').nth(1)
        this.AuthIcon = page.locator('#overlay').getByRole('link').nth(2);
        this.Searchfiled = page.locator('#show-search')
        this.Searchbutton = page.getByRole('button', { name: 'Знайти' })
        this.Tileone = page.getByRole('link', { name: 'Білосніжка та мисливець [Розширена' });
        this.Tiletwo = page.getByRole('link', { name: 'Білосніжка і семеро гномів' });
        this.Tilethree = page.getByRole('link', { name: 'Білосніжка та мисливець', exact: true });
        this.title = page.getByRole('heading', { name: 'Білосніжка та мисливець', exact: true }).locator('span')
    }

    async goto() {
        await this.page.goto('https://uakino.club/');
    }
}