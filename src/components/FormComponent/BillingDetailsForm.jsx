import { useState } from "react";
import PropTypes from "prop-types";
import InputField from "./InputField";

const BillingDetailsForm = ({ formData, handleChange }) => {
  const [countryOptions] = useState([
    "United States",
    "Canada",
    "Spain",
    "Italy",
    "Germany",
  ]);
  const [provinceOptions, setProvinceOptions] = useState([]);

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    
    console.log(e.target); 
    handleChange({ id: "country", value: selectedCountry });

    switch (selectedCountry) {
      case "United States":
        setProvinceOptions(["California", "Texas", "Florida", "New York"]);
        break;
      case "Canada":
        setProvinceOptions([
          "Ontario",
          "Quebec",
          "British Columbia",
          "Alberta",
        ]);
        break;
      case "Spain":
        setProvinceOptions(["Madrid", "Barcelona", "Valencia", "Seville"]);
        break;
      case "Italy":
        setProvinceOptions(["Rome", "Milan", "Naples", "Turin"]);
        break;
      case "Germany":
        setProvinceOptions(["Berlin", "Bavaria", "Hamburg", "Hesse"]);
        break;
      default:
        setProvinceOptions([]);
    }
  };

  return (
    <div className="billing-details-container">
      <div className="name-fields">
        <InputField
          id="firstName"
          label="First Name"
          type="text"
          value={formData.firstName}
          onChange={(e) => handleChange({ id: "firstName", value: e.target.value })}
          placeholder="Enter your first name"
        />
        <InputField
          id="lastName"
          label="Last Name"
          type="text"
          value={formData.lastName}
          onChange={(e) => handleChange({ id: "lastName", value: e.target.value })}
          placeholder="Enter your last name"
        />
      </div>

      <InputField
        id="country"
        label="Country/Region"
        type="select"
        value={formData.country}
        onChange={handleCountryChange}
        placeholder="Select your country"
        options={countryOptions}
      />

      <InputField
        id="streetAddress"
        label="Street Address"
        type="text"
        value={formData.streetAddress}
        onChange={(e) => handleChange({ id: "streetAddress", value: e.target.value })}
        placeholder="Enter your street address"
      />

      <InputField
        id="city"
        label="Town/City"
        type="text"
        value={formData.city}
        onChange={(e) => handleChange({ id: "city", value: e.target.value })}
        placeholder="Enter your town or city"
      />

      <InputField
        id="province"
        label="Province"
        type="select"
        value={formData.province}
        onChange={(e) => handleChange({ id: "province", value: e.target.value })}
        placeholder="Select your province"
        options={provinceOptions}
      />

      {provinceOptions.length === 0 && formData.country && (
        <p className="no-province-message">
          Please select a country to see provinces.
        </p>
      )}

      <InputField
        id="zipCode"
        label="ZIP Code"
        type="text"
        value={formData.zipCode}
        onChange={(e) => handleChange({ id: "zipCode", value: e.target.value })}
        placeholder="Enter your ZIP code"
      />

      <InputField
        id="phone"
        label="Phone"
        type="text"
        value={formData.phone}
        onChange={(e) => handleChange({ id: "phone", value: e.target.value })}
        placeholder="Enter your phone number"
      />

      <InputField
        id="email"
        label="Email Address"
        type="email"
        value={formData.email}
        onChange={(e) => handleChange({ id: "email", value: e.target.value })}
        placeholder="Enter your email address"
      />
    </div>
  );
};

BillingDetailsForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default BillingDetailsForm;
