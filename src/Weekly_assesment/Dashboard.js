import React, { useState } from "react";
import "./style.css";

const roles = {
  ADMIN: "Admin",
  KAM: "KAM",
  LEAD: "Lead",
  ACCOUNT: "Account",
};

const Dashboard = () => {
  const [userRole, setUserRole] = useState(roles.ADMIN);
  const [kams, setKams] = useState([]);
  const [leads, setLeads] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [bills, setBills] = useState([]);

  const createKAM = () => setKams([...kams, `KAM ${kams.length + 1}`]);
  const createLead = () => setLeads([...leads, `Lead ${leads.length + 1}`]);
  const createAccount = () => setAccounts([...accounts, `Account ${accounts.length + 1}`]);

  const createBill = () => setBills([...bills, { id: bills.length + 1, status: "Pending" }]);
  const processBill = (index) => {
    const newBills = [...bills];
    newBills[index].status = "Processed";
    setBills(newBills);
  };
  const approveBill = (index) => {
    const newBills = [...bills];
    newBills[index].status = "Approved";
    setBills(newBills);
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <select
        className="role-selector"
        value={userRole}
        onChange={(e) => setUserRole(e.target.value)}
      >
        {Object.values(roles).map((role) => (
          <option key={role} value={role}>{role}</option>
        ))}
      </select>

      {userRole === roles.ADMIN && (
        <button onClick={createKAM} className="button admin-button">Create KAM</button>
      )}
      {userRole === roles.KAM && (
        <>
          <button onClick={createLead} className="button kam-button">Create Lead</button>
          <button onClick={createAccount} className="button account-button">Create Account</button>
        </>
      )}
      {userRole === roles.ACCOUNT && (
        <button onClick={createBill} className="button bill-button">Create Bill</button>
      )}

      {/* Display Created Users */}
      <div className="users-container">
        <h2>Created Users</h2>
        <p><strong>KAMs:</strong> {kams.join(", ") || "None"}</p>
        <p><strong>Leads:</strong> {leads.join(", ") || "None"}</p>
        <p><strong>Accounts:</strong> {accounts.join(", ") || "None"}</p>
      </div>

      {/* Display Bills */}
      <div className="bills-container">
        <h2 className="bills-title">Bills</h2>
        {bills.length === 0 ? <p>No Bills Available</p> : 
          bills.map((bill, index) => (
            <div key={index} className="bill-item">
              <span>Bill {bill.id} - <strong>{bill.status}</strong></span>
              {userRole === roles.LEAD && bill.status === "Pending" && (
                <button onClick={() => processBill(index)} className="button process-button">Process</button>
              )}
              {userRole === roles.KAM && bill.status === "Processed" && (
                <button onClick={() => approveBill(index)} className="button approve-button">Approve</button>
              )}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Dashboard;
