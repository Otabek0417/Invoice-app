import React from "react";

function InvoiceList({ invoices }) {
  console.log(invoices);
  return (
    <div>
      <ul>
        {invoices &&
          invoices.map((invoice) => {
            const { id } = invoice;
            return <li key={id}></li>;
          })}
      </ul>
    </div>
  );
}

export default InvoiceList;
