// Using Import will get the function from the other page and let us run it here.

import { add } from "./notMain.js";
import { add2 } from "./notMain.js";
import { subtract } from "./notMain.js";

add(5,6);
console.log(add2(5,6));

console.log(`Subtracting b from a is: ${subtract(6,5)}`)