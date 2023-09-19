// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {mode: true, firstName: '', lastName: '', firstText: '', lastText: ''}

  updateMode = () => {
    const {firstName, lastName} = this.state

    if (firstName !== '' && lastName !== '') {
      this.setState(ps => ({mode: !ps.mode}))
    }
    if (firstName === '') {
      this.setState({firstText: 'Required'})
    }
    if (lastName === '') {
      this.setState({lastText: 'Required'})
    }
  }

  updateModeValue = () => {
    this.setState(ps => ({mode: !ps.mode, firstName: '', lastName: ''}))
  }

  changeFirst = event => {
    this.setState({firstName: event.target.value})
  }

  changeLast = event => {
    this.setState({lastName: event.target.value})
  }

  updateFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstText: 'Required'})
    } else {
      this.setState({firstText: ''})
    }
  }

  updateLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lastText: 'Required'})
    } else {
      this.setState({lastText: ''})
    }
  }

  submitForm = event => {
    event.preventDefault()
  }

  renderFromBox = () => {
    const {firstName, lastName, lastText, firstText} = this.state

    return (
      <form onSubmit={this.submitForm} className="login-form">
        <div className="con1">
          <label className="login-label" htmlFor="lf">
            FIRST NAME
          </label>
          <br />
          <input
            id="lf"
            className="login-input"
            type="text"
            placeholder="First name"
            value={firstName}
            onBlur={this.updateFirstName}
            onChange={this.changeFirst}
          />
          <p>{firstText}</p>
        </div>
        <div className="con1">
          <label className="login-label" htmlFor="ll">
            LAST NAME
          </label>
          <br />
          <input
            id="ll"
            className="login-input"
            type="password"
            placeholder="Last name"
            value={lastName}
            onBlur={this.updateLastName}
            onChange={this.changeLast}
          />
          <p>{lastText}</p>
        </div>
        <button onClick={this.updateMode} className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {mode} = this.state
    return (
      <div className="bg">
        <h1 className="title">Registration</h1>
        {mode ? (
          <div className="con">{this.renderFromBox()}</div>
        ) : (
          <div className="response-con">
            <img
              className="success-img"
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p>Submitted Successfully</p>
            <button
              className="submit-btn btn"
              onClick={this.updateModeValue}
              type="button"
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
