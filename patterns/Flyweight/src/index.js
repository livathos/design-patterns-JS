import CarCollection from './lib/CarCollection'

const cars = new CarCollection()

cars.add('Audi', 'A7', 'petrol', '2017', 'RRS3311')
cars.add('Audi', 'A7', 'petrol', '2016', 'KRS4341')
cars.add('Audi', 'A7', 'petrol', '2018', 'WR4234')
cars.add('Audi', 'A7', 'petrol', '2019', 'OPA8621')
cars.add('Audi', 'A7', 'petrol', '2017', 'SAD8621')
cars.add('Audi', 'Q3', 'petrol', '2016', 'RQA4621')
cars.add('BMW', 'M3', 'petrol', '2016', 'TAR1421')
cars.add('BMW', 'M3', 'petrol', '2015', 'UAD3421')
cars.add('BMW', 'M3', 'petrol', '2016', 'DAS5471')

const carsLength = Object.keys(cars.get()).length
document.querySelector('#carsCounter').innerHTML = carsLength
