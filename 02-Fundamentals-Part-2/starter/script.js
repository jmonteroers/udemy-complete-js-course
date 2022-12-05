"use strict";

// More secure, avoid accidental errors:
// 1. Forbids us to do certain things
// 2. Creates errors for us instead of letting JS fail silently

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// Also introduces check for reserved keywords

// const interface = "Audio";

// Basic Array methods
const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends, newLength);

const newLengthAfterUnshift = friends.unshift("John");
console.log(friends, newLengthAfterUnshift);

// Remove elements
const removedFriend = friends.pop();
console.log(friends, removedFriend);

const removedFriend2 = friends.shift();
console.log(friends, removedFriend2);

// Is in array?
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Not a friend")); // Returns -1 if not in the array

// ES6 method, more user-friendly
console.log(friends.includes("Steven"));
// checks for strict equality!
friends.push(23);
console.log(friends.includes("23"));

// Loop backwards
for (let i = friends.length - 1; i >= 0; i--) {
  console.log(friends[i]);
}
