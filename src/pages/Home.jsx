import React from "react";
import { useFetch } from "../hooks/useFetch";

//! components
import InvoiceList from "../components/InvoiceList";
import Header from "../components/Header";
import ModalRight from "../components/ModalRight";

function Home() {
  const { isPending, error, data } = useFetch("http://localhost:3000/data");
  return (
    <div className="w-full mx-auto">
      <Header />
      <InvoiceList invoices={data} />
      <ModalRight />
    </div>
  );
}

export default Home;
