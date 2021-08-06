const router = require("express").Router();

module.exports = function (db) {
  router.get("/ingredients", (req, res) => {
    db.query(`SELECT * FROM ingredients`).then((response) => {
      return res.json(response.row[0]);
    });
  });

  router.post("/ingredients_add", (req, res) => {
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

  router.post("/ingredients_delete", (req, res) => {
    db.query(`DELETE FROM ingredients WHERE name = $1`, []);
  });

  return router;
};
