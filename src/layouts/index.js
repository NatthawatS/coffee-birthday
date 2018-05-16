import React from 'react';
import { Link } from 'react-router-dom';

export default class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div >
        <h1 style={{color:""}} >NatthawatS</h1>
        <p>
          <Link to="/">Coffee</Link>
          {' '}
          <Link to="/Calendar">Calendar</Link>
        </p>
        <div>{ children }</div>
      </div>
    );
  }
}