import React from 'react';

class Header extends React.Component {
  render(){
    return(
      <div className="py-5 text-center">
        <img className="d-block mx-auto mb-4" src={this.props.data.img} alt="" width="150" height="150"/>
        <h2>{this.props.data.title}</h2>
        <ul className="list-unstyled">
        </ul>
        <p className="lead">{this.props.data.desc}</p>
      </div>
    )
  }
}

export default Header;