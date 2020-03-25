import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import WidgetList from "./widget-list";

class Footer extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<footer className="footer">
				<div className="grid page-width page-spacer">
					
					<div className="grid__item gcs-xs-1 gce-xs-13 gcs-md-1 gce-md-4">
						<div className="widget">
							<h4 className="widget-title">
								{this.props.siteTitle}
							</h4>		
						</div>
					</div>

					<div className="grid__item gcs-xs-1 gce-xs-13 gcs-md-4 gce-md-7">
						<WidgetList title="Hoofdmenu" list={
							[
								{
									node: {
										fields: {
											slug: "/"
										},
										frontmatter:{
											title: "Home"
										}
									}
								},
								{
									node: {
										fields: {
											slug: "/blog/"
										},
										frontmatter:{
											title: "Blog"
										}
									}
								},
								{
									node: {
										fields: {
											slug: "/about/"
										},
										frontmatter:{
											title: "About"
										}
									}
								},
								{
									node: {
										fields: {
											slug: "/contact/"
										},
										frontmatter:{
											title: "Contact"
										}
									}
								}
							]
						} />
					</div>

					<div className="grid__item gcs-xs-1 gce-xs-13 gcs-md-7 gce-md-10">
						<div className="widget">
							<p className="widget-title">
								Social
							</p>
							<ul className="widget-list">
								<li className="nav-item">
									<a href="https://github.com/royvn" target="_blank" rel="noopener noreferrer" className="nav-link">
										Github
									</a>
								</li>
								<li className="nav-item">
									<a href="https://www.instagram.com/royvn/" target="_blank" rel="noopener noreferrer" className="nav-link">
										Instagram
									</a>
								</li>
								<li className="nav-item">
									<a href="https://www.linkedin.com/in/roy-van-neden-10549761/" target="_blank" rel="noopener noreferrer" className="nav-link">
										Linkedin
									</a>
								</li>
								<li className="nav-item">
									<a href="https://twitter.com/royvn_" target="_blank" rel="noopener noreferrer" className="nav-link">
										Twitter
									</a>
								</li>
							</ul>
						</div>
					</div>
					
					<div className="grid__item gcs-xs-1 gce-xs-13 gcs-md-10 gce-md-13">
						<StaticQuery query={graphql`
							query {
								allMarkdownRemark(filter: {}, limit: 5) {
									edges {
										node {
											id
											fields {
												slug
											}
											frontmatter {
												title
											}
										}
									}
								}
							}
							`} render={data => (
								<WidgetList title="Recent van blog" list={data.allMarkdownRemark.edges} />
							)} />
					</div>

				</div>
				<div className="grid page-width page-spacer">
					<div className="grid__item gcs-xs-1 gce-xs-13">
						<p className="license">
							© 1992 - {new Date().getFullYear()}, Built with
							{` `}
							<a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">
								Gatsby
							</a> and {` `} 
							<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
							React
							</a>
							.
							Hosted on 
							{` `}
							<a href="https://github.com/royvn/royvn.github.io" target="_blank" rel="noopener noreferrer">
								Github
							</a>. 
							{` `}
							Created in The Hague, the Netherlands.
						</p>
					</div>
				</div>
			</footer>
			);
		}
	}
	
export default Footer;

