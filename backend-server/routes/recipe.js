module.exports = function (db, router) {
  router.get("/recipe", (req, res) => {
    // db.query(
    //   `SELECT recipes.*, users.* FROM recipes
    // JOIN users ON recipes.user_id = users.id
    // WHERE recipes.user_id = $1
    //  `,
    //   []
    // )
    // .then((response) => {
    //   return res.json(response.rows[0]);
    // })
    // .catch((err) => {
    //   console.log(err.message);
    // });
    res.json(["cow", "meat", "burger"]);
  });

  router.post("/recipe_add", (req, res) => {
    db.query(
      `INSERT INTO recipes(api_recipe_id, user_id) VALUES ($1, $2) RETURNING *`,
      []
    ).then((res) => {
      return res.row[0];
    });
  });

  router.post("/recipe_delete", (req, res) => {
    db.query(`DELET FROM recipes WHERE id = $1`, []);
  });
  return router;
};
