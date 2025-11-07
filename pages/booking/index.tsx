import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import PageNav from "@/components/common/PageNav";
import axios from "axios";
import { useState } from "react";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };
    const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string |null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/bookings", formData);
      alert("Booking confirmed!");
    } catch (error) {
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      <PageNav />
      <div className="container mx-auto sm:px-10 xl:px-34">
        <div className="mb-4 sm:mb-8 grid grid-col-1 sm:grid-cols-2 gap-6">
          <div className="px-7 order-2 sm:order">
            <BookingForm error={error} loading={loading} onSubmit={handleSubmit}/>
          </div>
          <div className="order-1 sm:order-2 sm:pt-5 xl:pt-8">
            <OrderSummary bookingDetails={bookingDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}