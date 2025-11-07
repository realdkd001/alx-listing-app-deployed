import { Star } from "@/constants";

const OrderSummary: React.FC<{ bookingDetails: any }> = ({ bookingDetails }) => {

  return (

    <div className="bg-white py-6 sm:py-5 px-7 sm:px-6 - xl:py-9 xl:px-10 border-t sm:border-1 border-[#EAEAEA] sm:shadow-xs sm:rounded-xl">

      <h2 className="text-2xl font-bold mb-4">Review Order Details</h2>

      <div className="flex flex-col gap-y-3 sm:gap-y-4 xl:gap-y-5">
        <img src="/assets/image 3.png" alt="Property" className="w-full h-50 object-cover rounded-md" />
        <div className="flex flex-col gap-y-2">
          <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
          <div className="text-sm gap-x-1 xl:gap-x-2 flex  items-center ">
            <div className="size-4">
              <img src={Star} />
            </div>
            4.76 {" "}
            <span className="text-[#929292]">
              (345 reviews)
            </span>
          </div>
          <div className="flex  gap-x-1 sm:gap-x-2 xl:gap-x-3">
            <div className="w-fit text-xs sm:text-base text-[#585858] font-medium bg-[#F7F7F7] py-1 rounded-sm px-2">
            {bookingDetails.startDate} 
            </div>
            <div className="w-fit text-xs sm:text-base text-[#585858] font-medium bg-[#F7F7F7] py-1 rounded-sm px-2">
            {bookingDetails.totalNights} Nights
            </div>
            
          </div>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="mt-6 text-sm">
        <div className="flex justify-between">
          <p className="font-semibold sm:text-xs xl:text-xl text-[#8F8F8F]">Booking Fee</p>
          <p>${bookingDetails.bookingFee}</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="font-semibold sm:text-xs xl:text-xl text-[#8F8F8F]">Subtotal</p>
          <p>${bookingDetails.price}</p>
        </div>
        <div className="flex justify-between mt-2 font-semibold">
          <p className="font-semibold sm:text-xs xl:text-xl text-[#8F8F8F]">Grand Total</p>
          <p>${bookingDetails.bookingFee + bookingDetails.price}</p>
        </div>
      </div>
    </div>

  )
};

export default OrderSummary;