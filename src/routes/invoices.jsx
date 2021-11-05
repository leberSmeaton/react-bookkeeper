import * as React from 'react';

import { 
  NavLink, 
  Link,
  Outlet,
  useSearchParams 
} from "react-router-dom";
import { getInvoices } from "../data";
import QueryNavLink from './queryNavLink';

export default function Invoices(){
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams({
    replace: true
  });

  return(
    <div>
      <main style={{
        color: "black",
        fontFamily: "dongle",
        fontSize: "25px",
        fontWeight: "700",
        backgroundColor: "#fdfff0"
      }}>
        <h2 style={{
          padding: ".5rem 10px",
          margin: "0"
        }}
        >
          Invoices
        </h2>
      </main>
      <div style={{
        display: "flex", 
        fontFamily: "dongle", 
        backgroundColor: "#fdfff0", 
        borderRadius: "0 0 15px 15px"
      }}>
        <nav
          style={{
            borderRight: "solid 1px white",
            padding: "1rem",
            backgroundColor: "#e8ecd6", 
            borderRadius: "15px 0 0 15px"
          }}
        >
        <input 
          style={{ marginTop:"0", fontFamily: "dongle" }}
          value={searchParams.get("filer") || ""}
          placeholder= "invoice name"
          onChange={event => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {invoices
          .filter(invoice => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLocaleLowerCase());
          })
        
          .slice(0,5).map(invoice => (
            // <Link
            <QueryNavLink 
              style={({ isActive }) => {
                return {
                  display: "block", 
                  margin: "1rem 0",
                  color: isActive ? "#a23131" : "black"
                }
              }}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}    
            >
              {invoice.name}
            </QueryNavLink>
            
        ))}
        
        <Link to="/invoices" style={{
          textDecoration: "none", 
          color:"black"
        }}>
          reset search
        </Link>
        
        </nav>
        <Outlet />
      </div>
    </div>
  );
}