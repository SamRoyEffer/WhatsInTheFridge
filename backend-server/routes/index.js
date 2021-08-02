let express = require("express");
const router = express.Router();
const { getUserByEmailAndPassword, addUser } = require("../helpers/dbHelpers");

/* GET home page. */

module.exports = function (router, database) {
  router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
  });

  //create
  router.get("/register", (req, res) => {
    res.render("register");
  });

  router.post("/register", (req, res) => {
    const user = req.body;
    user.password = bycrypt.hashSync(user.password, 12);
    database
      .addUser(fullName, email, password)
      .then((user) => {
        if (!user) {
          res, send({ error: "error" });
          return;
        }
      })
      .catche((e) => res.send(e));
  });

  //authentication
  router.get("/login", (req, res) => {
    const userCookie = req.cookies;

    if (userCookie) {
      res.redirect("/userPage");
    } else {
      templateVars = {
        user: null,
      };
    }

    res.render("login", templateVars);
  });

  router.post("/login", (req, res) => {
    const { email, password } = req.body;
    getUserByEmailAndPassword(email, password)
      .then((user) => {
        if (!user) {
          res.send({ error: "error" });
          return;
        }
        req.cookies.userId = user.id;
        res.send({ user: { name: user.name, email: user.email, id: user.id } });
      })
      .catch((e) => res.send(e));
  });

  return router;
};
