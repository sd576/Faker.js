# Faker.js
Using Faker.js to generate fake JSON files for API Back End testing and to save anyone the 
onerous task of manually typing out the files.

Faker is used to generate JSON files for JSON-Server's db.json file. If these files are run from within the 'Scripts' 
folder, the output file is then written to the 'JSON_Output' folder with the same name as the JavaScript file.

In total there are 5 files:

  - addresses.js
  - all.js
  - products.js
  - stores.js
  - users.js

Descriptions:

'all.js' - contains randomly generated store, products and users all in one json file
'addresses.js' - contains 10 x randomly generated UK addresses
'products.js' - contains 25 x randomly generated products of specific brands
'stores.js' - contains 4 x randomly generated UK based stores
'users.js' - contains 10 x randomly generated users

The code for these files can be changed so that the endpoints/resources more accurately reflect what you are testing. 
The point being is they can be tailored with a few minimal changes. 
