const router = require("express").Router();

module.exports = function (db) {
  router.get("/fridge", (req, res) => {
    db.query(
      `SELECT * FROM fridge INNER JOIN ingredients ON fridge.ingredient_id = ingredients.id `
    ).then((response) => {
      return res.json(response.row[0]);
    });
  });

  router.post("/fridge_adding", (req, res) => {
    db.query(`INSERT INTO ingredients(api_name) VALUES($1) RETURNING *`, [
      api_name,
    ])
      .then((response) => {
        return res.json(response.row[0]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return router;
};
