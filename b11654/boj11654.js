const fs = require('fs');
const str = fs.readFileSync('./b11654/input11654.txt').toString().trim();

const asci_str = str.charCodeAt(0);
console.log(asci_str);