const express = require("express");
const router = express.Router();

const Product = require("../db");
const zod = require("zod");
const zodProductSchema = zod.object({
    id: zod.string(),
    name: zod.string(),
    price: zod.number(),
    category: zod.string(),
})


/* Get the data from the backend */
/* Get request */
router.get("/", async (req,res) => {
    try {
        const products = await Product.find(); //returns a promise (asynchronous function)
        res.send(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error fetching products"});
    }
})

/* Post request */
/* Upload product */
router.post("/", async (req,res) => {
    try {

        /* Before create a new product just check, Whether uploaded item is valid or not */
        const { success } = zodProductSchema.safeParse(req.body);
        if(!success) {
            res.status(400).json({message: "Invalid request"});
        }
        
        /* Is product already existed or not (Using .find()) */
        const existingProduct = await Product.findOne({ id: req.body.id });
        
        if(existingProduct) {
            return res.status(400).json({message: "Product is already existed"});
        }
    
        const newProduct = new Product(req.body);
        await newProduct.save();
        console.log(newProduct);
        res.status(201).json({
            message: "Product created successfully",
            product: newProduct,
        });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
})

/* Delete a product */
router.delete("/:id", async (req,res) => {
    const productId = req.params.id;
    try{
        const isProductIdExist = Product.findOne({ id: productId });
        if(!isProductIdExist){
            return res.status(404).json({message: "Product not found"});
        }
        const deletedProduct = await Product.deleteOne({id: productId})
        res.status(200).json({message: "Product deleted successfully"});
        
    } catch(error) {
        console.log(error);
        res.status(500).json({message: "Error deleting product"});   
    }
}) 

router.get("/gt", async (req,res) => {
    try {
        const products = await Product.find({price: { $gt: 100}});  
        res.send(products); 
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error fetching products"});
    }
})



module.exports = router;