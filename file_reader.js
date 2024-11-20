const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE

let firstName;
let lastname;
let age;
let hobbiesArr;

fs.readFile("./firstname.txt", "utf-8")
  .then((data1) => {
    firstName = data1;
    return fs.readFile("./lastname.txt", "utf-8");
  })
  .then((data2) => {
    lastname = data2;
    return fs.readFile("./age.txt", "utf-8");
  })
  .then((data3) => {
    age = data3;
    return fs.readFile("./hobbies.txt", "utf-8");
  })
  .then((data4) => {
    hobbiesArr = data4
      .slice(1, -1)
      .split(",")
      .map((hobby) => hobby.trim().replace(/"/g, ""));
    const sentence = `${firstName} ${lastname} is ${age} years old and his hobbies are ${hobbiesArr[0]} and ${hobbiesArr[1]}`;
    console.log(sentence);
  })
  .catch((err) => {
    console.log(err);
  });

// ASYNC/AWAIT SOLUTION BELOW THIS LINE

let firstNameAsync;
let lastnameAsync;
let ageAsync;
let hobbiesAsync;
let hobbiesArrAsync;

async function getInfo() {
  try {
    firstNameAsync = await fs.readFile("./firstname.txt", "utf-8");
    lastnameAsync = await fs.readFile("./lastname.txt", "utf-8");
    ageAsync = await fs.readFile("./age.txt", "utf-8");
    hobbiesAsync = await fs.readFile("./hobbies.txt", "utf-8");
    hobbiesArrAsync = hobbiesAsync
      .slice(1, -1)
      .split(",")
      .map((hobby) => hobby.trim().replace(/"/g, ""));
    const sentence = `${firstNameAsync} ${lastnameAsync} is ${ageAsync} years old and his hobbies are ${hobbiesArrAsync[0]} and ${hobbiesArrAsync[1]}`;
    console.log(sentence);
  } catch (err) {
    console.log(err);
  }
}
getInfo();
