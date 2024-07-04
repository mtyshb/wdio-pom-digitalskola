import { browser } from '@wdio/globals'

export default class Page {
    open (path) {
        return browser.url(`${proccess.env.BASE_URL}/${path}`)
    }
}
