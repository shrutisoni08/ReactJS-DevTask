import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import profile from "../Components/profile.jpeg";

const Profile = () => {
  const navigate = useNavigate(); // Hook for navigation

  const [user] = useState({
    name: "Marry Doe",
    email: "Marry@Gmail.Com",
    bio: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam",
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white shadow-md rounded-lg overflow-hidden p-6">
        {/* Header */}
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Account Settings
        </h2>

        {/* Profile Info */}
        <div className="flex items-center space-x-4 border-b pb-4">
          {/* Profile Image */}
          <div className="relative w-14 h-14">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full rounded-full border border-gray-300 object-cover"
            />
            {/* Camera Icon */}
            <label className="absolute bottom-0 right-0 bg-purple-600 text-white p-1 rounded-full cursor-pointer text-xs">
              📷
              <input type="file" className="hidden" />
            </label>
          </div>
          {/* Name & Email */}
          <div>
            <h3 className="text-md font-semibold">{user.name}</h3>
            <p className="text-gray-500 text-sm">{user.email}</p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-gray-700 text-sm mt-4">{user.bio}</p>

        {/* Go to Home Button */}
        <button
          onClick={() => navigate("/")} // Navigate to Home
          className="mt-6 w-full bg-purple-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Profile;
