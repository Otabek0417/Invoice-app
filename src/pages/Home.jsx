import React from "react";
import { useFetch } from "../hooks/useFetch";

//! components
import InvoiceList from "../components/InvoiceList";
import Header from "../components/Header";

function Home() {
  const { isPending, error, data } = useFetch("http://localhost:3450/data");
  return (
    <div>
      <Header />
      <InvoiceList invoices={data} />
    </div>
  );
}

export default Home;
