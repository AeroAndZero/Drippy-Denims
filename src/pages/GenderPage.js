import React from "react";
import './GenderPage.css';
import Products from "../components/Products";

export default function GenderPage(props){
    return (<div className="prodContainer">
        <div className="sortBox">
            <div className="sortTitle">
                Sort by Price ▼
            </div>
            <div className="sortValues">
                <span><input type="radio" name="price" value={"l2h"} /> Lowest to Highest</span><br/>
                <span><input type="radio" name="price" value={"h2l"} /> Highest to Lowest</span>
            </div>
        </div>
        <div className="prodGrid">
            <Products ptype="new" loadNo="12" gender={props.gender}/>
        </div>
    </div>)
}