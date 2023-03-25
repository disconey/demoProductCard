import { ShoppingCartOutlined } from '@ant-design/icons/lib/icons'
import React from 'react'

const ProductName = ({ product }) => {
    return (
        <div className='product-name-wrapper'>
            <div className="product-content">
                <h3>{product.productName}</h3>
                <span>{product.price}</span>
            </div>
            
            <div className='product-cart'><ShoppingCartOutlined className='product-cart__icon'/></div>
        </div>
    )
}

export default ProductName