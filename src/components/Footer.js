import React from 'react';
import './Footer.css';
import logos from '../dicts/logos';
import { withRouter } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <div className={'footer-container'}>
        <p>Our sponsors</p>
        <div className={'footer-content'}>
          {logos.data.map((logo, i) => {
            const imageContainerStyle = {
              backgroundImage: `url('${logo}')`,
            };
            return (
              <div key={i} className={'logo'} style={imageContainerStyle} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
