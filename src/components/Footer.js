import React from "react";
import './Footer.css'

function Footer(){
    return <>
    <div className="Footer">
        <div>
            COMPANY<br/><br/>
            <a href="info" className="footerList">About Us</a>
            <a href="info" className="footerList">Info</a>
            <a href="info" className="footerList">Privacy Policy</a>
        </div>
        <div>
            HELP<br/><br/>
            <a href="info" className="footerList">Shipping & Returns</a>
            <a href="info" className="footerList">Help & Support</a>
        </div>
        <div>
            LOCATIONS<br/><br/>
            <a href="info" className="footerList">See our locations</a>
            <div className="footerList">Addr: Shed no. 2, Anand Screen printers,
                <br/>Opp Gujarat way bridge,
                <br/>Narol, Ahmedabad - 382405
                <br/>Gujarat, India
            </div>
        </div>
        <div>
            SOCIALS<br/><br/>
            <a href="info" className="footerList">Instagram</a>
            <a href="info" className="footerList">Facebook</a>
            <a href="info" className="footerList">Mail</a>
        </div>
    </div>

    <div className="copyright">
        &copy; 2022 Drippy Denims Inc.
    </div>
    </>;
}

export default Footer;