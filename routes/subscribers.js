const express = require("express");
// we want to the router portion of the react
const router = express.Router();

//importing the mongo db schema model to use
const Subscriber = require("../models/subscriber");
//Routes for

//getting all
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.send(subscribers);
  } catch (error) {
    res.json({ message: error.message });
  }
});

//getting one
router.get("/:id", async (req, res) => {
  res.send(`hey boy it's the get id : ${req.params.id} api request`);
  // ":" before id means that the id is the parameter,
  // we can acess the prameter using the  req.params.id;
});

//creating one
router.post("/", async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscriberToChannel: req.body.subscriberToChannel,
    subscribeDate: req.body.subscribeDate,
  });
  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//deleting one
router.delete("/:id", (req, res) => {});
//updating one
router.patch("/:id", (req, res) => {}); // we use the the patch instead of the put cz, by patch we'll only update the required field
// and by the put method we have to update all the fields or data

module.exports = router;

// const server = require("../server");
