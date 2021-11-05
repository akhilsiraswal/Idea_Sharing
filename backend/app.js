require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const ideaRoutes = require("./routes/idea");
//! middlewares..

app.use(cors());
app.use(cookieParser());
app.use(express.json({ limit: "20mb" }));

//! Routes...
app.use("/api", authRoutes);
app.use("/api", ideaRoutes);

//! SERVER...
app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});

//! DATABASE...
// console.log(process.env.MONGODB_URL);
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

mongoose.set("useCreateIndex", true);

app.get("/", (req, res) => {
  res.json({
    message: "currently running ",
  });
});
