import FormInput from "../FormInput"
import PropTypes from "prop-types"
import "./style.scss"

const ProfileForm = ({ userData, isEditing, onInputChange, onSubmit }) => (
  <section className="profile-view-container">
    <div className="profile-picture">
      <img src="https://via.placeholder.com/150" alt="Profile" />
      <p>Change profile picture</p>
    </div>
    <form onSubmit={onSubmit} className="profile-form">
      <FormInput
        label="Your name"
        type="text"
        name="name"
        value={userData.name}
        onChange={onInputChange}
        placeholder="John Doe"
        readOnly={!isEditing}
      />
      <FormInput
        label="Email address"
        type="email"
        name="email"
        value={userData.email}
        onChange={onInputChange}
        placeholder="Abc@def.com"
        readOnly={!isEditing}
      />
      <FormInput
        label="Password"
        type="password"
        name="password"
        value={userData.password}
        onChange={onInputChange}
        placeholder="********"
        readOnly={!isEditing}
      />
      <button type="submit">{isEditing ? "Save" : "Edit"}</button>
    </form>
  </section>
)

ProfileForm.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  isEditing: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default ProfileForm
