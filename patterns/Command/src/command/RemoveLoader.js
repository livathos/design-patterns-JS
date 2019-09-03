class RemoveLoader {
    constructor (loader) {
        this.loader = loader
    }

    execute () {
        this.loader.remove()
    }
}

export default RemoveLoader
