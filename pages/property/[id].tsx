import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";
import axios from "axios";
import { useState, useEffect } from "react";
import { PropertyProps } from "@/interfaces";

export default function PropertyPage() {
  const router = useRouter();
  const { propertyId } = router.query;
  const [property, setProperty] = useState<PropertyProps | null>(null);


  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }
  if (!property) return <p>Property not found</p>;

  return (
    <div>
      <PropertyDetail property={property} />
      <BookingSection price={property?.price} />
      <ReviewSection reviews={reviews} />
    </div>
  );
}