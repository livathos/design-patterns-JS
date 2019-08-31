import Observer from "../lib/Observer";

class Todo extends Observer{
    constructor(selector){
        super()
        this.selector = selector
    }
    render(data){
        if(!this.selector) return 0
        const area = document.querySelector(this.selector)
        area.innerHTML = data
    }
    notify(data){
        this.render(data)
    }
}
export default Todo