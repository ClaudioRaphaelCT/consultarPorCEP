const { json } = require("express");
const express = require("express");
const router = require("./routers/router");
const app = express();
app.use(json());

app.use("/", router);

app.listen(3000, () => {
  console.log(`API online em: http://localhost:3000`);
});