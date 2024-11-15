import { useState, useEffect } from 'react';
import './style.scss'
import { Link } from 'react-router-dom'
import icondust from '../../../assets/icons/delete.svg'
import { useNavigate } from "react-router-dom"




const CartPageDesignChild = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const cartData = localStorage.getItem("cart");
        if (cartData) {
            try {
                const parsedData = JSON.parse(cartData);
                setProducts(parsedData);
            } catch (error) {
                console.error("Cart verisi parse edilemedi:", error);
            }
        }
    }, []);
    console.log(products);

    const deleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
        localStorage.setItem("cart",JSON.stringify(products));
    };
    const handleDetail = (productId) => {
        navigate(`/product/${productId}`)
    }

    return (
        <ul className='cart-page-design-container'>
            {products.map((product) => (
                <>
                    <li className='cart-page-design-section'>
                        <img className='cart-page-design-section-img' onClick={() => {
                            handleDetail(product.id)
                        }} src={product.images[0]} alt="productimg" width={105} height={105} />
                        <div className='cart-page-design-section-info'>
                            <Link to="/#" className='cart-page-design-section-info'>
                                <p className='cart-page-design-section-name'>{product.name}</p>
                                <p className='cart-page-design-section-price'>${product.price}</p>
                            </Link>
                            <img onClick={() => deleteProduct(product.id)} src={icondust} alt="" width={28} height={28} />
                        </div>
                    </li>
                </>

            ))}

        </ul>
    )




}

export default CartPageDesignChild