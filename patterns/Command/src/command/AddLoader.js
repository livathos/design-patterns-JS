class AddLoader {
    constructor (loader) {
        this.loader = loader
    }

    execute () {
        this.loader.add()
    }
}

export default AddLoader
