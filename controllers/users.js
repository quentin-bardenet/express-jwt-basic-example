const { find, create } = require("../models/users");

const getUsers = async (req, res) => {
  const [data] = await find();
  res.json(data);
};

const createUser = async (req, res) => {
  try {
    await create(req.body);
    res.status(200).send("ok");
  } catch (error) {
    res.status(500).send("Error");
  }
};

module.exports = { getUsers, createUser };
