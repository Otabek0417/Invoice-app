import React from "react";

function ModalRight() {
  return (
    <div className="positionF w-full">
      <div className="my-8 mx-auto w-[clamp(20rem,87.5%,730px)]">
        <button className="flex self-baseline gap-4">
          <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.342.886L2.114 5.114l4.228 4.228"
              stroke="#9277FF"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
          <span className="text-xs font-bold text-RUINED-SMORES">Go back</span>
        </button>
      </div>
      <form className="px-6">
        <div>
          <h1 className="mb-6 text-2xl text-RUINED-SMORES font-semibold">
            New Invoice
          </h1>
          <p className="mb-3 text-xs font-semibold text-dark-slate-blue">
            Bill From
          </p>
          <div className="mb-6">
            <label
              className="block mb-3 text-xs font-medium text-TRUE-LAVENDER "
              htmlFor="address"
            >
              Street Address
            </label>
            <input
              className="w-full py-4 text-xs font-semibold text-RUINED-SMORES px-5 outline-none rounded border border-solid border-[#dfe3fa] bg-inherit"
              name="address"
              type="text"
              required
            />
          </div>
        </div>
        <div className="grid w-full grid-cols-2 grid-rows-2 gap-x-3 mb-3 ">
          <div className="mb-6">
            <label
              className="text-xs mb-3 block font-medium text-TRUE-LAVENDER "
              htmlFor="city"
            >
              City
            </label>
            <input
              className="w-full py-4 text-xs font-semibold text-RUINED-SMORES px-5 outline-none rounded border border-solid border-[#dfe3fa] bg-inherit"
              name="city"
              type="text"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block mb-3 text-xs font-medium text-TRUE-LAVENDER "
              htmlFor="PostCode"
            >
              Post Code
            </label>
            <input
              className="w-full py-4 text-xs font-semibold text-RUINED-SMORES px-5 outline-none rounded border border-solid border-[#dfe3fa] bg-inherit"
              name="PostCode"
              type="text"
              required
            />
          </div>
          <div className="col-start-3 col-end-1">
            <label
              className="block mb-3 text-xs font-medium text-TRUE-LAVENDER "
              htmlFor="Country"
            >
              Country
            </label>
            <input
              className="w-full py-4  text-xs font-semibold text-RUINED-SMORES px-5 outline-none rounded border border-solid border-[#dfe3fa] bg-inherit"
              name="Country"
              type="text"
              required
            />
          </div>
        </div>
        <p className="mb-3 text-xs font-semibold text-dark-slate-blue">
          Bill To
        </p>
        <div className="mb-6">
          <label
            className="block mb-3 text-xs font-medium text-TRUE-LAVENDER "
            htmlFor="address"
          >
            Client’s Name
          </label>
          <input
            className="w-full py-4 text-xs font-semibold text-RUINED-SMORES px-5 outline-none rounded border border-solid border-[#dfe3fa] bg-inherit"
            name="address"
            type="text"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block mb-3 text-xs font-medium text-TRUE-LAVENDER "
            htmlFor="address"
          >
            Client’s Email
          </label>
          <input
            className="w-full py-4 text-xs font-semibold text-RUINED-SMORES px-5 outline-none rounded border border-solid border-[#dfe3fa] bg-inherit"
            name="address"
            type="text"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block mb-3 text-xs font-medium text-TRUE-LAVENDER "
            htmlFor="address"
          >
            Street Address
          </label>
          <input
            className="w-full py-4 text-xs font-semibold text-RUINED-SMORES px-5 outline-none rounded border border-solid border-[#dfe3fa] bg-inherit"
            name="address"
            type="text"
            required
          />
        </div>
        <div className="grid w-full grid-cols-2 grid-rows-2 gap-x-3 mb-10 ">
          <div className="mb-6">
            <label
              className="text-xs mb-3 block font-medium text-TRUE-LAVENDER "
              htmlFor="city"
            >
              City
            </label>
            <input
              className="w-full py-4 text-xs font-semibold text-RUINED-SMORES px-5 outline-none rounded border border-solid border-[#dfe3fa] bg-inherit"
              name="city"
              type="text"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block mb-3 text-xs font-medium text-TRUE-LAVENDER "
              htmlFor="PostCode"
            >
              Post Code
            </label>
            <input
              className="w-full py-4 text-xs font-semibold text-RUINED-SMORES px-5 outline-none rounded border border-solid border-[#dfe3fa] bg-inherit"
              name="PostCode"
              type="text"
              required
            />
          </div>
          <div className="col-start-3 col-end-1">
            <label
              className="block mb-3 text-xs font-medium text-TRUE-LAVENDER "
              htmlFor="Country"
            >
              Country
            </label>
            <input
              className="w-full py-4  text-xs font-semibold text-RUINED-SMORES px-5 outline-none rounded border border-solid border-[#dfe3fa] bg-inherit"
              name="Country"
              type="text"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block mb-3 text-xs font-medium text-TRUE-LAVENDER "
            htmlFor="address"
          >
            Invoice Date
          </label>
          <input
            className="w-full py-4 text-xs font-semibold text-RUINED-SMORES px-5 outline-none rounded border border-solid border-[#dfe3fa] bg-inherit"
            name="address"
            type="date"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block mb-3 text-xs font-medium text-TRUE-LAVENDER "
            htmlFor="address"
          >
            Payment Terms
          </label>
          <input
            className="w-full py-4 text-xs font-semibold text-RUINED-SMORES px-5 outline-none rounded border border-solid border-[#dfe3fa] bg-inherit"
            name="address"
            type="text"
            required
          />
        </div>
        <div className="mb-16">
          <label
            className="block mb-3 text-xs font-medium text-TRUE-LAVENDER "
            htmlFor="address"
          >
            Project Description
          </label>
          <input
            className="w-full py-4 text-xs font-semibold text-RUINED-SMORES px-5 outline-none rounded border border-solid border-[#dfe3fa] bg-inherit"
            name="address"
            type="text"
            required
          />
        </div>
        
      </form>
    </div>
  );
}

export default ModalRight;
