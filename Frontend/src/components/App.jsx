import { Navbar } from "./Navbar.jsx";
import { Error } from "./Error.jsx";
import { ShoppingCart } from "./shoppingcart.jsx";
import { PaymentsConfirmation } from "./PaymentsConfirmation.jsx";
import { fetchMyProducts } from "../utils/fetchMyProducts.js";
import { ProductContainer } from "./productContainer.jsx";
import { useEffect, useState } from "react";

export function App(){

        const [currentPage, setCurrentPage] = useState('browsing'); 
        const [products, setProducts] = useState([]); //min produktlista
        const [cart, setCart] = useState([]); //cart produkter
        const [cartProducts, setCartProducts] = useState([]); // detaljer


        const handleAddToCart = (productItems) => {
            setCartProducts((prevCart) => [...prevCart, productItems]);
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
                    {currentPage == 'browsing' && (<ProductContainer products={products} setCart={setCart} cart={cart} onHandleAddToCart={handleAddToCart}/>)}
                    {currentPage == 'buying' && (<ShoppingCart setCurrentPage={setCurrentPage} cart={cart} setCart={setCart} products={products} setProducts={setProducts}/>)}
                    {currentPage == 'error' && <Error/>}
                    {currentPage == 'success' && <PaymentsConfirmation setCurrentPage={setCurrentPage}/>}
                </main>
            </>
        );
    }