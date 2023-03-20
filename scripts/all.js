const faker = require("faker");
const fs = require("fs");

// set the locale to UK
locale = "en_GB";

// define the address
let address = {
  street: faker.address.streetAddress(),
  city: faker.address.city(),
  county: faker.address.county(),
  postcode: faker.address.zipCode(),
  country: faker.address.country(),
};

// Generate stores data
const stores = [];
for (let i = 1; i <= 4; i++) {
  const store = {
    id: i,
    name: "Stuart's Stores",
    address: {
      street: address.street,
      city: address.city,
      county: address.county,
      postcode: address.postcode,
      country: "United Kingdom",
    },
  };
  stores.push(store);
}

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
for (let i = 1; i <= 25; i++) {
  const itemType = itemTypes[Math.floor(Math.random() * itemTypes.length)];
  const brand = brands[Math.floor(Math.random() * brands.length)];
  const price = Math.floor(Math.random() * 91) + 10;

  const product = {
    id: i,
    name: `${brand} ${itemType.charAt(0).toUpperCase() + itemType.slice(1)}`,
    brand: brand,
    price: price,
  };
  products.push(product);
}

// Generate 10 users
const users = [];
for (let i = 1; i <= 10; i++) {
  const user = {
    id: i,
    username: `user${i}`,
    password: `password${i}`,
    email: `user${i}@example.com`,
    firstName: `User`,
    lastName: `${i}`,
  };
  users.push(user);
}

// create a JavaScript object that holds all the data
const allData = {
  stores: stores,
  products: products,
  users: users,
};

// write the object to a file in append mode
fs.appendFile(
  "../JSON_Output/all.json",
  `const allData = ${JSON.stringify(allData, null, 2)};\n`,
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Data written to file");
  }
);
