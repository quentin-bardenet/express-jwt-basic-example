const db = require("../db");

const find = async () => {
  return db.promise().query("select * from Users");
};

const create = async ({ firstname, lastname }) => {
  return db
    .promise()
    .query("INSERT INTO Users (firstname, lastname) VALUES (?, ?)", [
      firstname,
      lastname,
    ]);
};

module.exports = { find, create };
