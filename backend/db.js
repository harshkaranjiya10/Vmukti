const mongoose = require("mongoose");
/* Connect to the mongoDB */
mongoose.connect(
  "mongodb+srv://harsh:harsh1010@cluster0.mima1.mongodb.net/vmukti"
);

/* Define the Schema */
const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

/* Create a model using above schema*/
const Product = mongoose.model("Product", productSchema);

module.exports = Product ;
