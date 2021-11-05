import React from 'react';
import { Outlet, Link } from "react-router-dom";

// colours: #a1dd70, #e8ecd6, #fdfff0, #a23131

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
      <nav 
        style={{
          backgroundColor: "#e8ecd6",
          borderBottomLeftRadius: "15px",
          borderBottomRightRadius: "15px",
          padding: "1rem 0 0 1rem",
          fontFamily: "Dongle",
          fontSize: "20px",
          color: "black"
        }}
      >
        <ul 
          style={{
            listStyleType: "none",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          <li>Suggest any business</li>
          <li>Flexible</li>
          <li>An experience</li>
          <li>Start Now</li>
        </ul>
        <h1>Make $3000 in extras* in 30 days guaranteed!</h1>
        <h1>Powerful accounting, made simple.</h1>
      </nav>
    </div>
  );
}

export default App;
