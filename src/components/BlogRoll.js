import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import BlogCard from "./BlogCard";

class BlogRoll extends React.Component {
	render() {
		const { data } = this.props;
		const { edges: posts } = data.allMarkdownRemark;

		return (
			<div className="blog-roll-container">
				{posts &&
					posts.map(({ node: post }) => <BlogCard post={post} key={post.id} />)}
			</div>
		);
	}
}

BlogRoll.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	})
};

export default () => (
	<StaticQuery
		query={graphql`
			query BlogRollQuery {
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___date] }
					filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
				) {
					edges {
						node {
							excerpt(pruneLength: 400)
							id
							fields {
								slug
							}
							frontmatter {
								title
								templateKey
								date(formatString: "MMMM DD, YYYY")
								featuredpost
								image {
									absolutePath
								}
								featuredimage {
									childImageSharp {
										fixed(width: 500, quality: 100) {
											...GatsbyImageSharpFixed
										}
									}
								}
							}
						}
					}
				}
			}
		`}
		render={(data, count) => <BlogRoll data={data} count={count} />}
	/>
);
