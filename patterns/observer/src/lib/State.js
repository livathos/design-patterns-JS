import Subject from './Subject'

class State extends Subject {
    constructor (tasks = []) {
        super()
        this.tasks = tasks
    }

    addTask (task) {
        this.tasks.push(task)
        this.notifyObservers(this.tasks)
    }

    removeTask (task) {
        this.tasks.splice(this.tasks.indexOf(task), 1)
        this.notifyObservers(this.tasks)
    }
}

export default State
