import {Component} from 'react'
import './index.css'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'

const colors = [
  'bgclr454f84',
  'bgclr0b69ff',
  'bgclr94a3b8',
  'bgclrb6c3ca',
  'bgclr7683cb',
  'bgclrf59e0b',
  'bgclr10b981',
  'bgclrf97316',
  'bgclr14b8a6',
  'bgclrb91c1c',
  'bgclr0ea5e9',
  'bgclr64748b',
]

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    showPassword: false,
    website: '',
    username: '',
    password: '',
    search: '',
  }

  onClickAdd = event => {
    event.preventDefault()
    const {website, username, password} = this.state

    const newPassword = {
      id: v4(),
      username,
      website,
      password,
      bgColor: colors[Math.floor((colors.length - 1) * Math.random())],
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      username: '',
      website: '',
      password: '',
    }))
  }

  onChangeWebsite = event => {
    this.setState({
      website: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSearch = event => {
    this.setState({
      search: event.target.value,
    })
  }

  onChecked = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onClickDelete = id => {
    this.setState(prevState => ({
      passwordsList: prevState.passwordsList.filter(each => each.id !== id),
    }))
  }

  render() {
    const {
      website,
      username,
      password,
      passwordsList,
      showPassword,
      search,
    } = this.state

    const filteredPasswordList = passwordsList.filter(each =>
      each.website.toLowerCase().includes(search.toLowerCase()),
    )

    const isPasswordListEmpty = filteredPasswordList.length > 0

    return (
      <div className="app-container">
        <img
          className="app-logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="passwords-create-container">
          <img
            className="password-manager-sm-image"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
          />
          <img
            className="password-manager-lg-image"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
          />
          <form className="password-container" onSubmit={this.onClickAdd}>
            <h1 className="add-new-password-heading">Add New Password</h1>
            <div className="input-container">
              <img
                className="input-icon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />

              <input
                value={website}
                onChange={this.onChangeWebsite}
                className="input"
                type="text"
                placeholder="Enter Website"
              />
            </div>
            <div className="input-container">
              <img
                className="input-icon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                alt="username"
              />

              <input
                value={username}
                onChange={this.onChangeUsername}
                className="input"
                type="text"
                placeholder="Enter Username"
              />
            </div>
            <div className="input-container">
              <img
                className="input-icon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                alt="password"
              />

              <input
                value={password}
                onChange={this.onChangePassword}
                className="input"
                type="password"
                placeholder="Enter Password"
              />
            </div>
            <div className="add-button-container">
              <button className="add-button" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
        <div className="passwords-store-container">
          <div className="search-bar-container">
            <div className="heading-container">
              <h1 className="your-passwords-heading">Your Passwords </h1>
              <p className="passwords-count">{filteredPasswordList.length}</p>
            </div>
            <div className="search-input-container">
              <img
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                alt="search"
              />
              <input
                onChange={this.onSearch}
                className="search"
                type="search"
                placeholder="search"
              />
            </div>
          </div>
          <hr className="break-line" />
          <div className="checkbox-container">
            <input
              onChange={this.onChecked}
              id="checkbox"
              type="checkbox"
              className="checkbox"
            />
            <label className="label" htmlFor="label">
              Show passwords
            </label>
          </div>
          {!isPasswordListEmpty && (
            <div className="no-password-container">
              <img
                className="no-password-img"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
              />
              <p className="no-password">No Passwords</p>
            </div>
          )}
          {isPasswordListEmpty && (
            <ul className="password-list-container">
              {filteredPasswordList.map(eachPassword => (
                <PasswordItem
                  passwordDetails={eachPassword}
                  showPassword={showPassword}
                  key={eachPassword.id}
                  onClickDelete={this.onClickDelete}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
