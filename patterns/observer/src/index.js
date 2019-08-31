import State from './lib/State'
import Todo from './components/Todo'
import Counter from './components/Counter'

const appState = new State()
const todo = new Todo('#todo-list')
const counter = new Counter('#todo-counter')

appState.registerObserver(todo)
appState.registerObserver(counter)

appState.addTask('Write component')
appState.addTask('Test component')
appState.removeTask('Write component')
appState.addTask('Ready component')

appState.unregisterObserver(todo)
