import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image";

const BlogCard = ({ post }) => {
	console.log(post.frontmatter);
	const picUrl = post.frontmatter.featuredimage
		? post.frontmatter.featuredimage.childImageSharp.fixed.src
		: "http://source.unsplash.com/500x500/?writing";

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<Link to={post.fields.slug}>
				<div
					className="picture-container"
					style={{
						backgroundImage: `url(${picUrl})`,
						width: "400px",
						height: "300px"
					}}
				>
					<div className="ribbon-container">
						<h3>{post.frontmatter.title}</h3>
					</div>
				</div>
			</Link>
		</div>
	);
};

BlogCard.propTypes = {
	post: PropTypes.object.isRequired
};

export default BlogCard;
