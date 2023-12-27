import React from "react";

function Header() {
  return (
    <div className="w-full  lg:my-16 lg:p-0 px-8 lg: max-w-[327px] py-6 lg:max-w-[730px] mx-auto flex  items-center justify-between ">
      <div className="">
        <h1 className="text-RUINED-SMORES text-xl font-bold lg:text-[32px]">
          Invoices
        </h1>
        <p className="text-PAPILIO-ARGEOTUS text-xs font-medium">7 invoices</p>
      </div>

      <div className="flex">
        <div className="flex items-center gap-3 mr-3 lg:mr-10">
          <p className="text-RUINED-SMORES text-xs font-bold">Filter</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
          >
            <path
              d="M1 1L5.2279 5.2279L9.4558 1"
              stroke="#7C5DFA"
              stroke-width="2"
            />
          </svg>
        </div>
        <button class="btn border-0 bg-dark-slate-blue rounded-3xl p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <circle cx="16" cy="16" r="16" fill="white" />
            <path
              d="M17.3131 21.0234V17.3136H21.0229V14.7333H17.3131V11.0234H14.7328V14.7333H11.0229V17.3136H14.7328V21.0234H17.3131Z"
              fill="#7C5DFA"
            />
          </svg>
          <span className="text-xs font-bold text-white">New</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
