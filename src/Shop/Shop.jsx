import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./styles/shop.module.css";

function useProductURL() {
    const [productURL, setProductURL] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getProducts() {

            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const actualData = await response.json();

                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP Error: The status is ${response.data}`
                    )
                }
                setProductURL(actualData);
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

    return { productURL, error, loading };
}
function Shop() {
    const { productURL, error, loading } = useProductURL();

    if (error) return <p>A network error was encountered</p>
    if (loading) return <p>Loading...</p>

    return (
        <>
            <Header />
            <div className={style.shopContainer}>
                {productURL.map((product) => {
                    return (
                        <div className={style.productCard}>
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

        </>
    )
}
export default Shop;