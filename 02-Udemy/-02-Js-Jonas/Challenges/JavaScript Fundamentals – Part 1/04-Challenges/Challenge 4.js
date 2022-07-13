/* CODING CHALLENGE #04 */
const bill = 430;
let tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value 
${bill + tip}`)
