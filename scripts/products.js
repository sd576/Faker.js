const faker = require("faker");
const fs = require("fs");

// create 25 products
// const obj = 25;

// Generate products data
const products = [];
const itemTypes = [
  "polo_shirts",
  "sweatshirts",
  "t_shirts",
  "shorts",
  "socks",
  "jogging_bottoms",
];
const brands = ["Nike", "Adidas", "Reebok", "H&M", "Lacoste", "Ellesse"];
for (let i = 1; i < 25; i++) {
  const itemType = itemTypes[Math.floor(Math.random() * itemTypes.length)];
  const brand = brands[Math.floor(Math.random() * brands.length)];
  const price = Math.floor(Math.random() * 41) + 10;

  const product = {
    id: i,
    name: `${brand} ${itemType.charAt(0).toUpperCase() + itemType.slice(1)}`,
    brand: brand,
    price: price,
  };
  products.push(product);
}

// write the Products JSON object to a file in append mode
fs.appendFile(
  "../JSON_Output/products.json",
  JSON.stringify(products, null, 2) + "\n",
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Data written to file");
  }
);
