import PropTypes from "prop-types";
import InputField from "./InputField";

const RegisterForm = ({ formData, handleChange, errors }) => (
  <div>
    <InputField
      id="fullName"
      name="fullName"
      label="Full Name"
      type="text"
      value={formData.fullName}
      onChange={handleChange}
      placeholder="Full Name"
      required
      error={errors.fullName}
    />
    <InputField
      id="email"
      name="email"
      label="Email"
      type="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Email"
      required
      error={errors.email}
    />
    <InputField
      id="password"
      name="password"
      label="Password"
      type="password"
      value={formData.password}
      onChange={handleChange}
      placeholder="Password"
      required
      error={errors.password}
    />
    <InputField
      id="confirmPassword"
      name="confirmPassword"
      label="Confirm Password"
      type="password"
      value={formData.confirmPassword}
      onChange={handleChange}
      placeholder="Confirm Password"
      required
      error={errors.confirmPassword || (errors.password && !formData.password === formData.confirmPassword && "Passwords do not match")}
    />
  </div>
);

RegisterForm.propTypes = {
  formData: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default RegisterForm;
