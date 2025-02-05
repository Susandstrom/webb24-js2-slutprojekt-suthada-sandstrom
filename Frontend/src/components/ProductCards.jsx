export function ProductCards({image, productname, price,stock,cart,setCart, onHandleAddToCart}){

    function handleMyCart(){
        const numberOfProductsInCart = cart.filter(item => item.productname === productname).length;
        
        if (numberOfProductsInCart < stock){
            setCart([...cart, { productname, price, stock, image }]);
            onHandleAddToCart({image, productname, price, stock});
        } else{
            alert("Sorry, we are out of stock!");
        }

    };
    return(
        <div className="product-card_box">
            <img className="product-image" src={image} alt={productname}/>
            <h2>{productname}</h2>
            <p>Price: {price} SEK</p>
            <p>In stock: {stock}</p>
            <button className="buyButton" onClick={handleMyCart} disabled={stock === 0}>Add to Cart</button>
        </div>
    )
    
}