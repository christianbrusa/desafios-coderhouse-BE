const express = require("express");
const router = require("./init/routes");

const app = express();
const port = 8080;

app.use("/api/productos", router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});