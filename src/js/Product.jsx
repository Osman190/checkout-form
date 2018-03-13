import React from 'react';

// here we change class componant to a stupid functon componnint and when we use a react component class we need a this keyword and in react also we need a uppercases for naming functon and we also need a return for the functon 
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { like: false };
    this.clickButton = this.clickButton.bind(this);
  }

  clickButton(e) {
    // let liked = this.state.like;
    // liked = !liked
    // this.setState({like: liked})


    this.state.like = !this.state.like
    this.setState(this)
    console.log(this)


  }
  render() {
    return (
      <div>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div className="">
            <h6 className="my-0">{this.props.data.name}</h6>
            <small className="text-muted d-block">Release: {this.props.data.release}</small>
            <button className={"btn btn-sm " + (this.state.like ? "btn-danger" : "btn-outline-danger")} onClick={(e) => this.clickButton(e)}>{this.state.like ? 'Liked' : 'unlike'}</button>
          </div>
          <div className="d-flex flex-column">
            <span className="text-muted d-flex justify-content-center align-items-baseline">
              <button className="btn btn-sm btn-light">-</button>
              <button className="btn btn-sm btn-light">+</button>
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
