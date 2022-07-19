import React from "react";
import './Home.css';
import Banner from "../components/Banner";
import Products from "../components/Products";

function Home(){
    return <div className="Home">
        <Banner />

        <div className="section">
            <div className="secTitle">NEW ARRIVALS</div>
            <div className="secGrid">
                <Products ptype="new" loadNo={4}/>
            </div>
        </div>

        <div className="section">
            <div className="secTitle">POPULAR</div>
            <div className="secGrid">
                <Products ptype="new" loadNo={4}/>
            </div>
        </div>

        <div className="section">
            <div className="secTitle">TRENDING NOW</div>
            <div className="secTrend">
                <div className="men" onClick={() => window.location.href = "/Men"}>Trending in Men</div>
                <div className="women" onClick={() => window.location.href = "/Women"}>Trending in Women</div>
            </div>
        </div>
    </div>;
}

export default Home;