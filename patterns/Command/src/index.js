import Loader from './lib/Loader'
import Toggler from './lib/Toggler'
import AddLoader from './command/AddLoader'
import RemoveLoader from './command/RemoveLoader'

const loader = new Loader()
const addLoader = new AddLoader(loader)
const removeLoader = new RemoveLoader(loader)
const toggleLoader = new Toggler()

window.addEventListener('DOMContentLoaded', () => {
    toggleLoader.storeAndExecute(addLoader)
    toggleLoader.storeAndExecute(removeLoader)
    toggleLoader.storeAndExecute(addLoader)
})
