var unusedVar = require("path");

// Lint this file to test various linting rules
console.log("Hello world");

function testFunc(unusedArg) {
  return Promise.resolve(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

testFunc.then(() => {
  console.log("Rejected promises aren't handled here.");
});
