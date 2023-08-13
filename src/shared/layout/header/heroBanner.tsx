import React from "react";
import "./heroBanner.sass";
import Button from "../button/button";

function HeroBanner() {
	return (
		<div id="hero-banner">
			<h1>StarShipShop</h1>
			<h2>World premiere <span className="highlighted">starship</span> ecommerce website</h2>
			<div>
				<Button text="Order Now" />
			</div>
		</div>
	);
}

export default HeroBanner;
