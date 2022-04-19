const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

//Routes

app.get("/v1/google-status", (req, res) => {
    res.json({
    "url": "https://www.google.com",
    "statusCode": 200,
    "duration": 154,
    "date": new Date().getTime() });
  });

  app.get("/v1/amazon-status", (req, res) => {
    res.json({
    "url": "https://www.amazon.com",
    "statusCode": 200,
    "duration": 154,
    "date": new Date().getTime() });
  });

  app.get("/v1/all-status", (req, res) => {
    res.json([
        {
            "url": "https://www.google.com",
            "statusCode": 200,
            "duration": 150,
            "date": new Date().getTime()
        },
        {
            "url": "https://www.amazon.com",
            "statusCode": 200,
            "duration": 273,
            "date": new Date().getTime()
        }
    ]);
  });


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});