import React, { Component } from "react";
import { StaticQuery } from "gatsby";
import Img from "gatsby-image";

class InstagramRoll extends Component {
	render() {
		const { data } = this.props;
		console.log(data.allInstaNode.edges);
		const { edges: instaPosts } = data.allInstaNode;
		return (
			<div style={{ margin: " 50px 0" }}>
				<h3>My latest instagram posts</h3>
				<ul className="images">
					{instaPosts &&
						instaPosts.map(({ node: instaPost }) => (
							<li>
								<Img
									fixed={instaPost.localFile.childImageSharp.fixed}
									className="instaImage"
								/>
							</li>
						))}
				</ul>
			</div>
		);
	}
}

export default () => (
	<StaticQuery
		query={graphql`
			query InstagramQuery {
				allInstaNode {
					edges {
						node {
							localFile {
								id
								childImageSharp {
									fixed {
										src
									}
								}
							}
						}
					}
				}
			}
		`}
		render={(data, count) => <InstagramRoll data={data} count={count} />}
	/>
);
