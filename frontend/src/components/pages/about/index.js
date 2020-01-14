import React from "react";
import { Link } from 'react-router-dom'


class About extends React.Component {
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
        <h2>About</h2>
        <p>サンプルページです。このページはSSRではありません。</p>
        <p>counter: {this.state.counter}</p>
        <button onClick={this.doAction}>increment</button>
        <ul>
          <li><Link to='/'>home</Link></li>
        </ul>
      </div>
    );
  }
}

export default About;
