const accId = 178345;
let accEmail = "tariq@google.com"
var accPass = "1234"
accCity = "Peshawar"


// accId = 123456 reassignment is not allowed with const keyword
accEmail = "tariq@micro.com"
accPass = "4321"
accCity = "ISB"

console.log(accId);

console.table([accId, accEmail, accPass, accCity])
