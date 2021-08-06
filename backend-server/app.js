let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
const db = require("./db");
const router = express.Router();
const dbHelpers = require("./helpers/dbHelpers")(db);
const cors = require("cors");

let indexRouter = require("./routes/index");
const fridgeRouter = require("./routes/fridge");
const ingredientsRoute = require("./routes/ingredients");
const recipeRoute = require("./routes/recipe");
const { allowedNodeEnvironmentFlags } = require("process");

let app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/api", indexRouter(router));
app.use("/api", fridgeRouter(db, router));
app.use("/api", ingredientsRoute(db, router));
app.use("/api", recipeRoute(db, router));
// app.listen(4000, () => {
//   console.log("Listen on port 4000");
// });

module.exports = app;
