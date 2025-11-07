import { HEROIMAGESRC } from "@/constants";
import FilterSection from "@/components/common/FilterSection";
import Card from "@/components/common/Card";
import { PropertyProps } from "@/interfaces";
import Nav from "@/components/common/Nav";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <section className="mx-4 sm:mx-10 flex flex-col sm:flex-col gap-y-4 sm:gap-y-0">
        <Nav />
        {/* Hero */}
        <div className="order-2 sm:order-1 flex justify-center items-center 
      text-white bg-cover bg-center h-[296px] sm:h-[421px] 2xl:h-[481px] rounded-[27px]"
          style={{ backgroundImage: `url(${HEROIMAGESRC})` }}
        >
          <div className="flex flex-col justify-center items-center sm:max-w-[633px] text-center px-5">
            <h3 className="text-[28px] sm:text-[69px] 2xl:text-[94px] font-semibold leading-[30px] sm:leading-[72px] 2xl:leading-[99px]">
              Find your favorite place here!
            </h3>
            <p className="text-[8px ] sm:text-[18px] 2xl:text-[24px] font-medium leading-[100%] 2xl:leading-[32px] mt-4">
              The best prices for over 2 million properties worldwide.
            </p>
          </div>
        </div>

        {/* Filter */}
        <div className="order-1 sm:order-2 w-full sm:px-[40px] overflow-hidden">
          <FilterSection />
        </div>
      </section>




      <section>
        <div className="mt-8 sm:mt-0 sm:mx-[30px] w-full grid grid-cols-1 
        sm:grid-cols-2 2xl:grid-cols-4 gap-y-10 sm:gap-y-8 gap-6">
          {properties.map((property, index) => (
            <Card key={index} {...property} />
          ))}
        </div>
      </section>

    </>
  );
}
