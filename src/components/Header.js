import React from 'react';
import './Header.css';
import { withRouter } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className={'header-container'}>
        <p>Our sponsors</p>
        <div className={'header-content'}>

        </div>
      </div>
    );
  }
}

export default withRouter(Header);
