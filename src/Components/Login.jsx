import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleLogin = () => {
    if (isFormValid) {
      navigate("/profile"); // Redirect to Profile Page
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 absolute bottom-10">
        <h1 className="text-2xl font-bold text-gray-900">Signin to your PopX account</h1>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="mt-6">
          {/* Email Input */}
          <label className="block text-sm font-medium text-purple-700">Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Input */}
          <label className="block text-sm font-medium text-purple-700 mt-4">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={!isFormValid}
            className={`w-full mt-6 py-3 rounded-lg font-medium transition ${
              isFormValid
                ? "bg-purple-600 text-white hover:bg-purple-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
