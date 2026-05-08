//singleton
// Object.create()


const mySym = Symbol("key1")
//object Literal
let User = {
    name : "Tariq",
    id : 17841,
    age : 21,
    // mySym : "MyKey",  string
    [mySym] : "myKey",
    email : "tariq@google.com",
    address : "Peshawar",
    isLoggedIn : false,
    lastOnlineDays : ["saturday", "Sunday"]

}

// console.log(User.name);
// console.log(User["age"]);
// console.log(typeof User.mySym);


// console.log(User);

User.email = "tariq@amazon.com"

// console.log(User.email);

// Object.freeze(User)

User.email = "tariq@uber.com"

// console.log(User);

User.greeting = function(){
    console.log("Hello User");
    return
    
}
/* User.greeting() call hua
Function ke andar "Hello User" print hua
Function ne kuch return nahi kiya
JavaScript default me undefined return karta hai
console.log(...) us returned value ko print kar raha hai */

console.log(User.greeting());
// User.greeting()

User.greeting2 = function(){
    console.log(`Hello ${this.name}`);
    
}

User.greeting2()

