const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 1500,
  },
  {
    id: 2,
    name: "T-shirt",
    category: "Apparel",
    price: 25,
  },
  {
    id: 3,
    name: "Coffee Maker",
    category: "Home Appliances",
    price: 80,
  },
  {
    id: 4,
    name: "Headphones",
    category: "Electronics",
    price: 200,
  },
  {
    id: 5,
    name: "Jeans",
    category: "Apparel",
    price: 50,
  },
  {
    id: 6,
    name: "Blender",
    category: "Home Appliances",
    price: 60,
  },
  {
    id: 7,
    name: "Smartphone",
    category: "Electronics",
    price: 800,
  },
  {
    id: 8,
    name: "Sweater",
    category: "Apparel",
    price: 45,
  },
  {
    id: 9,
    name: "Microwave",
    category: "Home Appliances",
    price: 120,
  },
  {
    id: 10,
    name: "Camera",
    category: "Electronics",
    price: 600,
  },
];

function search(input) {
  if (isNaN(input)) {
    let words = input.split(" ");

    // Capitalize the first letter of each word
    let capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    // Join the words back into a single string
    input = capitalizedWords.join(" ");
  }
  console.log(input);
  let newArr = [];
  products.forEach((element) => {
    if (
      element["category"] == input ||
      element["name"] === input ||
      element["id"] == input
    ) {
      newArr.push(element);
    }
  });
  return newArr;
}

// console.log(search("Electronics"));
// console.log(search("Apparel"));
console.log(search(10));
