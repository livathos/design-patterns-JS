class Validator {
    valid ({field}) {
        const fieldValidator = this.makeFieldValidator({field})
        fieldValidator.init()
    }
}

export default Validator