import React from "react";
import './Header.css';

function Header(){
    return <div className="Header">
        <div className="Nav">
            <a href="/Men">MEN</a>
            <a href="/Women">WOMEN</a>
            <a href="/Sale">SALE</a>
        </div>
        <div className="Title" onClick={() => window.location.href = "/"}>
            Drippy Denims
        </div>
        <div className="User">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="userImage"/>
            <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="cartImage"/>
        </div>
    </div>;
}

export default Header;