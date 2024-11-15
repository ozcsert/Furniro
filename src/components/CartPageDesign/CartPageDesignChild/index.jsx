import { useState } from 'react';
import './style.scss'
import { Link } from 'react-router-dom'
import icondust from '../../../assets/icons/delete.svg'





const CartPageDesignChild = () => {

    const [products, setProducts] = useState([
        { id: 1, name: 'Asgaard sofa', price: 3500, img: "https://www.scandesigns.com/wp-content/uploads/2022/10/Safford-Sofa-Grey-Front-Featured--600x420.jpg" },
        { id: 2, name: 'Asgaard chair', price: 1500, img: "https://wakefitdev.gumlet.io/img/npl_modified_images/darcy/sofa_WLCHRDRCFVBL/sofa_WLCHRDRCFVBL_1.jpg?w=640" },
        { id: 3, name: 'Asgaard desk', price: 1000, img: "https://m.media-amazon.com/images/I/71scnKP+LuL._AC_SY300_SX300_.jpg" },
        { id: 4, name: 'Asgaard tv unit', price: 2000, img: "https://img.vivense.com/1920x1280/images/ac6748071e7844fa8eb2c3ac9b5833ca.jpg" },
        { id: 5, name: 'Rixos tv sofa', price: 6000, img: "https://img.vivense.com/1920x1280/images/ac6748071e7844fa8eb2c3ac9b5833ca.jpg" },
        { id: 6, name: 'Rixos tv unit', price: 3000, img: "https://img.vivense.com/1920x1280/images/ac6748071e7844fa8eb2c3ac9b5833ca.jpg" },
        { id: 7, name: 'Rixos tv unit', price: 3700, img: "https://img.vivense.com/1920x1280/images/ac6748071e7844fa8eb2c3ac9b5833ca.jpg" },
        { id: 8, name: 'Rixos tv unit', price: 1250, img: "https://img.vivense.com/1920x1280/images/ac6748071e7844fa8eb2c3ac9b5833ca.jpg" },
    ]);

    const deleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };


    return (
        <ul className='cart-page-design-container'>
            {products.map((product) => (
                <>
                    <li className='cart-page-design-section'>
                        <img className='cart-page-design-section-img' src={product.img} alt="productimg" width={105} height={105} />
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