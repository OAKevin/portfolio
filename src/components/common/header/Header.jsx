import React from "react";
import { Navbar } from "../../common";

import "./header.css";

function Header() {
	return (
		<section className="header">
			<section className="header-top">
				<section className="header-top__logo">
					<a href="/" className="header-logo">
						LOGO
					</a>
				</section>
				<section className="header-top_navbar">
					<Navbar />
				</section>
				<hr className="header-top__seperator" />
			</section>
			<section className="header-botton">
				<section className="header-bottom__phone">7865158815</section>
				<section classname="header-bottom__email">
					Kevinmirandat@gmail.com
				</section>
			</section>
		</section>
	);
}

export default Header;
