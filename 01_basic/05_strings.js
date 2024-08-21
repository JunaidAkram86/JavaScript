const name = "Junaid"
const repoCount = 50
//string interpoiltion
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String('Junaid-PC')
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,6)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "          Junaid   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://junaid.com/junaid%20akram"
console.log(url.replace('%20','-'));

console.log(url.includes('junaid'))

console.log(gameName.split('-'));




