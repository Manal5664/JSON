// Express package import kar rahe hain
// Express ek framework hai jo: server banata hai API create karta hai

const express = require("express");

const app = express();

app.use(express.json());

let contacts = [];

app.post("/contact", (req, res) => {

  const data = req.body;

  contacts.push(data);

  res.json({
    message: "Data saved",
    data: data
  });

});

app.get("/contacts", (req, res) => {

  res.json(contacts);

});

app.put("/contact/:id", (req, res) => {

  const id = req.params.id;

  contacts[id] = req.body;

  res.json({
    message: "Data updated",
    data: contacts[id]
  });

});

app.delete("/contact/:id", (req, res) => {

  const id = req.params.id;

  contacts.splice(id, 1);

  res.json({
    message: "Data deleted"
  });

});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});