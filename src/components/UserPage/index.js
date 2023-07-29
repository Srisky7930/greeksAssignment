import {Component} from 'react'

import './index.css'

class UserPage extends Component {
  state = {
    name: '',
    password: '',
    email: '',
    phone: '',
    profession: '',
    errorMsg: false,
  }

  onSubmitUser = event => {
    const {name, password, email, phone, profession} = this.state
    const {history} = this.props
    event.preventDefault()
    localStorage.setItem('name', name)
    localStorage.setItem('password', password)
    localStorage.setItem('email', email)
    localStorage.setItem('phone', phone)
    localStorage.setItem('profession', profession)
    this.setState({
      name: '',
      password: '',
      email: '',
      phone: '',
      profession: '',
    })
    if (name !== '' && password !== '' && email !== '' && phone !== '') {
      history.replace('/login')
    } else {
      this.setState({
        errorMsg: true,
      })
    }
  }

  onChangeUsername = event => {
    this.setState({
      name: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChangeEmail = event => {
    this.setState({
      email: event.target.value,
    })
  }

  onChangeNumber = event => {
    this.setState({
      phone: event.target.value,
    })
  }

  onChangeProfession = event => {
    this.setState({
      profession: event.target.value,
    })
  }

  render() {
    const {name, password, email, phone, errorMsg, profession} = this.state

    return (
      <div className="container">
        <div>
          <h1 className="signup-heading"> SignUp </h1>
        </div>
        <div>
          <form onSubmit={this.onSubmitUser} className="form-card">
            <div className="user">
              <label htmlFor="username" className="label-text">
                Username
              </label>
              <input
                id="username"
                onChange={this.onChangeUsername}
                placeholder="username"
                className="input"
                value={name}
                type="text"
              />
            </div>
            <div className="password">
              <label htmlFor="password" className="label-text">
                Password
              </label>
              <input
                id="password"
                onChange={this.onChangePassword}
                placeholder="password"
                className="input"
                value={password}
                type="password"
              />
            </div>
            <div className="email">
              <label htmlFor="email" className="label-text">
                Email
              </label>
              <input
                id="email"
                onChange={this.onChangeEmail}
                placeholder="email"
                className="input"
                value={email}
                type="text"
              />
            </div>
            <div className="phone-number">
              <label htmlFor="phone" className="label-text">
                Phone Number
              </label>
              <input
                id="phone"
                onChange={this.onChangeNumber}
                placeholder="phone Number"
                className="input"
                value={phone}
              />
            </div>
            <div className="profession">
              <label htmlFor="select" className="label-text">
                Profession
              </label>
              <select
                value={profession}
                id="select"
                onChange={this.onChangeProfession}
                className="input"
              >
                <option> Data Scientist </option>
                <option> IT sector </option>
                <option> Full Stack Developer </option>
              </select>
            </div>
            <button type="submit" className="signup-button">
              Signup
            </button>
            {errorMsg && (
              <p className="error-msg"> ** Plz Fill all sections ** </p>
            )}
          </form>
        </div>
      </div>
    )
  }
}

export default UserPage
