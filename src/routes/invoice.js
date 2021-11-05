import { useParams, useNavigate } from 'react-router-dom';
import { getInvoice, deleteInvoice } from '../data';

export default function Invoice(){
  let navigate = useNavigate();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  return(
    <main style={{ padding: "10px 1rem", fontFamily: "Dongle", fontWeight: "300", backgroundColor: "#e8ecd6", borderRadius: "0 15px 15px 0" }}>
      <h2 style={{ padding: "0", margin: "0"}}>Invoice: {params.invoiceId}</h2>
      <p>Name: {invoice.name} - #{invoice.number}</p>
      <p>Amount: {invoice.amount}</p>
      <p style={{paddingTop:"5px"}}>Due Date: {invoice.due}</p>
      <button 
        style={{
          fontFamily: "Dongle", 
          fontWeight: "700",
          margin: "0",
          padding: "0 15px",
          backgroundColor: "#e8ecd6",
          borderRadius: "2px",
          border: "1px solid black"
        }}
        onClick={() => {
          deleteInvoice(invoice.number);
          navigate("/invoices");
        }}
      >
        Delete
      </button>
    </main>
  ) 
}