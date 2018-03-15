import React from 'react';

// here we change class componant to a stupid functon componnint and when we use a react component class we need a this keyword and in react also we need a uppercases for naming functon and we also need a return for the functon 
class Product extends React.Component {
 
  render() {
    return (
      <div>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div className="">
            <h6 className="my-0">{this.props.data.name}</h6>
            <small className="text-muted d-block">Release: {this.props.data.release}</small>
            <button className={"btn btn-sm " + (this.props.data.like ? "btn-danger" : "btn-outline-danger")} onClick={(e) => this.props.updateChildItem(this.props.data.id, "like")}>{this.props.data.like ? 'Like' : 'unlike'}</button>
          </div>
          <div className="d-flex flex-column">
            <span className="text-muted d-flex justify-content-center align-items-baseline">
              <button className="btn btn-sm btn-light" onClick={(e)=> this.props.updateChildItem(this.props.data.id, false)}>-</button>
              <button className="btn btn-sm btn-light" onClick={(e) => this.props.updateChildItem(this.props.data.id, true)}>+</button>
            </span>
            <span className={"badge " + (this.props.data.amount > 0 ? "badge-primary" : "")}>{this.props.data.amount}</span>
            <span className="badge">{this.props.data.price}</span>
          </div>
        </li>
      </div>
    )
  }
}

export default Product;
