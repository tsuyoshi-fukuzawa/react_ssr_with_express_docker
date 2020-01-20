import React from "react";
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

class Home extends React.Component {
  constructor(props) {
    super()
    this.state = {
      counter: 0
    }
    this.doAction = this.doAction.bind(this);
  }

  doAction() {
    this.setState((state)=> ({
      counter: state.counter + 1,
    }));
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>My Title</title>
          <meta name="description" content="Helmet application" />
        </Helmet>

        <h2>Home</h2>
        <p>ようこそ</p>
        <p>counter: {this.state.counter}</p>
        <button onClick={this.doAction}>increment</button>
        <ul>
          <li><Link to='/about'>about</Link></li>
          <li><Link to='/contact'>contact</Link></li>
        </ul>
      </div>
    );
  }
}

export default Home;
