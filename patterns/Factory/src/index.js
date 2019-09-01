import ManagerInputText from './lib/ManagerInputText'
import ManagerTextarea from './lib/ManagerTextarea'

const inputField = document.querySelector('#input')
const inputField2 = document.querySelector('#input2')
const textareaField = document.querySelector('#textarea')

const inputText = new ManagerInputText()
inputText.valid({field: inputField})
inputText.valid({field: inputField2})

const textarea = new ManagerTextarea()
textarea.valid({field: textareaField})
