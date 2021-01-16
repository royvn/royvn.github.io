import React from "react";
import { Link, graphql } from "gatsby";

import css from "./latestPost.module.scss";
import LatestPost from "../components/LatestPost";


class LatestPosts extends React.Component {
  render(){
    return (
      <div className="section">
        <div className="container page-spacer align-items-center">
          <div className="">
            {this.props.title &&
              <h2 className="">
                {this.props.title}
              </h2>
            }
            {this.props.paragraph &&
              <p className="rte rte--md">
                {this.props.paragraph}
              </p>
            }
            {this.props.link_to && this.props.link_text &&
              <Link to={this.props.link_to} className="button button--lg button--light">
                {this.props.link_text}
              </Link>
            }
          </div>
        </div> 
        <div className={css.latestPosts}>
          {this.props.data && this.props.data.map(({node}) => (
            <LatestPost key={node.id} node={node} />
          ))}
        </div>
      </div>
    );
  }
}

export default LatestPosts;