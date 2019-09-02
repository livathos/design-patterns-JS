class Textarea {
    constructor ({ field }) {
        this.field = field
    }

    init () {
        this.field.addEventListener('change', this.valid.bind(this))
    }

    valid () {
        if (this.field.value.length < 10) {
            this.field.style = 'background: pink;'
        } else {
            this.field.style = 'background: blue;'
        }
    }
}

export default Textarea
