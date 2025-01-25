export function ProductContainer({ products, setCart, cart }) {

    function handleAddToCart(product) {
        const existingProduct = cart.find((item) => item.productname === product.productname);
        
        if (existingProduct) {
            if (existingProduct.quantity < product.stock) {
                setCart((prevCart) => {
                    return prevCart.map((item) =>
                        item.productname === product.productname
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                });
            } else {
                alert('Oops! Out of stock!');
            }
        } else {
            setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
        }
    }

    return (
        <div className="product-list">
            {products.map((product, index) => (
                <div key={index} className="product-card">
                    <img className="product-container_img" 
                        src={product.image} 
                        alt={product.productname} 
                    />
                    <h2>{product.productname}</h2>
                    <p>Price: {product.price} SEK</p>
                    <p>Stock: {product.stock}</p>
                    <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}
