import fs from 'fs/promises';

async function getProducts() {
    const rawDB = await fs.readFile('./src/myProducts.json');
    return JSON.parse(rawDB);
    //console.log(rawDB);
}

async function updateProducts(products) {
    const rawDB = await fs.readFile('./src/myProducts.json');
    let dbProducts = JSON.parse(rawDB);
    
    //console.log(dbProducts);

    for(const productString of products) {
        console.log(productString, 'yttre');

        for(const productObs of dbProducts){
            console.log(productObs.stock, 'inre');
            if(productObs.productname === productString) {
                //uppdatering av stock
                productObs.stock--;
                console.log("match");
                break; //avbryt loop
            }
        }
    }

    await fs.writeFile('./src/myProducts.json', JSON.stringify(dbProducts, null, 2));
}

export {getProducts, updateProducts};