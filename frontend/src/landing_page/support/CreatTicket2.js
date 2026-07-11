import React, { useState } from "react";
import { FaListAlt } from "react-icons/fa";

function CreatTicket2() {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    {
      title: "Account Opening",
      links: ["Resident Individual", "NRI Account", "Minor Account"],
    },
    {
      title: "Trading Related",
      links: ["Buy/Sell Orders", "Intraday Trading", "Bracket Orders"],
    },
    {
      title: "Fund Transfer",
      links: ["Add Bank", "UPI Transfer", "Withdrawal Process"],
    },
    {
      title: "KYC & Documents",
      links: ["PAN Update", "Aadhar Link", "Proof Submission"],
    },
    {
      title: "Demat Account",
      links: ["Nominee Update", "Holdings", "Pledge Shares"],
    },
    {
      title: "Login & Security",
      links: ["Forgot Password", "2FA Setup", "Device History"],
    },
  ];

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="container mt-5" style={{ backgroundColor: "white" }}>
      <div className="row">
        {/* Left Column */}
        <div className="col-lg-8 col-md-12 mb-4">
          <div className="p-3 border">
            {sections.map((section, index) => (
              <div key={index} className="mb-3">
                <div
                  className="d-flex align-items-center bg-light p-2"
                  style={{
                    cursor: "pointer",
                    borderRadius: "5px",
                  }}
                  onClick={() => toggleSection(index)}
                >
                  <FaListAlt className="me-2" size={20} />
                  <strong>{section.title}</strong>
                </div>

                {openSection === index && (
                  <ul className="mt-2 ms-4 list-unstyled">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <a href="#" className="text-decoration-none d-block py-1">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-4 col-md-12 mb-4">
          <div className="p-3 border bg-light">
            <h4>Right Section</h4>
            <p>This section takes 4/12 width on large screens and full width on smaller ones.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatTicket2;
