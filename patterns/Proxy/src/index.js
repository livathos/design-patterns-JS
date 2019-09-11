import DOMProxy from './lib/DOMProxy.js'

const stars = new DOMProxy()

stars.getElement('.box--git')
stars.addClass('.box--git', 'bg-blue')
stars.addClass('.box--git', 'bg-red')
stars.addClass('.box--react', 'bg-green')
stars.addClass('.box--react', 'bg-red')
