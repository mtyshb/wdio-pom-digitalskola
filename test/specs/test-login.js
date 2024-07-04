import cartPage from "../pageobjects/cart.page.js";
import dashboardPage from "../pageobjects/dashboard.page.js";
import loginPage from "../pageobjects/login.page.js"

describe('Login Test', () => {
    it('Successful Login', async () => {
        await loginPage.open()
        await loginPage.login(process.env.USERNAME, process.env.PASSWORD)

        await dashboardPage.validateOnPage()
        await dashboardPage.clickItem()
        await dashboardPage.clickCartIcon()
        
        await cartPage.validateOnPage()
    });

    
});