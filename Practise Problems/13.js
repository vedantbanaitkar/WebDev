let products = [
  { name: "Product 1", price: 10, quantity: 2 },
  { name: "Product 2", price: 5, quantity: 3 },
  { name: "Product 3", price: 8, quantity: 1 },
];


function calcTot(products){
    let res = 0;
    products.forEach(element => {
        let cost = element["price"] * element["quantity"];
        res+=cost;
    });
    return res;
}

console.log(`Total cost = ${calcTot(products)}`);