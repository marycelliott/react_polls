const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
// TELLS EXPRESS TO RESPOND IN JSON DATA AND ALLOWS US TO POST FORM DATA TO BACKEND
app.use(express.json(), express.urlencoded({ extended: true }));

// BRINGS IN MONGOOSE CONNECTION
require("./server/config/mongoose");

// same as: require("./server/routes/authors")(app);
const routes = require("./server/routes/polls");
routes(app);

app.listen(8000, () => console.log("Listening on PORT 8000"));
