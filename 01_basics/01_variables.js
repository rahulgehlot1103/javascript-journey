const accountId = 12131
let accountEmail = "rahul@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;   //undefined
// accountId = 13131    //Not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


accountEmail = "rg@rg.com"
accountPassword = "42313"
accountCity = "Jaipur"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])