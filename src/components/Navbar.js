import React from "react";
import { Link } from "gatsby";

const Navbar = class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			navBarActiveClass: ""
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
							navBarActiveClass: "is-active"
					  })
					: this.setState({
							navBarActiveClass: ""
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
				<div className="menu">
					<Link className="menu-item" to="/">
						Home
					</Link>
					<Link className="menu-item" to="/about">
						About
					</Link>
					<Link className="menu-item" to="/blog">
						Blog
					</Link>
				</div>
			</nav>
		);
	}
};

export default Navbar;
