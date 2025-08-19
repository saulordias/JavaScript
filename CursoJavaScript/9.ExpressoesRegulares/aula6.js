//EXERCICIOS

const { cpfs, ips } = require ('./base.js');

// Encontrar os cps e encontrar os ips


console.log('Os CPFs são:', ' ' + cpfs.match(/[0+-9+]+/g)) // Cpfs
console.log(cpfs.match(/[0+-9+]+/g)) // Cpfs



console.log('Os Ips são:', ' ' + ips.match(/[0+-9+]+/g)) // Ips


console.log('######################');

//resposta PROFESSOR
//Como ir melhorando a expressão regular
// console.log(cpfs.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/g)); // CPF
// console.log(cpfs.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g)); // CPF
// console.log(cpfs.match(/(\d{3}\.){2}\d{3}-\d{2}/g)); // CPF 


console.log('########### IPS ###########');

// ^ usando sozinho == começa com
// $ = Termina com


// 250-255 -- 25[0-5]
// 200-249 -- 2[0-4][0-9]
// 100-199 -- 1\d{2}
// 10-99 -- \d{2}
// 0-9 --- \d

const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|\d{2}|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|\d{2}|\d)/g;

// for (let i=0; i<=300; i++){
//     const ip = `${i}.${i}.${i}.${i}`;
//     console.log(ip, ip.match(ipRegExp));
// }

console.log(ips.match(ipRegExp));






