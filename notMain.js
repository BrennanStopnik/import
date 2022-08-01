// Using export helps get it to work in a different file, ie. main.js
    // Both "add's" are the same but written with the console.log in different places


export let add = (a,b) => {
    let sum = a + b;
    console.log(`The sum of a + b is: ${sum}`);
}

export let add2 = (a,b) => {
    let sum = a + b;
    return`The sum of a + b is: ${sum}`;
}


export let subtract = (a,b) => {
    let dif = a - b;
    return dif;
}