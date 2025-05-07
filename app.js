const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const blogRoutes = require("./routes/blog.routes");

app.use(express.json());
app.use(cors());

app.use("/api", blogRoutes);

app.listen(port, function () {
  console.log(`App is running on ${port}`);
});
