import CancellationPolicy from "./CancellationPolicy";
import {
   ContactDetails, 
   PaymentDetails,
  BillingAddressDetails } from "@/constants";


const BookingForm = ({error, onSubmit, loading}:{error:string | null, loading: boolean, onSubmit: (e:any)=>void}) => (
  <div className="bg-white pt-5 sm:pt-7 xl:pt-20  rounded-lg">
    <h2 className="text-xl pb-6 sm:pb-5 xl:pb-6 xl:text-3xl font-bold">Contact Detail</h2>
    <form onSubmit={onSubmit}>
      {/* Contact Informat+ion */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {ContactDetails.map((c, index) => (
          <div key={c.label} className="mb-1" >
            <label className="font-bold mb-2 sm:mb-3 block">{c.label}</label>
            <input type={c.type}
              className="border py-3 px-2 w-full 
             border-[#E7E6E6] rounded-md focus:outline-0 focus:ring-1 focus:ring-[#34967C]
             " />
          </div>
        ))}
      </div>



      {/* Payment Information */}
      <h2 className="text-xl pt-9 sm:pt-3 xl:pt-10 pb-6 sm:pb-5 xl:pb-6 xl:text-3xl font-bold">Pay with</h2>

      <div className="mt-4 relative border border-[#E7E6E6] rounded-ss-md rounded-se-md">
        <input id="card_number"
          type="text"
          className="peer w-full p-3 text-gray-900 placeholder-transparent 
              focus:outline-none focus:ring-1 focus:ring-[#34967C]
        " />
        <label
          htmlFor="card_number"
          className="absolute left-3 top-3 text-gray-500 text-sm transition-all 
                       peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 
                       peer-placeholder-shown:text-base
                       peer-focus:top-0 peer-focus:text-xs "
        >
          Card number
        </label>

      </div>

      <div className="grid grid-cols-2 gapy-4 rounded-bl-md rounded-br-md border-b border-l border-r border-[#E7E6E6]">
        {PaymentDetails.map((p, index) => (
          <div key={index} className="relative ">
            <input
              type={p.type}
              id={p.placeholder.toLowerCase().replace(/\s+/g, "-")}
              placeholder=" "
              className={`
                ${index === 0 ? "border-r border-[#E7E6E6]" : ""}
              peer w-full p-3 text-gray-900 placeholder-transparent 
              focus:outline-none focus:ring-1 focus:ring-[#34967C]`}
            />
            <label
              htmlFor={p.placeholder.toLowerCase().replace(/\s+/g, "-")}
              className="absolute left-3 top-3 text-gray-500 text-sm transition-all 
                       peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 
                       peer-placeholder-shown:text-base
                       peer-focus:top-0 peer-focus:text-xs "
            >
              {p.placeholder}
            </label>
          </div>
        ))}


      </div>

      {/* Billing Address */}
      <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
      <div className="mt-4 relative border border-[#E7E6E6]">
        <input id="street_address"
          type="text"
          className="peer w-full p-3 text-gray-900 placeholder-transparent 
              focus:outline-none focus:ring-1 focus:ring-[#34967C]
        " />
        <label
          htmlFor="street_address"
          className="absolute left-3 top-3 text-gray-500 text-sm transition-all 
                       peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 
                       peer-placeholder-shown:text-base
                       peer-focus:top-0 peer-focus:text-xs "
        >
          Street Adress
        </label>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
          {BillingAddressDetails.map((b, index)=>(
            <div className="relative border border-[#E7E6E6]">
              <input id={b.label}
          type={b.type}
          className="peer w-full p-3 text-gray-900 placeholder-transparent 
              focus:outline-none focus:ring-1 focus:ring-[#34967C]
        " /> 
        <label
          htmlFor={b.label}
          className="absolute left-3 top-3 text-gray-500 text-sm transition-all 
                       peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 
                       peer-placeholder-shown:text-base
                       peer-focus:top-0 peer-focus:text-xs "
        >
          {b.label}
        </label>
            </div>
          ))
          }
      </div>

    <CancellationPolicy />

      {/* Submit Button */}
      <button disabled={loading} className="mt-6 sm:mt-12 xl:mt-11 bg-[#34967C] font-bold text-base xl:text-2xl
       text-white h-13 rounded-xl w-full sm:w-60 xl:w-86 ">
        {loading? "Processing...": "Confirm & Pay"}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>

  </div>
);

export default BookingForm;
