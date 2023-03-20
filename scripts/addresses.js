const faker = require("faker");
const fs = require("fs");

// set the locale to UK
faker.locale = "en_GB";

// create 10 addresses
const numObjects = 10;

for (let i = 0; i < numObjects; i++) {
  const obj = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    address: {
      street: faker.address.streetName(),
      city: faker.address.city(),
      county: faker.address.county(),
      postcode: faker.address.zipCode(),
      country: "United Kingdom",
    },
    phone: faker.phone.phoneNumber(),
  };

  // append each generated file to the JSON object to a file
  fs.appendFile(
    "../JSON_Output/addresses.json",
    JSON.stringify(obj, null, 2) + "\n",
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Data written to file");
    }
  );
}
