// Parse int extracts number from string but number must be at start
console.log(parseInt("42"));
console.log(parseInt("42HII"));
console.log(parseInt("42.px"));
console.log(parseInt("3.14"));

console.log("----------------");

console.log(parseFloat("45x"));
console.log(parseFloat("4.5x"));
console.log(parseFloat("45xasx"));
console.log(parseFloat("as45.0x"));
console.log(parseFloat("4.a5x"));