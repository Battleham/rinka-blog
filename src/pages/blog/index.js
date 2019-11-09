import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
	render() {
		return (
			<Layout>
				<div className="page-title-container">
					<h1>Latest Stories</h1>
				</div>
				<section>
					<div className="blog-content">
						<BlogRoll />
					</div>
				</section>
			</Layout>
		);
	}
}
