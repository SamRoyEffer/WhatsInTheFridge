/* GET home page. */

module.exports = function (router) {
  console.log("index.js module.exports");
  router.get("/", function (req, res) {
    console.log("********");

    return res.send("inblock index.js");
  });

  router.get("/loggs", function (req, res, next) {
    res.send("Helloe Wrolds");
  });

  return router;
};
