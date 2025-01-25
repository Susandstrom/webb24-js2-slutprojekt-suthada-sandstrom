import { updateProducts } from "../utils/fetchMyProducts.js";

export function ShoppingCart({setCurrentPage, cart =[], setCart, products, setProducts, setCartProducts}) {
    if(!Array.isArray(cart)){
        console.error("Expected cart to be an array", typeof cart);
        return <div>Error</div>;
    }
    
    const totalPrice = cart.reduce((total, product) =>{
        return total + product.price * product.quantity;
    },0);

    //buy-cart
   function handleBuying(){
    console.log("cart:",cart);
    const productnames = cart.map(item => item.productname);

    updateProducts(products);
    clearCart();
    setCurrentPage('success');
   }

    //clear
    function clearCart() {
        const updateProducts = products.map((product) => {
            const cartProduct = cart.find((item) => item.productname === product.productname);

            if(cartProduct) {
                return {...product, stock: product.stock - cartProduct.quantity};
            }
            return product;
        });

        setProducts(updateProducts);
        setCart([]);

    }
    return(
        <div className="cart">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
            <p> Your cart is empty!</p>
        ) : (
            cart.map((product, index) => (
                <p key={index}> {product.productname} : {product.price} SEK</p>
            ))
        )}
        <p>Total Price: {totalPrice} SEK</p>
        <button onClick={handleBuying}>Complete your purchase</button>
        <button onClick={clearCart}>Clear My Cart</button>
    </div>
    );
}