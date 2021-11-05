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
        padding: "0 1rem",
        color: "blue"
      }}>
        <h2>Invoices</h2>
      </main>
      <div style={{display: "flex"}}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem"
          }}
        >
        <input 
          style={{marginTop:"0"}}
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
                  color: isActive ? "red" : "black"
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