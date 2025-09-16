const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "../../data.json");

async function saveToFile(data) {
  await fs.writeFile(filePath, data, "utf8");
}

async function readFromFile() {
  try {
    const content = await fs.readFile(filePath, "utf8");
    return JSON.parse(content);
  } catch (err) {
    // If file doesn't exist, return empty object
    if (err.code === "ENOENT") return {};
    throw err;
  }
}

module.exports = { saveToFile, readFromFile };
