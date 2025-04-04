import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: null,
  });

  const isFormValid =
    formData.fullName.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.password.trim() !== "" &&
    formData.company.trim() !== "" &&
    formData.isAgency !== null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRadioChange = (value) => {
    setFormData({ ...formData, isAgency: value });
  };

  const handleSignup = () => {
    if (isFormValid) {
      navigate("/profile"); // Redirect to Profile Page
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 absolute bottom-10">
        <h1 className="text-2xl font-bold text-gray-900">Create your PopX account</h1>

        <div className="mt-6">
          {/* Full Name */}
          <label className="block text-sm font-medium text-purple-700">Full Name*</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter full name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mt-1"
            value={formData.fullName}
            onChange={handleChange}
          />

          {/* Phone Number */}
          <label className="block text-sm font-medium text-purple-700 mt-4">Phone number*</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter phone number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mt-1"
            value={formData.phone}
            onChange={handleChange}
          />

          {/* Email Address */}
          <label className="block text-sm font-medium text-purple-700 mt-4">Email address*</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mt-1"
            value={formData.email}
            onChange={handleChange}
          />

          {/* Password */}
          <label className="block text-sm font-medium text-purple-700 mt-4">Password*</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mt-1"
            value={formData.password}
            onChange={handleChange}
          />

          {/* Company Name */}
          <label className="block text-sm font-medium text-purple-700 mt-4">Company name</label>
          <input
            type="text"
            name="company"
            placeholder="Enter company name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mt-1"
            value={formData.company}
            onChange={handleChange}
          />

          {/* Are you an Agency? */}
          <div className="mt-4">
            <span className="text-sm font-medium text-purple-700">Are you an Agency?*</span>
            <div className="flex items-center gap-4 mt-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === "yes"}
                  onChange={() => handleRadioChange("yes")}
                  className="accent-purple-600"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === "no"}
                  onChange={() => handleRadioChange("no")}
                  className="accent-purple-600"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* Create Account Button */}
          <button
            onClick={handleSignup}
            disabled={!isFormValid}
            className={`w-full mt-6 py-3 rounded-lg font-medium transition ${
              isFormValid
                ? "bg-purple-600 text-white hover:bg-purple-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
