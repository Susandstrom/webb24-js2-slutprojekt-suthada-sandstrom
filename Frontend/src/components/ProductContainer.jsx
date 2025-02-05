import { ProductCards } from "./ProductCards";

export function ProductContainer({ products, setCart, cart, onHandleAddToCart}) {

    return (
        <div className="product-list">
        {products.map(
                ({ image, productname, price, stock}, id ) => <ProductCards key={id} 
                image={image} 
                productname={productname} 
                price={price} 
                stock={stock} 
                setCart={setCart}
                cart={cart}
                onHandleAddToCart={onHandleAddToCart} />)}
        </div>
    );
}