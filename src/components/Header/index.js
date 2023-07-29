import {Component} from 'react'

import {withRouter} from 'react-router-dom'

import './index.css'

class Header extends Component {
  state = {
    showMenu: false,
  }

  showMenu = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu,
    }))
  }

  onLogoutButton = () => {
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    const {showMenu} = this.state

    return (
      <>
        <div className="header-container">
          <div>
            <h1 className="ng-movies"> NG Movies </h1>
          </div>
          <div>
            <button
              type="button"
              className="company-info"
              onClick={this.showMenu}
            >
              Company Info
            </button>
            <button
              className="logout-button "
              type="button"
              onClick={this.onLogoutButton}
            >
              Logout
            </button>
          </div>
        </div>
        {showMenu && (
          <div className="company-info-container">
            <div>
              <h1>Company Info</h1>
            </div>
            <div>
              <p> Company: Geeksynergy Technologies Pvt Ltd</p>
              <p> Address: Sanjayanagar, Bengaluru-56</p>
              <p> Phone: XXXXXXXXX09</p>
              <p> Geeks-Tech-@gmail.com</p>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default withRouter(Header)
