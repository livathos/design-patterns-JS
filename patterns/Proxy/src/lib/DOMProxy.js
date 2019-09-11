import DOMFinder from './DOMFinder.js'

class DOMProxy {
    constructor () {
        this.DOMFinder = new DOMFinder()
        this.elements = {}
    }

    getElement (selector) {
        if (!this.elements[selector]) {
            this.elements[selector] = this.DOMFinder.getElement(selector)
        }
        return this.elements[selector]
    }

    addClass (selector, className) {
        if (!this.elements[selector]) {
            this.getElement(selector)
        }
        this.elements[selector].classList.add(className)
    }
}

export default DOMProxy
