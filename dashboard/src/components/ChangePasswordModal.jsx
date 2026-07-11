import React, { useState } from "react";
import "./ChangePasswordModal.css";

const ChangePasswordModal = ({ onClose }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangePassword = async () => {
    // validation
    if (currentPassword === newPassword) {
      alert("New password must be different from the current password.");
      return;
    }
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("Fill all fields");
      return;
    }

    if (newPassword.length < 6) {
      alert("Password should be at least 6 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "http://localhost:3002/api/user/change-password",
        {
          method: "PUT",

          credentials: "include",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            currentPassword,

            newPassword,
          }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      alert(data.message);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

      onClose();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Change Password</h2>

        <label>Current Password</label>

        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />

        <label>New Password</label>

        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <label>Confirm Password</label>

        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div className="buttons">
          <button className="cancel" onClick={onClose}>
            Cancel
          </button>

          <button
            className="save"
            onClick={handleChangePassword}
            disabled={loading}
          >
            {loading ? "Changing..." : "Change Password"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
