import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./styles/shop.module.css";
import SearchBar from "./SearchBar";

function Shop() {
    const [productURL, setProductURL] = useState(null); //State that gets filtered
    const [error, setError] = useState(null); //Error state
    const [productFilter, setProductFilter] = useState(""); //User Input Filter
    const [filteredItems, setFilteredItems] = useState(null); //State that is rendered after productURL gets filtered
    const [loading, setLoading] = useState(true); //Loading State

    useEffect(() => {
        async function getProducts() {

            try {
                const response = await fetch('https://fakestoreapi.com/products/');
                const actualData = await response.json();

                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP Error: The status is ${response.data}`
                    )
                }
                setProductURL(actualData);
                setFilteredItems(actualData);
                setError(null);

            } catch (err) {
                setError(err.message);
                setProductURL(null);
            } finally {
                setLoading(false);
            }
        };
        getProducts();
    }, []);

    if (error) return <p>A network error was encountered</p>
    if (loading) return <p>Loading...</p>

    function handleSearchInput(e) {
        setProductFilter(e.target.value);

        const filtered = productURL.filter((item) => {
            return item.title.toLowerCase().includes(productFilter.toLowerCase());
        })

        setFilteredItems(filtered);
    } //Might Replace with useEffect in final build

    return (
        <>
            <Header />
            <SearchBar handleSearchSubmit={handleSearchInput} searchInput={productFilter} />
            <div className={style.shopContainer}>
                {filteredItems.map((product) => {
                    return (
                        <div className={style.productCard} key={product.id}>
                            <img src={product.image} alt={product.title} key={product.key} className={style.productContainer} />
                            <span className={style.productTitle}>{product.title}</span>
                            <div className={style.productPreviewContainer}>
                                <span className={style.productPrice}>{product.price}</span>
                                <button className={style.productButton}>View Product</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Footer />

        </>
    )
}
export default Shop;