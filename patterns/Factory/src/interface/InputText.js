class InputText {
    constructor ({field}) {
        this.field = field
    }

    init () {
        this.field.addEventListener('change', this.valid.bind(this))
    }

    valid () {
        if ( this.field.value.length < 5 ) {
            this.field.style = 'background: red;'
        } else {
            this.field.style = 'background: green;'
        }
    }
}

export default InputText