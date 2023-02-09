// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', error: ''}

  submitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'
    if (username === 'rahul') {
      if (password === 'rahul@2021') {
        const response = await fetch(url, option)
        if (response.ok === true) {
          this.submitSuccess()
        }
      } else {
        this.setState({error: '*Password is not found'})
      }
    } else {
      this.setState({error: '*Username is not found'})
    }
  }

  userNameChange = event => {
    this.setState({username: event.target.value})
  }

  passwordChange = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, error} = this.state
    return (
      <div className="login-bg-conatiner">
        <div className="login-second-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            className="login-side-img"
            alt="website login"
          />
          <div className="login-form-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="login-page-logo"
              alt="website logo"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              className="login-middle-img hide-element"
              alt="website login"
            />
            <form className="login-form" onSubmit={this.onSubmitDetails}>
              <label className="label" htmlFor="username">
                USERNAME
              </label>
              <input
                type="text"
                id="username"
                className="input"
                value={username}
                onChange={this.userNameChange}
                placeholder="Username"
              />
              <label className="label" htmlFor="password">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                className="input"
                value={password}
                onChange={this.passwordChange}
                placeholder="Password"
              />
              <button type="submit" className="submit">
                Login
              </button>
              <p className="err-text">{error}</p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
