const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { saveToFile, readFromFile } = require("./utils/fileHandler");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());

app.post("/post", (req, res) => {
  const inputs = req.body;

  if (!inputs || Object.keys(inputs).length === 0) {
    return res.status(400).json({ error: "Input data is required" });
  }

  saveToFile(JSON.stringify(inputs, null, 2))
    .then(() => res.status(200).json({ message: "Inputs saved successfully" }))
    .catch((err) =>
      res
        .status(500)
        .json({ error: "Failed to save inputs", details: err.message })
    );
});

app.get("/data", (req, res) => {
  readFromFile()
    .then((content) => res.status(200).json(content))
    .catch((err) =>
      res
        .status(500)
        .json({ error: "Failed to read data", details: err.message })
    );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
