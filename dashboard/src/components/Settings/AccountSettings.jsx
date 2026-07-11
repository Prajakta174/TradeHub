import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import EditProfileModal from "../EditProfileModal";

const AccountSettings = () => {
  const { user } = useAuth();

  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <>
      <h2>Account</h2>
      <p className="settings-description">
        Manage your personal information and profile.
      </p>
      <div className="settings-card">
        <div className="settings-row">
          <div>
            <strong>Username</strong>
            <p>{user.username}</p>
          </div>

          <button
            className="settings-btn"
            onClick={() => setShowEditModal(true)}
          >
            Edit Profile
          </button>
        </div>

        <div className="settings-row">
          <div>
            <strong>Email</strong>
            <p>{user.email}</p>
          </div>
        </div>
      </div>

      {showEditModal && (
        <EditProfileModal onClose={() => setShowEditModal(false)} />
      )}
    </>
  );
};

export default AccountSettings;
