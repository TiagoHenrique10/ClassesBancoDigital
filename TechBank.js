const App = require("./App")

App.createUser("maria@email.com", "Maria Silva")
App.createUser("henrique@gmail.com", "Henrique Souza")
App.createUser("gabriel@yahoo.com", "Gabriel Ferreira")

App.deposit("maria@email.com", 200)

App.transfer("maria@email.com", "gabriel@yahoo.com" , 50)

App.changeLoanFee(10)

App.takeLoan("henrique@gmail.com", 3000, 12)

console.log(App.findUser("maria@email.com"))
console.log(App.findUser("maria@email.com").account)
console.log(App.findUser("gabriel@yahoo.com"))
console.log(App.findUser("gabriel@yahoo.com").account)
console.log(App.findUser("henrique@gmail.com"))
console.log(App.findUser("henrique@gmail.com").account)
console.log(App.findUser("henrique@gmail.com").account.loans[0].installments)