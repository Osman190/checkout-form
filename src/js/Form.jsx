import React from 'react';

class Form extends React.Component {

render() {
  return (
    <div className="">
      <h4 className="mb-3">Billing address</h4>
      <form className="needs-validation" noValidate="">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName">First name</label>
            <input type="text" className="form-control" id="firstName" placeholder="First Name" value={this.props.blabla.billingInfo.firstName} onChange={(e) => this.props.dog(e.target.id, e.target.value)} required="" />
            <div className="invalid-feedback">
              Valid first name is required.
              </div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName">Last name</label>
            <input type="text" className="form-control" id="lastName" placeholder="Last Name" value={this.props.blabla.billingInfo.lastName} onChange={(e) => this.props.dog(e.target.id, e.target.value)} required="" />
            <div className="invalid-feedback">
              Valid last name is required.
              </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="username">Username</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">@</span>
            </div>
            <input type="text" className="form-control" id="username" placeholder="Username" value={this.props.blabla.billingInfo.Username} onChange={(e) => this.props.dog(e.target.id, e.target.value)} required="" />
            <div className="invalid-feedback w-100" >
              Your username is required.
              </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
          <input type="email" className="form-control" id="email" placeholder="you@example.com" value={this.props.blabla.billingInfo.email} onChange={(e) => this.props.dog(e.target.id, e.target.value)} required=""/>
          <div className="invalid-feedback">
            Please enter a valid email address for shipping updates.
            </div>
        </div>

        <div className="mb-3">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" id="address" placeholder="1234 Main St" value={this.props.blabla.billingInfo.address} onChange={(e) => this.props.dog(e.target.id, e.target.value)} required="" />
          <div className="invalid-feedback">
            Please enter your shipping address.
            </div>
        </div>

        <div className="mb-3">
          <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
          <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" value={this.props.blabla.billingInfo.addressTow} onChange={(e) => this.props.dog(e.target.id, e.target.value)} />
        </div>

        <div className="row">
          <div className="col-md-5 mb-3">
            <label htmlFor="country">Country</label>
            <select className="custom-select d-block w-100" id="country" value={this.props.blabla.billingInfo.country} onChange={(e) => this.props.dog(e.target.id, e.target.value)} required="">
              <option value="">Choose...</option>
              <option>Germany</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid country.
              </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="state">State</label>
            <select className="custom-select d-block w-100" id="state" value={this.props.blabla.billingInfo.state} onChange={(e) => this.props.dog(e.target.id, e.target.value)} required="">
              <option value="">Choose...</option>
              <option>Berlin</option>
            </select>
            <div className="invalid-feedback">
              Please provide a valid state.
              </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="zip">Zip</label>
            <input type="text" className="form-control" id="zip" placeholder="" value={this.props.blabla.billingInfo.zip} onChange={(e) => this.props.dog(e.target.id, e.target.value)} required="" />
            <div className="invalid-feedback">
              Zip code required.
              </div>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="same-address" />
          <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
        </div>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="save-info" />
          <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
        </div>
        <hr className="mb-4" />

        <h4 className="mb-3">Payment</h4>

        <div className="d-block my-3">
          <div className="custom-control custom-radio">
            <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked="" required="" />
            <label className="custom-control-label" htmlFor="credit">Credit card</label>
          </div>
          <div className="custom-control custom-radio">
            <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required="" />
            <label className="custom-control-label" htmlFor="debit">Debit card</label>
          </div>
          <div className="custom-control custom-radio">
            <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required="" />
            <label className="custom-control-label" htmlFor="paypal">Paypal</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="cc-name">Name on card</label>
            <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
            <small className="text-muted">Full name as displayed on card</small>
            <div className="invalid-feedback">
              Name on card is required
              </div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="cc-number">Credit card number</label>
            <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
            <div className="invalid-feedback">
              Credit card number is required
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mb-3">
            <label htmlFor="cc-expiration">Expiration</label>
            <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
            <div className="invalid-feedback">
              Expiration date required
              </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="cc-expiration">CVV</label>
            <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
            <div className="invalid-feedback">
              Security code required
              </div>
          </div>
        </div>
        <hr className="mb-4" />
        <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={this.props.haha}>Continue to checkout</button>
      </form>
    </div>
  )
}
}

export default Form;