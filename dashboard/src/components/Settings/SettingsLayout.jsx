import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Settings.css";

const SettingsLayout = () => {
  const { user } = useAuth();

  return (
    <div className="settings-page">
      <div className="settings-sidebar">
        <div className="settings-user">
          <div className="settings-avatar">
            {user?.profileImage ? (
              <img src={user.profileImage} alt="Profile" />
            ) : (
              user.username.charAt(0).toUpperCase()
            )}
          </div>

          <div className="settings-user-info">
            <h3>{user.username}</h3>
            <p>{user.email}</p>
          </div>
        </div>

        <div className="settings-group">
          <p className="group-title">ACCOUNT</p>

          <NavLink
            to="account"
            className={({ isActive }) =>
              `settings-link ${isActive ? "active" : ""}`
            }
          >
            👤 Account
          </NavLink>

          <NavLink to="security">
            <button>🔒 Security</button>
          </NavLink>
        </div>

        <div className="settings-group">
          <p className="group-title">PREFERENCES</p>

          <NavLink to="appearance">
            <button>🌙 Appearance</button>
          </NavLink>

          <NavLink to="notifications">
            <button>🔔 Notifications</button>
          </NavLink>

          <NavLink to="privacy">
            <button>🔐 Privacy</button>
          </NavLink>
        </div>

        <div className="settings-group">
          <p className="group-title">ABOUT</p>

          <NavLink to="about">
            <button>ℹ️ About</button>
          </NavLink>
        </div>
      </div>

      <div className="settings-content">
        <Outlet />
      </div>
    </div>
  );
};

export default SettingsLayout;
