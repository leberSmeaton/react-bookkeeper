import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import App from './App';
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import Background from "./images/landingimage.jpg";

// colours: #a1dd70, #e8ecd6, #fdfff0, #a23131

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route 
            index
            element={
              <main style={{ padding: "0 1rem", fontFamily: "Dongle", fontWeight: "300" }}>
                <p>Select an Invoice</p>
              </main>  
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route 
          index
          element={
            <main style={{  display: "flex", alignItems: "center", justifyContent: "center", backgroundImage: `url(${Background})`, backgroundSize: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "cover", height: "600px", maxWidth: "100%", fontFamily: "Dongle", fontWeight: "300", borderBottom: "1px solid black" }}>
              <Link to="/invoices" style={{ backgroundImage: "linear-gradient(#a1dd70, #00ff16)", boxShadow: "1px 1px 2px #888888", color: "#fdfff0", padding: "2px 25px 0 25px", marginTop: "200px", fontFamily: "Dongle", fontWeight: "300", fontSize:"30px", borderRadius: "2px", border: "none", textDecoration: "none" }} >
                Tend to your future, TODAY  ▶︎
              </Link>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

//
//
// weird way for rendering
/*
import { render } from "react-dom"
import App from './App';

const rootElement = document.getElementById("root");
render(<App />, rootElement);
*/