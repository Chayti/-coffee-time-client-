import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://coffee-time-server3.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return [products];
}

export default useProducts;