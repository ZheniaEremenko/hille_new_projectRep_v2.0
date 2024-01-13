import { test, expect } from '@playwright/test';
import { UaKinoSearch } from "./SearchFilm";

test('Check that all elements present on autorize page', async ({ page }) => {
    const newserchObj = new UaKinoSearch(page)
    newserchObj.goto()
    await expect(newserchObj.LoginIcon).toBeVisible()
    await newserchObj.LoginIcon.click()
    await expect(newserchObj.getLoginfield).toBeVisible()
    await expect(newserchObj.getPasswordField).toBeVisible()
    await expect(newserchObj.Facebook).toBeVisible()
    await expect(newserchObj.Google).toBeVisible()
    await expect(newserchObj.AuthIcon).toBeVisible()
    await page.close()
})

test('Login test', async ({ page }) => {
    const newserchObj = new UaKinoSearch(page)
    newserchObj.goto()
    await newserchObj.LoginIcon.click()
    await expect(newserchObj.getLoginfield).toBeVisible()
    await newserchObj.getLoginfield.click()
    await newserchObj.getLoginfield.pressSequentially('zheniaeremenko@gmail.com')
    await expect(newserchObj.getPasswordField).toBeVisible()
    await newserchObj.getPasswordField.click()
    await newserchObj.getPasswordField.pressSequentially('!qwertY!1234')
    await newserchObj.continueBtn.click()
    await page.close()
})

test('Check that film title is displayed on the page', async ({ page }) => {
    const newserchObj = new UaKinoSearch(page)
    newserchObj.goto()
    await newserchObj.LoginIcon.click()
    await expect(newserchObj.getLoginfield).toBeVisible()
    await newserchObj.getLoginfield.click()
    await newserchObj.getLoginfield.pressSequentially('zheniaeremenko@gmail.com')
    await expect(newserchObj.getPasswordField).toBeVisible()
    await newserchObj.getPasswordField.click()
    await newserchObj.getPasswordField.pressSequentially('!qwertY!1234')
    await newserchObj.continueBtn.click()
    await newserchObj.Searchfiled.click()
    await newserchObj.Searchfiled.pressSequentially('білосніжка')
    await newserchObj.Searchbutton.click()
    await expect(newserchObj.Tileone).toBeVisible()
    await expect(newserchObj.Tiletwo).toBeVisible()
    await expect(newserchObj.Tilethree).toBeEnabled()
    await newserchObj.Tilethree.click()
    await expect(newserchObj.title).toHaveText('Білосніжка та мисливець')
    await page.close()
})