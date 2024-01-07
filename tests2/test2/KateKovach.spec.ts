import { test, expect } from '@playwright/test';
import { SocialIcons } from './KateKovachProject/socialIcons';
import { HeaderLinks } from './KateKovachProject/HeaderIcons';
import { PortfolioTile } from './KateKovachProject/PortfolioPage';
import { ContactsPage } from './KateKovachProject/ContactsPage';

test('1.Check that social icons is displayed on page!', async ({ page }) => {
    const socialLink = new SocialIcons(page);
    await socialLink.goto()
    await expect(socialLink.FirstInstagramIcon).toBeVisible();
    await expect(socialLink.SecondInstagramIcon).toBeVisible();
    await expect(socialLink.PinterestIcon).toBeVisible();
    await expect(socialLink.FacebookIcon).toBeVisible();
    await expect(socialLink.TelegramIcon).toBeVisible();
})

test('2.Check that Header icons is displayed on page', async ({ page }) => {
    const hyperlinks = new HeaderLinks(page);
    await hyperlinks.goto();
    await expect(hyperlinks.Main).toBeVisible();
    await expect(hyperlinks.Portfolio).toBeVisible();
    await expect(hyperlinks.Blog).toBeVisible();
    await expect(hyperlinks.ReviewComment).toBeVisible();
    await expect(hyperlinks.Price).toBeVisible();
    await expect(hyperlinks.Contacts).toBeVisible();
})

test('3.Check that PhotoTiles is displayed on Portfolio page', async ({ page }) => {
    let portfolio = new PortfolioTile(page);
    await portfolio.goto()
    await expect(portfolio.Firsttile).toBeVisible();
    await expect(portfolio.SecondTile).toBeVisible();
    await expect(portfolio.ThirdTile).toBeVisible();
    await expect(portfolio.FourTile).toBeVisible();
    await expect(portfolio.FiveTile).toBeVisible();
    await expect(portfolio.SixTile).toBeVisible();
})

test('4.Header links are clickable', async ({ page }) => {
    let logo = page.locator('a').first();
    const hyperlinks = new HeaderLinks(page)
    await hyperlinks.goto();
    await expect(hyperlinks.Main).toBeVisible();
    await expect(hyperlinks.Portfolio).toBeVisible();
    await hyperlinks.Portfolio.click()
    await logo.click();
    await expect(hyperlinks.Blog).toBeVisible();
    await hyperlinks.Blog.click()
    await logo.click();
    await expect(hyperlinks.ReviewComment).toBeVisible();
    await hyperlinks.ReviewComment.click()
    await logo.click();
    await expect(hyperlinks.Price).toBeVisible();
    await hyperlinks.Price.click()
    await logo.click();
    await expect(hyperlinks.Contacts).toBeVisible();
    await hyperlinks.Contacts.click()
    await logo.click();
})

test('5.Check that all elements are displayed on Contacts page', async ({ page }) => {
    const cont_desc = new ContactsPage(page);
    await cont_desc.goto()
    await expect(cont_desc.NameField).toBeVisible()
    await expect(cont_desc.EmailField).toBeVisible()
    await expect(cont_desc.DecriptionField).toBeVisible()
    await expect(cont_desc.SendButton).toBeVisible()
    await cont_desc.SendButton.click()
    await expect(cont_desc.FailedEmailField).toBeVisible()
    await expect(cont_desc.ContactEmail).toBeVisible()
    await expect(cont_desc.ContactPhone).toBeVisible()

})

test('6.Enter Name,Description,Email in fields', async ({ page }) => {
    const cont_desc = new ContactsPage(page);
    await cont_desc.goto();
    await cont_desc.NameField.click();
    page.waitForTimeout(500)
    await cont_desc.NameField.pressSequentially("Zhenia")
    page.waitForTimeout(500)
    await cont_desc.EmailField.pressSequentially("zheniaeremenko@mailinator.com")
    await cont_desc.DecriptionField.pressSequentially("Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной 'рыбой' для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.")
})

test('7.Enter incorrect email in field', async ({ page }) => {
    const cont_desc = new ContactsPage(page);
    await cont_desc.goto()
    await expect(cont_desc.EmailField).toBeVisible()
    await cont_desc.EmailField.pressSequentially("zheniaeremenko")
    await expect(cont_desc.SendButton).toBeVisible()
    await cont_desc.SendButton.click()
    await expect(cont_desc.FailedEmailField).toBeVisible()
})

test('8.Check Review Tiles + check checkboxes', async ({ page }) => {
    const hyperlinks = new HeaderLinks(page)
    hyperlinks.goto()
    await expect(hyperlinks.ReviewComment).toBeVisible();
    await hyperlinks.ReviewComment.click()
    await expect(page.getByText('Мар’яна Очень понравилась обработка фотографий. Они настоящие и с изюминкой, а с')).toBeVisible()
    await expect(page.getByText('Яна Катя навчила мене любові до себе під час фотосесії. Мені сподобалася її п')).toBeVisible()
    await page.getByRole('button', { name: 'Залиште свій відгук' }).click()
    await page.locator('input[name="data\\[5040032\\]"]').pressSequentially("zhenia")
    await expect(page.locator('textarea[name="data\\[5040033\\]"]')).toBeVisible()
    await page.getByRole('button', { name: 'Залишити відгук' }).click()
    await expect(page.locator('#dialog-form-popup-69703122 div').filter({ hasText: 'E-mail *' }).nth(4)).toBeVisible()
})