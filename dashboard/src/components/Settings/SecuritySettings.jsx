import { useState } from "react";
import ChangePasswordModal from "../ChangePasswordModal";

const SecuritySettings = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  return (
    <>
      <h2>Security</h2>
      <p className="settings-description">
        Keep your account secure by updating your password.
      </p>
      <div className="settings-card">
        <div className="settings-row">
          <div>
            <strong>Password</strong>
            <p>••••••••••</p>
          </div>

          <button
            className="settings-btn"
            onClick={() => setShowPasswordModal(true)}
          >
            Change Password
          </button>
        </div>
      </div>

      {showPasswordModal && (
        <ChangePasswordModal onClose={() => setShowPasswordModal(false)} />
      )}
    </>
  );
};

export default SecuritySettings;
