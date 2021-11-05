import { useParams, useNavigate } from 'react-router-dom';
import { getInvoice, deleteInvoice } from '../data';

export default function Invoice(){
  let navigate = useNavigate();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  return(
    <main style={{ padding: "1rem" }}>
      <h2>Invoice: {params.invoiceId}</h2>
      <p>Name: {invoice.name} - #{invoice.number}</p>
      <p>Amount: {invoice.amount}</p>
      <p style={{paddingTop:"5px"}}>Due Date: {invoice.due}</p>
      <button 
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