/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const result = {};
  for(let tx of transactions){
    const category = tx.category;
    const price = tx.price;
    if(!result[category]){
        result[category]=0;
    }
    result[category] += price;
  }
  const output = [];
  for(let category in result){
    output.push({
        category:category,
        totalSpent:result[category]
    });
  }
  return output;

}

const trnsac = [
  { price: 10, category: 'Food' },
  { price: 20, category: 'Food' },
  { price: 50, category: 'Travel' },
  { price: 50, category: 'Travel' },
  { price: 95, category: 'Food' },
  { price: 100, category: 'Dance' },
]
console.log(calculateTotalSpentByCategory(trnsac));