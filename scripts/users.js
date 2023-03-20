const faker = require("faker");
const fs = require("fs");

// Generate 10 users
const users = [];
for (let i = 1; i < 10; i++) {
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

// write the Users JSON object to a file in append mode
fs.appendFile(
  "../JSON_Output/users.json",
  JSON.stringify(users, null, 2) + "\n",
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Data written to file");
  }
);
