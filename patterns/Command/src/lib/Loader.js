class Loader {
    add () {
        const container = document.querySelector('.app')
        const element = this.constructLoader()
        container.appendChild(element)
    }

    remove () {
        const loader = document.querySelector('.lds-dual-ring')
        if (loader) loader.parentElement.removeChild(loader)
    }

    constructLoader () {
        const element = document.createElement('div')
        element.classList.add('lds-dual-ring')
        return element
    }
}

export default Loader
