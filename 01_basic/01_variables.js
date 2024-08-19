const accountId = 1234
let accountEmail = "Junaid@gmail.com"
var accountPassword = "12345"
accountCity = "Gujrat"
let accountState;

//accountId = 2
accountEmail = "test@gmail.com"
accountPassword = "321564"
accountCity = "Islamabad"
/*
prefer not to use var because of issue in block scope and functional scope
instead use let is used to create variables 
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassword, accountCity,accountState])
