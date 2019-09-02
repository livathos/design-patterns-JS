class Subject {
    constructor () {
        this.observerCollection = []
    }

    registerObserver (observer) {
        this.observerCollection.push(observer)
    }

    unregisterObserver (observer) {
        this.observerCollection = this.observerCollection.filter(obs => obs !== observer)
    }

    notifyObservers (data) {
        this.observerCollection.forEach(observer => observer.notify(data))
    }
}

export default Subject
