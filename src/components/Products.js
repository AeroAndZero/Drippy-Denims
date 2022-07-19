import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import './Products.css';

function Products(props){
    const [products, setProducts] = useState([{}]);

    let productsURL = "http://127.0.0.1:3001/products";
    if(props.gender === 'm'){
        productsURL = "http://127.0.0.1:3001/products/gender/m";
    }else if(props.gender === 'w'){
        productsURL = "http://127.0.0.1:3001/products/gender/w";
    }

    useEffect(() => {
        axios.get(productsURL).then((data) => {
            setProducts(data.data);
        })
    }, [])

    if(products.length > 0){
        return (
            products.map((p,i) => 
            i < props.loadNo ? <div className="card" key={i}>
                <div className="productCard">
                    <div className="productImage">
                        <img src={p.imgurl} alt="product" />
                    </div>
                    <div className="productInfo">
                        <div>
                            <div className="pTitle">{p.name}</div>
                            <div className="pPrice">${p.price} USD</div>
                        </div>
                        <div>
                            <div className="addToCart">+</div>
                        </div>
                    </div>
                </div>
            </div> : ""
            )
        )
    }else{
        return <></>
    }
}

export default Products;