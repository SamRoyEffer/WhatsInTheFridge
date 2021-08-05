const router = require("express").Router();

module.exports = function (db) {
  router.get("/recipe", (req, res) => {
    db.query(
      `SELECT recipes.*, users.* FROM recipes
    JOIN users ON recipes.user_id = users.id
    WHERE recipes.user_id = $1
     `,
      []
    ).then((res) => {
      return res.rows[0];
    });
  });

  router.post("/recipe", (req, res) => {
    db.query(
      `INSERT INTO recipes(api_recipe_id) VALUES ($1) RETURNING *`,
      []
    ).then((res) => {
      return res.row[0];
    });
  });

  return router;
};
