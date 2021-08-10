module.exports = function (db, router) {
  router.post("/ingredients", (req, res) => {
    const body = req.body;

    db.query(
      `INSERT INTO ingredients(name, ing_image) VALUES($1, $2) RETURNING *`,
      [body.name, body.image]
    )
      .then((response) => {
        return res.json(response.rows[0]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  router.get("/ingredients", (req, res) => {
    db.query(`SELECT * FROM ingredients`).then((response) => {
      return res.json(response.rows);
    });
  });

  router.post("/ingredients_delete", (req, res) => {
    const body = req.body;
    db.query(`DELETE FROM ingredients WHERE name = $1`, [body.name]).then(
      (response) => {
        return res.json(response.rows[0]);
      }
    );
  });

  return router;
};
