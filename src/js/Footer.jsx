import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">{this.props.bla.copyRight}</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">{this.props.bla.privacy}</a>
          </li>
          <li className="list-inline-item">
            <a href="#">{this.props.bla.terms}</a>
          </li>
          <li className="list-inline-item">
            <a href="#">{this.props.bla.support}</a>
          </li>
        </ul>
      </footer >
    );
  }
}

export default Footer;