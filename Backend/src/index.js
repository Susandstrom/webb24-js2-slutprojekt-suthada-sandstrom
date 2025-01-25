import express from "express";
import cors from "cors";
import * as db from "./DB.js"; //Importera allt från fil (DB).

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/products', async (req, res) =>{
    const products = await db.getProducts()
    res.json(products);
})

app.post('/api/products/updates', async(req, res) => {
    let Products = await db.getProducts();
    console.log(req.body);

    products = await db.updateProducts(req.body);
    res.json([db.updateProducts]);
})

app.listen(PORT, ()=> {
    console.log('Listening on PORT', PORT);
})