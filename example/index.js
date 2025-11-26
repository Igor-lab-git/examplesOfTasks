// let firstValue = null;
// const secondValue = true;

// console.log(firstValue ??= "Jenna");


const user = {
    name: "Jenna",
    age: 23,
    isLove: true
}

for(let nameKey in user) {
    console.log(`${nameKey}: ${user[nameKey]}`);
    
}