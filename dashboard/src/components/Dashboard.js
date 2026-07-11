import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Profile from "./Profile";
import SettingsLayout from "./Settings/SettingsLayout";
import AccountSettings from "./Settings/AccountSettings";
import SecuritySettings from "./Settings/SecuritySettings";
import AppearanceSettings from "./Settings/AppearanceSettings";
import NotificationSettings from "./Settings/NotificationSettings";
import PrivacySettings from "./Settings/PrivacySettings";
import AboutSettings from "./Settings/AboutSettings";
import Transactions from "./Transactions";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<SettingsLayout />}>
            <Route index element={<AccountSettings />} />
            <Route path="account" element={<AccountSettings />} />
            <Route path="security" element={<SecuritySettings />} />
            <Route path="appearance" element={<AppearanceSettings />} />
            <Route path="notifications" element={<NotificationSettings />} />
            <Route path="privacy" element={<PrivacySettings />} />
            <Route path="about" element={<AboutSettings />} />
          </Route>
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
