import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {
    userName: '',
    userPassword: '',
    errorMsg: false,
  }

  onSubmitUser = event => {
    const {userName, userPassword} = this.state
    const {history} = this.props
    event.preventDefault()
    const checkName = localStorage.getItem('name')
    const checkPassword = localStorage.getItem('password')
    if (
      checkName === userName &&
      userName !== '' &&
      checkPassword === userPassword &&
      userPassword !== ''
    ) {
      history.replace('/movies')
    } else {
      this.setState({
        errorMsg: true,
      })
    }
    this.setState({
      userName: '',
      userPassword: '',
    })
  }

  onChangeUsername = event => {
    this.setState({
      userName: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      userPassword: event.target.value,
    })
  }

  render() {
    const {userName, userPassword, errorMsg} = this.state

    return (
      <div className="login-container">
        <div>
          <h1 className="main-heading"> Login User </h1>
        </div>
        <div>
          <form onSubmit={this.onSubmitUser} className="login-card">
            <div className="user">
              <label htmlFor="username" className="label-text">
                Username
              </label>
              <input
                id="username"
                onChange={this.onChangeUsername}
                placeholder="username"
                className="input"
                value={userName}
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
                value={userPassword}
                type="password"
              />
            </div>

            <button type="submit" className="login-button">
              Login
            </button>
            {errorMsg && <p className="error"> ** Invalid Credentials ** </p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
