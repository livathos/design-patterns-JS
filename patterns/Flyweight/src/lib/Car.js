import flyweightFactory from './flyweightFactory'

class Car {
    constructor (brand, model, fuel, year, registration) {
        this.flyweight = flyweightFactory.get(brand, model, fuel)
        this.year = year
        this.registration = registration
    }
}

export default Car
