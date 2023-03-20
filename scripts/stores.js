const faker = require("faker");
const fs = require("fs");

// set the locale to UK
faker.locale = "en_GB";

// Generate stores data
const stores = [];
for (let i = 1; i <= 4; i++) {
  const address = faker.address;
  const store = {
    id: i,
    name: "Stuart's Stores",
    address: {
      street: address.streetAddress(),
      city: address.city(),
      county: address.county(),
      postcode: address.zipCode(),
      country: "United Kingdom",
    },
  };
  stores.push(store);
}

// write the Stores JSON object to a file in append mode
fs.appendFile(
  "../JSON_Output/stores.json",
  JSON.stringify(stores, null, 2) + "\n",
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Data written to file");
  }
);
