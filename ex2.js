const fs = require("fs");

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function writeFile(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, "utf8", (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("File written successfully");
      }
    });
  });
}

// Example usage:
readFile("ex2.txt")
  .then((data) => {
    console.log("File content:\n", data);
    return writeFile("ex2.txt", data); // Writing the same data to another file
  })
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log("Error read/write:\n", err);
  });
