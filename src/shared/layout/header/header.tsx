import React from "react";
import "./header.sass";
import appLogo from "../../../assets/images/app-logo.svg"
import accountLogo from "../../../assets/images/account-logo.svg";
import cartLogo from "../../../assets/images/cart-logo.svg";

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
					<img id="cart-logo" src={cartLogo} alt="cart logo" />
				</div>
			</nav>
		</header>
	);
}

export default Header;
