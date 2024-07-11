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

async function readFileAsync(filePath) {
  try {
    const data = await readFile(filePath);
    console.log("File content1111:\n", data);
    // Optionally, write the read data to another file
    const message = await writeFile("ex2.txt", data);
    console.log(message);
  } catch (err) {
    console.log("Error read/write:", err);
  }
}

// Example usage with a valid file path:
readFileAsync("ex2.txt");
