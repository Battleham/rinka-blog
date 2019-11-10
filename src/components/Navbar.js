import React from "react";
import { Link } from "gatsby";

const Navbar = class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			navBarActiveClass: "",
			linkActiveClass: ""
		};
	}

	toggleHamburger = () => {
		// toggle the active boolean in the state
		this.setState(
			{
				active: !this.state.active
			},
			// after state has been updated,
			() => {
				// set the class in state for the navbar accordingly
				this.state.active
					? this.setState({
							navBarActiveClass: "open",
							linkActiveClass: "fade"
					  })
					: this.setState({
							navBarActiveClass: "",
							linkActiveClass: ""
					  });
			}
		);
	};

	render() {
		return (
			<nav role="navigation" aria-label="main-navigation" className="navbar">
				<div className="top">
					<Link to="/" title="Logo" className="logo">
						Rinka Xait
					</Link>
				</div>
				<div className="bottom">
					<div className="hamburger" onClick={() => this.toggleHamburger()}>
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
					</div>
					<div className={`menu ${this.state.navBarActiveClass}`}>
						<Link className={`menu-item ${this.state.linkActiveClass}`} to="/">
							Home
						</Link>
						<Link
							className={`menu-item ${this.state.linkActiveClass}`}
							to="/about"
						>
							About
						</Link>
						<Link
							className={`menu-item ${this.state.linkActiveClass}`}
							to="/blog"
						>
							Blog
						</Link>
					</div>
				</div>
			</nav>
		);
	}
};

export default Navbar;
