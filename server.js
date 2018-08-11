const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

let app = express();

let PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log(`Express Server is listening on PORT: ${PORT}`);
});