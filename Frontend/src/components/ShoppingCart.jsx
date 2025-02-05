import { updateProducts } from "../utils/fetchMyProducts.js";

export function ShoppingCart({setCurrentPage, cart =[], setCart, products, setProducts, setCartProducts}) {
    let totalPrice = 0;
    for(const cartProduct of cart){
        totalPrice = cartProduct.price;

    };
        
    //buy-cart
   function handleBuying(){
    console.log("cart", cart);
    const products = cart.map(item => item.productname);

    updateProducts(products);
    clearCart();
    setCurrentPage('success');

    setTimeout(() => {
        window.location.reload();
    }, 3000);
   };

    //clear
    function clearCart() {
        const updateProducts = products.map((product) => {
            const cartProduct = cart.find((item) => item.productname === product.productname);

            if(cartProduct) {
                return {...product, stock: product.stock};
            }
            return product;
        });

        setProducts(updateProducts);
        setCart([]);
        setCartProducts([]);
        setCurrentPage('browsing');

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
        <button onClick={()=> handleBuying('success')}>Complete your purchase</button>
        <button onClick={clearCart}>Clear My Cart</button>
    </div>
    );
}