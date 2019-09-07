import Car from './Car'

class CarCollection {
    constructor () {
        this.cars = {}
    }

    add (brand, model, fuel, year, registration) {
        this.cars[registration] = new Car(brand, model, fuel, year, registration)
    }

    get (registration) {
        if (registration) return this.cars[registration]
        return this.cars
    }
}

export default CarCollection
