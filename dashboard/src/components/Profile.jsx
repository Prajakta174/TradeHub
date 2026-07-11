import React from "react";
import { useAuth } from "../context/AuthContext";
import "./Profile.css";
import EditProfileModal from "./EditProfileModal";
import { useState, useRef } from "react";
import ChangePasswordModal from "./ChangePasswordModal";
import { FaCamera } from "react-icons/fa";
import ProfileImageModal from "./ProfileImageModal";

const Profile = () => {
  const { user, setUser } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  if (!user) return <h2>Loading...</h2>;
  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();

    formData.append("profileImage", selectedFile);

    try {
      setUploading(true);

      const res = await fetch(
        "https://tradehub-6mu3.onrender.com/api/user/profile-image",
        {
          method: "PUT",
          credentials: "include",
          body: formData,
        },
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      setUser(data);

      alert("Profile photo updated successfully.");

      setSelectedFile(null);
      setPreview(null);
    } catch (err) {
      console.log(err);
    } finally {
      setUploading(false);
    }
  };
  return (
    <>
      <div className="account-header">
        <h1>My Account</h1>
        <p>Manage your profile and account settings.</p>
      </div>

      <div className="account-container">
        {/* Left Card */}

        <div className="profile-card">
          <div
            className="profile-avatar"
            onClick={() => fileInputRef.current.click()}
          >
            {preview ? (
              <img src={preview} alt="Preview" />
            ) : user?.profileImage ? (
              <img src={user.profileImage} alt="Profile" />
            ) : (
              <span>{user?.username.charAt(0).toUpperCase()}</span>
            )}

            <div className="camera-icon">
              <FaCamera />
            </div>
          </div>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(e) => {
              const file = e.target.files[0];

              if (!file) return;

              setSelectedFile(file);

              setPreview(URL.createObjectURL(file));

              setShowImageModal(true);
            }}
          />
          {selectedFile && <p className="selected-file">{selectedFile.name}</p>}
          {selectedFile && (
            <button
              className="upload-btn"
              onClick={handleUpload}
              disabled={uploading}
            >
              {uploading ? "Uploading..." : "Upload"}
            </button>
          )}
          <h2>{user.username}</h2>

          <p>{user.email}</p>

          <button onClick={() => setShowModal(true)}>Edit Profile</button>
        </div>

        {/* Right Side */}

        <div className="account-details">
          <div className="details-card">
            <h3>Personal Information</h3>

            <div className="detail">
              <span>Username</span>
              <strong>{user.username}</strong>
            </div>

            <div className="detail">
              <span>Email</span>
              <strong>{user.email}</strong>
            </div>

            <div className="detail">
              <span>Account ID</span>
              <strong>{user._id.slice(-8).toUpperCase()}</strong>
            </div>
          </div>

          <div className="details-card">
            <h3>Security</h3>

            <div className="detail">
              <span>Password</span>
              <strong>********</strong>
            </div>

            <div className="detail">
              <span>Session</span>
              <strong style={{ color: "#16a34a" }}>Active</strong>
            </div>

            <button
              className="secondary-btn"
              onClick={() => setShowPasswordModal(true)}
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
      {showModal && <EditProfileModal onClose={() => setShowModal(false)} />}
      {showPasswordModal && (
        <ChangePasswordModal onClose={() => setShowPasswordModal(false)} />
      )}
      {showImageModal && (
        <ProfileImageModal
          preview={preview}
          uploading={uploading}
          onClose={() => {
            setShowImageModal(false);
            setSelectedFile(null);
            setPreview(null);
          }}
          onUpload={async () => {
            await handleUpload();

            setShowImageModal(false);

            setPreview(null);
          }}
        />
      )}
    </>
  );
};

export default Profile;
