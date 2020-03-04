import React from "react";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

class NotFound extends React.Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Page Not Found</title>
          <meta name="description" content="Helmet application" />
        </Helmet>

        <h2>NotFound</h2>
        <p>お探しのページは見つかりませんでした。</p>
      </div>
    );
  }
}


export default NotFound;
