import React from 'react';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 style={{margin: "0"}}>
        <Link 
          to="/"
          style={{
            textDecoration: "none",
            color: "#a1dd70",
            paddingLeft: "10px",
            fontFamily: "Dongle",
            fontWeight: "700"
          }}
        >
          <i class="fas fa-spa"></i> Greens Bookkeeper
        </Link>
      </h1>
      <nav 
        style={{
          borderBottom: "solid 1px black",
          backgroundColor: "#e8ecd6",
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
          padding: "1rem 0 0 1rem",
          fontFamily: "Dongle",
          fontSize: "20px",
          color: "black"
        }}
      >
        <Link to="/invoices" style={{textDecoration: "none", marginBottom:"0px", paddingBottom:"0px"}}>Invoices</Link> | {" "}
        <Link to="/expenses" style={{textDecoration: "none", marginBottom:"0px", paddingBottom:"0px"}}>Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
