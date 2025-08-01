import React from 'react';

function App() {
  const heading = <h1 style={{ textAlign: "center", color: "#2c3e50" }}>🏢 Office Space Rental Listings</h1>;

  const featuredOffice = {
    name: "Tech Park",
    rent: 55000,
    address: "Kolkata, West Bengal"
  };

  const officeList = [
    { name: "Innovation Hub", rent: 45000, address: "Pune, Maharashtra" },
    { name: "Business Tower", rent: 72000, address: "Mumbai, Maharashtra" },
    { name: "StartUp Bay", rent: 60000, address: "Bengaluru, Karnataka" },
    { name: "IT Heights", rent: 85000, address: "Hyderabad, Telangana" },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {heading}

      <div style={{ textAlign: "center" }}>
        <img
          src="/pexels-jonathanborba-3316924.jpg"
          alt="Office Space"
          style={{ width: "500px",height: "500px", borderRadius: "12px" }}
        />
      </div>

      <h2>Featured Office</h2>
      <p><strong>Name:</strong> {featuredOffice.name}</p>
      <p><strong>Address:</strong> {featuredOffice.address}</p>
      <p>
        <strong>Rent:</strong>{" "}
        <span style={{ color: featuredOffice.rent < 60000 ? "red" : "green" }}>
          ₹{featuredOffice.rent}
        </span>
      </p>

      <h2>Available Office Spaces</h2>
      {officeList.map((office, index) => (
        <div key={index} style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "10px",
          marginBottom: "10px"
        }}>
          <p><strong>Name:</strong> {office.name}</p>
          <p><strong>Address:</strong> {office.address}</p>
          <p>
            <strong>Rent:</strong>{" "}
            <span style={{ color: office.rent < 60000 ? "red" : "green" }}>
              ₹{office.rent}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
