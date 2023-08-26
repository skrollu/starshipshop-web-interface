import React from "react";
import "./header.sass";
import appLogo from "../../../assets/images/app-logo.svg"
import accountLogo from "../../../assets/images/account-logo.svg";
import cartIcon from "../../../assets/images/cart-icon.svg";

function Header() {
    return (
        <header>
            <div>
                <img id="app-logo" src={appLogo} alt="application logo" />
            </div>
            <nav>
                <div>
                    <img id="account-logo" src={accountLogo} alt="account logo" />
                </div>
                <div>
                    <img id="cart-logo" src={cartIcon} alt="cart logo" />
                </div>
            </nav>
        </header>
    );
}

export default Header;
