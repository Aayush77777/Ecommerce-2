const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://neupanesajan77:X1lb2ljh9HgOPAQk@orders.mcugttb.mongodb.net/",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use("/orders", orderRoutes);
app.get('/', async(req, res) => {
res.send("Hello")
})

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
