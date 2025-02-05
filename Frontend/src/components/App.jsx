import { Navbar } from "./Navbar.jsx";
import { Error } from "./Error.jsx";
import { ShoppingCart } from "./ShoppingCart.jsx";
import { PaymentsConfirmation } from "./PaymentsConfirmation.jsx";
import { fetchMyProducts } from "../utils/fetchMyProducts.js";
import { ProductContainer } from "./ProductContainer.jsx";
import { useEffect, useState } from "react";

export function App(){

        const [currentPage, setCurrentPage] = useState('browsing'); 
        const [products, setProducts] = useState([]); //min produktlista
        const [cart, setCart] = useState([]); //cart produkter
        const [cartProducts, setCartProducts] = useState([]); // detaljer


        const onHandleAddToCart = (productItems) => {
            setCartProducts([...cartProducts, productItems]);
        };
       
        useEffect(() =>{
            fetchMyProducts()
            .then((fetchedProducts)=>{
                setProducts(fetchedProducts);
                setCurrentPage('browsing');
            })
                .catch(()=>{setCurrentPage('error');

                });
        },[])
        return(
            <>
                <header>
                    <Navbar setCurrentPage={setCurrentPage} cartProducts={cartProducts}/>
                </header>
                <main>
                    {currentPage == 'browsing' && (<ProductContainer products={products} setCart={setCart} cart={cart} onHandleAddToCart={onHandleAddToCart}/>)}
                    {currentPage == 'buying' && (<ShoppingCart setCurrentPage={setCurrentPage} cart={cart} setCart={setCart}  products={products} setProducts={setProducts} setCartProducts={setCartProducts}/>)}
                    {currentPage == 'error' && <Error/>}
                    {currentPage == 'success' && <PaymentsConfirmation setCurrentPage={setCurrentPage}/>}
                </main>
            </>
        );
    }