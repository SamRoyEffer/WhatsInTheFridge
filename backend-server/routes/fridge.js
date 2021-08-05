const router = require("express").Router();

module.exports = function (db) {
  router.get("/fridge", (req, res) => {
    db.query(
      `SELECT * FROM fridge
      JOIN fridge on fridge.user_id = users.id 
      WHERE users.id = $1`,
      [user.id]
    ).then(({ rows: fridge }) => {
      res.json();
    });
  });

  return router;
};
