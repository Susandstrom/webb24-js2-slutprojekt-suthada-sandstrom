export function Navbar({ setCurrentPage, cartProducts}) {
    function handleClick(page) {
        setCurrentPage(page);
    }

    return (
        <nav className="navbar">
            <h1 className="navbar-my_webshop">My Webshop</h1>
            <ul className="navbar-links">
                <li onClick={() => handleClick('browsing')}>Products</li>
                <li onClick={() => handleClick('buying')}>Cart</li>
            </ul>
        </nav>
    );
}
