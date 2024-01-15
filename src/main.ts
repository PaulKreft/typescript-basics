const age: number = 10;

for (let i = 1; i <= age; i++) {
    console.log(i);
}

if (age > 18) {
    console.log("You're allowed to buy strong drinks")
} else {
    console.log("Sorry, you're not allowed to buy strong drinks")
}

const score: number = 0;

if (score) {
    console.log("score is available.")
}

if (score) {
    console.log("score is evaluated as truthy.")
} else {
    console.log("score is evaluated as falsy.")
}

const username: string = "";

if (username) {
    console.log("username is available.")
}

if (!username) {
    console.log("username is evaluated as falsy.")
} else {
    console.log("username is evaluated as truthy.")
}

const isAdmin: boolean = false;

if (isAdmin) {
    console.log("isAdmin is evaluated as truthy.")
} else {
    console.log("isAdmin is evaluated as falsy.")
}

if (isAdmin === false) {
    console.log("isAdmin is false.")
}