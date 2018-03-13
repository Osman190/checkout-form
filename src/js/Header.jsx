import React from 'react';

function Header(props) {
  return (
    <div className="py-5 text-center">
      <img className="d-block mx-auto mb-4" src={props.data.img} alt="" width="150" height="150" />
      <h2>{props.data.title}</h2>
      <ul className="list-unstyled">
      </ul>
      <p className="lead">{props.data.desc}</p>
    </div>
  )

}

export default Header;