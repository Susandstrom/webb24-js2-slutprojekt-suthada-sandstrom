export async function fetchMyProducts( ) {
    const url = 'http://localhost:3000/api/products';

    const res = await fetch(url);
    const data = await res.json();

    return data;
    
}

export async function updateProducts(products) {

    const url = 'http://localhost:3000/api/products/updates';

    const res = await fetch(url,{
        method: "POST",
        body: JSON.stringify(products),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    res.json();
}
