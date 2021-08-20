const express = require("express");
const contactRoute = express.Router();
const Contact = require("../models/Contact");

//methode post
//path http://localhost:5000/contact
//body req.body
contactRoute.post("/", async (req, res) => {
  try {
    let newContact = new Contact({ ...req.body });
    let result = await newContact.save();
    res.send({ result, msg: "contact saved" });
  } catch (error) {
    res.status(400).send({ msg: "can not save contact" });
    console.log(error);
  }
});
//methode get
//path http://localhost:5000/contact/all
//body

contactRoute.get("/all", async (req, res) => {
  try {
    let result = await Contact.find();
    res.send({ result, msg: "contacts getted" });
  } catch (error) {
    res.status(400).send({ msg: "can not get contacts" });
    console.log(error);
  }
});

//methode delete
//path http://localhost:5000/contact/:id
//body _id

contactRoute.delete("/:id", async (req, res) => {
  try {
    let result = await Contact.deleteOne({ _id: req.params.id });
    result.n
      ? res.send({ result, msg: "contacts deleted" })
      : res.send({ result, msg: "contacts alreday deleted" });
  } catch (error) {
    res.status(400).send({ msg: "can not delete contacts" });
    console.log(error);
  }
});
//methode put
//path http://localhost:5000/contact/:id
//body req.body _id

contactRoute.put("/:id", async (req, res) => {
  try {
    let result = await Contact.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    result.nModified
      ? res.send({ result, msg: "contacts updated" })
      : res.send({ result, msg: "contacts alreday updated" });
  } catch (error) {
    res.status(400).send({ msg: "can not delete updated" });
    console.log(error);
  }
});

module.exports = contactRoute;
