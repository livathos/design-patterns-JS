import FlyWeight from './FlyWeight'

export default {
    flyweights: {},
    get (brand, model, fuel) {
        if (!this.flyweights[brand + model + fuel]) {
            this.flyweights[brand + model + fuel] = new FlyWeight(brand, model, fuel)
        }
        return this.flyweights[brand + model + fuel]
    }
}
