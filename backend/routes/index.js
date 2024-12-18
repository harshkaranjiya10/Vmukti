// Import Express
const express = require("express");
const router = express.Router();

const Product = require("../db");
const zod = require("zod");

// Zod for validation
const zodProductSchema = zod.object({
    id: zod.string(),
    name: zod.string().min(1),
    price: zod.number().positive(),
    category: zod.string().min(1),
})


// Get the data from the backend 
// Get request 
router.get("/", async (req,res) => {
    try {
        const products = await Product.find(); //returns a promise (asynchronous function)
        res.send(products);
    } catch (error) {
        // Error handling
        console.log(error);
        res.status(500).json({message: "Error fetching products"});
    }
})


// Upload product 
router.post("/", async (req,res) => {
    try {
        // Before create a new product just check
        // Schema for Validation using Zod
        const { success } = zodProductSchema.safeParse(req.body);
        if(!success) {
            return res.status(400).json({message: "Invalid request"});
        }
        
        // Is product already existed or not (Using .find()) 
        const existingProduct = await Product.findOne({ id: req.body.id });
        
        if(existingProduct) {
            return res.status(400).json({message: "Product is already existed"});
        }
        
        // All the validation correct
        // Create new Product
        const newProduct = new Product(req.body);
        await newProduct.save();
        console.log(newProduct);
        res.status(201).json({
            message: "Product created successfully",
            product: newProduct,
        });
    } catch (error) {
        // Error handling
        console.error("Error creating product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
})

// Delete a product 
router.delete("/:id", async (req,res) => {
    const productId = req.params.id;
    try{
        // check the productIdisExist or not 
        const isProductIdExist = Product.findOne({ id: productId });
        if(!isProductIdExist){
            return res.status(404).json({message: "Product not found"});
        }
        
        // Delete the product
        const deletedProduct = await Product.deleteOne({id: productId})
        res.status(200).json({message: "Product deleted successfully"});
        
    } catch(error) {
        // Error handling
        console.log(error);
        res.status(500).json({message: "Error deleting product"});   
    }
}) 

router.get("/gt", async (req,res) => {
    try {
        // Get the products with price greater than 100
        const products = await Product.find({price: { $gt: 100}});  
        res.send(products); 
    } catch (error) {
        // Error handling
        console.log(error);
        res.status(500).json({message: "Error fetching products"});
    }
})



module.exports = router;