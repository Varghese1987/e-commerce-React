import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="esv-products">
                    {
                        this.props.products.map(product=>(
                            <li key={product._id}>
                                <div className="esv-product">
                                    <a href={"#"+product._id}>
                                        <img src={product.imgUrl} alt={product.title}></img>
                                        <p>
                                            {product.title}
                                        </p>
                                    </a>
                                    <div className="esv-product-price">
                                        <div>&#8377;{product.price}</div>
                                        <button className="esv-button primary">Add to Cart</button>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
