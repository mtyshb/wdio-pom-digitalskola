import Page from "./page.js";

class cartPage extends Page {
    open(path) {
        return super.open("cart.html")
    }

}
export default new cartPage();