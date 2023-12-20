import { test, expect } from '@playwright/test';
import { UaKino } from './Objects/FirstTest.Object';
import { Tsn } from './Objects/SecondTestObject';
import { wikipedia } from './Objects/ThirdtestObject';
import { WikiLanguages } from './Objects/FourTestObject';
import { FiveTestObject } from './Objects/FiveTestObject'


test('Login > Find the movie > Check movies`s title ', async ({ page }) => {
    const firsttest = new UaKino(page);
    await firsttest.goto();
    await expect(firsttest.LoginIcon).toBeVisible()
    await firsttest.LoginIcon.click()
    await firsttest.getLoginfield.pressSequentially('zheniaeremenko@gmail.com')
    await firsttest.getPasswordField.pressSequentially('!qwertY!1234')
    await firsttest.continueBtn.click()

    await expect(firsttest.firstFilmTitle).toBeVisible()
    await expect(firsttest.secondFilmTitle).toBeVisible()
    await firsttest.LoadMoreFilmBtn.click()

    await firsttest.firstFilmTitle.click()
    await expect(firsttest.NamecheckFilm).toHaveText("Сімпсони 33 сезон")
})


test('TSN find element > Find Post > Check the Post`s Title', async ({ page }) => {

    const secondTest = new Tsn(page)
    await secondTest.goto()

    await page.waitForTimeout(1000);
    await expect(secondTest.getFacebookLabel).toBeVisible()
    await expect(secondTest.getYoutubeLabel).toBeVisible()
    await expect(secondTest.getInstagranLabel).toBeVisible()
    await expect(secondTest.getArticle).toBeVisible

    await secondTest.allNewsBtn.click()
    await expect(secondTest.firstPost).toBeVisible()
    await secondTest.firstPost.click()
    await expect(secondTest.getTitle).toBeVisible()
    await page.close();
    await page.context().close();
})
test('Google find > Wikipedia and > Find post and > Click on Random Post button', async ({ page }) => {
    const wiki = new wikipedia(page)
    await wiki.goto()

    await wiki.getSearchfield.pressSequentially('Википедия')
    await page.keyboard.press('Enter');
    await wiki.getSiteTile.click()
    await expect(wiki.getPosttitle).toBeVisible()
    await expect(wiki.MainPageDropdown).toBeVisible()
    await wiki.randoPost.click()

})

test("Check two languages on wiki", async ({ page }) => {
    const neWiki = new WikiLanguages(page)
    await neWiki.goto()
    await page.waitForTimeout(500);
    await expect(neWiki.getEnglishLanguages).toBeVisible()
    await expect(neWiki.gettingCebuanoLanguages).toBeVisible()
    await neWiki.getEnglishLanguages.click()
    await expect(neWiki.EnglishHeaderTitle).toHaveText("Welcome to Wikipedia")
    await neWiki.wikiLogo.click()
    await neWiki.LogoDropdown.click()
    await neWiki.MainMenu.click()
    await neWiki.goto()
    await neWiki.gettingCebuanoLanguages.click()
    await expect(neWiki.CebuanoHeaderTitle).toHaveText("Participate in the 2023 international science photo competition!")
    await neWiki.wikiLogo.click()
    await neWiki.LogoDropdown.click()
    await neWiki.MainMenuCebuano.click()

})

test('two object in one file', async ({ page }) => {
    const googlesearch = new wikipedia(page)
    const titleclick = new FiveTestObject(page)

    await googlesearch.goto()
    await googlesearch.getSearchfield.pressSequentially('Что-то')
    await page.keyboard.press('Enter');
    await titleclick.gettitleLocator.click()
    await expect(titleclick.getSinonim).toBeVisible()
    await expect(titleclick.getAntonim).toBeVisible()
    await expect(titleclick.gethyperonim).toBeVisible()
    await titleclick.gethyperonim.click()
    await expect(titleclick.gethironimExpect).toBeVisible()
})