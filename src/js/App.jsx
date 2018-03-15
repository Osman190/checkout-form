import React from 'react';
import Product from './Product.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Form from './Form.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem('cart')) || {
      data:
        [
          {
            "id": 0,
            "name": "Car",
            "release": "September 2010",
            "amount": 1,
            "price": "700"
          },
          {
            "id": 1,
            "name": "Book",
            "release": "March 2007",
            "amount": 0,
            "price": "30.99"
          },
          {
            "id": 2,
            "name": "Toy",
            "release": "March 2007",
            "amount": 0,
            "price": "20.99"
          },
          {
            "id": 3,
            "name": "Fuck",
            "release": "March 2007",
            "amount": 0,
            "price": "49.99"
          }
        ],
      headerdata: {
        "img": "https://cdn2.iconfinder.com/data/icons/african-animals/128/rhino-512.png",
        "title": "Hello From Blabla",
        "desc": "Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
      },
      footerdata: {
        'copyRight': '© 2017-2018 Company Name',
        'privacy': 'Privacy',
        'terms': 'Terms',
        'support': 'Support'
      },
      billingInfo: {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        address: '',
        addressTow: '',
        country: '',
        state: '',
        zip: '',
      },
      like: false 
    }
  }
  // handleTheState(){
  //   this.setState(this.state)
  // }


  userInfo(id, value) {
    let data = this.state.billingInfo
    data[id] = value
    this.setState((billingInfo) => ({ billingInfo: data }))
    console.log(this.state.billingInfo)
    //localStorage.setItem("infoData", JSON.stringify({billing: this.state.billingInfo}))
  }

  updateItem(id, action) {
    var data = this.state.data
    
    if (action === "like") {
      data[id].like = !data[id].like
    }
    else if (action)
      data[id].amount++
    else if (data[id].amount > 0)
      data[id].amount--
    
    this.setState((date) => ({data: data}))
    //localStorage.setItem('cart', JSON.stringify(this.state));
  }
  
  // clickButton() {
  //   let liked = this.state.like
  //   this.setState((like) => ({ like: !liked }))
  //   console.log(liked)
  //   localStorage.setItem("cart", JSON.stringify({ liked: this.state.like }))
  
  // }

  render() {
    return (
      <React.Fragment>
        <Header data={this.state.headerdata} />
        <div className="row">
          <div className="col-md-8 order-md-1">
            <Form blabla={this.state} dog={this.userInfo.bind(this)}/>
          </div>
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">3</span>
            </h4>
            {this.state.data.map((item, i) => <Product data={item} key={i} updateChildItem={this.updateItem.bind(this)}/>)}
            <br />
            <form className="card p-2">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Promo code" />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-secondary">Redeem</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer bla={this.state.footerdata} />
      </React.Fragment>
    )
  }
}


export default App;