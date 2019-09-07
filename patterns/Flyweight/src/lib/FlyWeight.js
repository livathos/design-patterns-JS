class FlyWeight {
    constructor (brand, model, fuel) {
        this.brand = brand
        this.model = model
        this.fuel = fuel

        this.init()
    }

    init () {
        this.addAvailable()
    }

    addAvailable () {
        document.querySelector('#cars')
            .innerHTML += `${this.brand} ${this.model} ${this.fuel} <br>`
    }
}

export default FlyWeight
