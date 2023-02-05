// NUMBERS

let numb1 = new Number(17.55);
let numb2 = "Hello";
let numb3 = "175";
let numb4 = "181";
let numb5 = 19.45;

let numberString1 = "";

numberString1 += `${numb1} is a ${typeof numb1} </br>`;

numberString1 += `${numb2} is a ${typeof numb2} </br>`;

if (Number.isNaN(numb1)) {
  numberString1 += `${numb1} is NOT a number </br>`;
} else {
  numberString1 += `${numb1} is DEFINITELY a number </br>`;
}

if (!Number.isNaN(numb2)) {
  numberString1 += `${numb2} is NOT a number </br>`;
} else {
  numberString1 += `${numb2} is DEFINITELY a number </br>`;
}

numberString1 += `Adding String Value ${numb3} to String Value ${numb4} gives ${
  numb3 + numb4
} </br>`;

numberString1 += `Adding String Value ${numb3} to Number Value ${numb1} gives ${
  numb3 + numb1
} </br>`;

numberString1 += `Adding number Value ${numb1} to Number Value ${numb5} gives ${
  numb1 + numb5
} </br>`;

document.getElementById("datatype1").innerHTML = numberString1;

let numberString2 = "";

numberString2 += `The maximum safe integer in JavaScript = ${Number.MAX_SAFE_INTEGER} </br>`;

numberString2 += `The smallest interval between two representable numbers = ${Number.EPSILON} </br>`;

numberString2 += `The largest positive representable number = ${Number.MAX_VALUE} </br>`;

numberString2 += `The maximum safe integer in JavaScript = ${Number.MAX_SAFE_INTEGER} </br>`;

numberString2 += `The minimum safe integer in JavaScript = ${Number.MIN_SAFE_INTEGER} </br>`;

numberString2 += `The smallest positive representable number—that is, the positive number closest to zero = ${Number.MIN_VALUE} </br>`;

numberString2 += `Special value representing negative infinity. Returned on overflow = ${Number.NEGATIVE_INFINITY} </br>`;

numberString2 += `Special value representing infinity. Returned on overflow = ${Number.POSITIVE_INFINITY} </br>`;

document.getElementById("datatype2").innerHTML = numberString2;

// STRINGS

let string1 = "The people enjoy the afternoon sun";
let string2 = true;

let stringString1 = "";

if (typeof string1 === "string") {
  stringString1 += `Yes - "${string1}" is DEFINITELY a string </br>`;
} else {
  stringString1 += `No - "${string1}" is NOT a string </br>`;
}

if (typeof string2 === "string") {
  stringString1 += `Yes - "${string2}" is DEFINITELY a string </br>`;
} else {
  stringString1 += `No - "${string2}" is NOT a string </br>`;
}

document.getElementById("datatype3").innerHTML = stringString1;
