const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.route");
const productRoutes = require("./routes/product.route"); 
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json()); 


app.use("/api/users", userRoutes);

app.use("/api/products", productRoutes); 

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));