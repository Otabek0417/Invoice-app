import React from "react";

function InvoiceList({ invoices }) {
  return (
    <div>
      <ul className="px-6 mt-8 md:mt-0 mb-[105px] md:px-0">
        {invoices &&
          invoices.map((invoice) => {
            const { id, status, createdAt, clientName, items } = invoice;
            console.log(invoice);
            const dateObj = new Date(invoice.createdAt);
            let year = dateObj.getFullYear();
            let month = dateObj.getMonth() + 1;
            let day = dateObj.getDate();

            return (
              <li
                key={id}
                className="p-6 rounded-lg cursor-pointer transition duration-500 border border-transparent hover:border-[#957BFB]  bg-white custom-shadow mb-4 last:mb-0 md:flex items-center justify-between"
              >
                <div className="flex justify-between items-center mb-6 md:mb-0">
                  <h2 className="text-RUINED-SMORES text-xs font-bold mr-[43px]">
                    <span className="text-TRUE-LAVENDER text-xs font-bold">
                      #
                    </span>
                    {id}
                  </h2>
                  <h3 className="text-xs font-medium text-TRUE-LAVENDER">
                    {clientName}
                  </h3>
                </div>
                <div className="flex items-center justify-between md:w-[60%]">
                  <div className="md:flex items-center justify-between w-full">
                    <p className="mb-2 text-xs font-medium text-TRUE-LAVENDER md:mb-0">
                      {invoice.createdAt}
                    </p>
                    <p className="text-RUINED-SMORES text-base font-bold">
                      £{items[0].price.toLocaleString("en-US")}
                    </p>
                  </div>
                  <div className="flex items-center md:ml-10 ">
                    <button
                      className={`md:mr-5 rounded-md bg-opacity-5   ${
                        status === "paid"
                          ? "bg-[#33D69F]"
                          : status === "pending"
                          ? "bg-[#FF8F00]"
                          : status === "draft"
                          ? "bg-[#373B53]"
                          : ""
                      } `}
                    >
                      <div className="flex justify-center items-center w-[104px] py-3 px-[29px] gap-2">
                        <span
                          className={`paid_oval ${
                            status === "paid"
                              ? "bg-[#33d69f]"
                              : status === "pending"
                              ? "bg-[#FF8F00]"
                              : status === "draft"
                              ? "bg-[#373B53]"
                              : ""
                          }`}
                        ></span>
                        <span
                          className={`text-xs font-semibold ${
                            status === "paid"
                              ? "text-[#33d69f]"
                              : status === "pending"
                              ? "text-[#FF8F00]"
                              : status === "draft"
                              ? "text-[#373B53]"
                              : ""
                          }`}
                        >
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </span>
                      </div>
                    </button>
                    <svg
                      className="hidden md:block"
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="10"
                      viewBox="0 0 7 10"
                      fill="none"
                    >
                      <path d="M1 1L5 5L1 9" stroke="#7C5DFA" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default InvoiceList;
