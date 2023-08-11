import './index.css'

const PasswordItem = props => {
  const {passwordDetails, showPassword, onClickDelete} = props
  const {id, username, website, password, bgColor} = passwordDetails

  const onDelete = () => {
    onClickDelete(id)
  }

  return (
    <li className="password-item">
      <div className="details">
        <h1 className={`logo ${bgColor}`}>{website[0].toUpperCase()}</h1>
        <div className="password-details-container">
          <p className="website-name">{website}</p>
          <p className="user-name">{username}</p>
          {!showPassword && (
            <img
              className="stars"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
          {showPassword && <p className="security-password">{password}</p>}
        </div>
      </div>
      <button
        data-testid="delete"
        onClick={onDelete}
        type="button"
        className="delete-button"
      >
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
