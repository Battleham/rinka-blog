import React from "react";
import { Link } from "gatsby";

import logo from "../img/ICT_logo.png";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";

const Footer = class extends React.Component {
	render() {
		return (
			<footer className="footer-container">
				<div className="footer-links">
					<div className="link-section">
						<ul className="menu-list">
							<li>
								<Link to="/" className="navbar-item">
									Home
								</Link>
							</li>
							<li>
								<Link className="navbar-item" to="/about">
									About
								</Link>
							</li>
							<li>
								<Link className="navbar-item" to="/products">
									Products
								</Link>
							</li>
							<li>
								<Link className="navbar-item" to="/contact/examples">
									Form Examples
								</Link>
							</li>
							<li>
								<a
									className="navbar-item"
									href="/admin/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Admin
								</a>
							</li>
						</ul>
					</div>
					<div className="link-section">
						<section>
							<ul className="menu-list">
								<li>
									<Link className="navbar-item" to="/blog">
										Latest Stories
									</Link>
								</li>
								<li>
									<Link className="navbar-item" to="/contact">
										Contact
									</Link>
								</li>
							</ul>
						</section>
					</div>
					<div className="link-section social">
						<a title="facebook" href="https://facebook.com">
							<img
								src={facebook}
								alt="Facebook"
								style={{ width: "1em", height: "1em" }}
							/>
						</a>
						<a title="twitter" href="https://twitter.com">
							<img
								className="fas fa-lg"
								src={twitter}
								alt="Twitter"
								style={{ width: "1em", height: "1em" }}
							/>
						</a>
						<a title="instagram" href="https://instagram.com">
							<img
								src={instagram}
								alt="Instagram"
								style={{ width: "1em", height: "1em" }}
							/>
						</a>
					</div>
				</div>
				<div className="logo">
					<h3>Created by: </h3>
					<img src={logo} alt="ICT" style={{ width: "4em", height: "4em" }} />
				</div>
			</footer>
		);
	}
};

export default Footer;
