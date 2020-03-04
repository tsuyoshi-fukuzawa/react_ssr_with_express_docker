import React from "react";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import { Status } from './status';

class NotFound extends React.Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <Status code={404}>
        <Helmet>
          <title>Page Not Found</title>
          <meta name="description" content="Helmet application" />
        </Helmet>

        <h2>NotFound</h2>
        <p>お探しのページは見つかりませんでした。</p>
      </Status>
    );
  }
}


export default NotFound;
