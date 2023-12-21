const accountId = 14453
let accountEmail = "visheshnarwal32@gmail.com"
var accountPassword = "12345"
accountCity = "Haryana"
let accountState;

// accountId = 2 not allowed
accountEmail = "hcc@gmail.com"
accountPassword = "24411"

console.log(accountId);

/* Prefer not to use var because of issue in block scope and functional scope 
*/

console.table([accountId, accountPassword, accountCity,accountState])