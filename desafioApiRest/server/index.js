const express = require("express");
const hbs = require("express-handlebars");
const path = require('path');
const router = require("./init/routes");

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const viewsPath = path.join(__dirname, '../views/layouts/');
app.engine("hbs", hbs.engine({defaultLayout: false, extname: "hbs"}));
app.set("view engine", "hbs");
app.set("views", viewsPath);
app.use(express.static("public"));

app.use("/api/productos", router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});