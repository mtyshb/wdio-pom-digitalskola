import Page from "./page.js";

class dashboardPage extends Page {
    open(path){
        return super.open("inventory.html")
    }

    get cartIcon() {
        return $("#shopping_cart_container")
    }

    async validateOnPage() {
        expect(this.cartIcon).toBeDisplayed()
    }

}
export default new dashboardPage();