import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useGeolocation } from "../../../../contexts/location.context";
import vehicles from "../../../../data/vehicles";
import Container from "../../../../layouts/Container";
import cn from "../../../../lib/cn";

export default function VehicleType() {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();
  const { error } = useGeolocation();

  const items = showMore ? vehicles : vehicles.slice(0, 9);

  return (
    <section className="bg-white py-4 sm:py-8">
      <Container className="">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-4 text-lg font-semibold text-[#717273] sm:mb-8 sm:text-center sm:text-4xl">
            গাড়ি নির্বাচন করুন<span className="sm:hidden">:</span>
          </h2>
          <div className="relative mx-auto grid max-w-xl grid-cols-3 gap-3 px-2 tn:px-5 xs:gap-4">
            {items.map(({ id, icon, title }) => {
              return (
                <div
                  key={id}
                  onClick={() => {
                    if (error) {
                      toast.error(error);
                    } else {
                      navigate(
                        `search?vehicleType=${title.split(" ").join("+")}`,
                      );
                    }
                  }}
                  className={cn(
                    "flex aspect-square cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-[#D3D3D4] bg-[#F5F6F6] px-1 py-2 hover:border-[#00E7AD] hover:bg-[#8AFFE1] sm:gap-4",
                  )}
                >
                  <img
                    src={icon}
                    alt={title}
                    className="aspect-square w-[60%]"
                  />
                  <p className="text-center text-sm text-gray-500 sm:text-2xl">
                    {title}
                  </p>
                </div>
              );
            })}

            {/* Overlay */}
            {!showMore && (
              <div className="absolute inset-x-2 -bottom-4 flex h-[40%] items-end justify-center bg-gradient-to-b from-white/0 via-white/70 to-white tn:inset-x-5 sm:-bottom-8">
                <button
                  className="flex items-center justify-center gap-1 rounded-full border px-3 py-1 text-[#00B487] shadow-xl"
                  onClick={() => setShowMore(true)}
                >
                  আরো দেখুন
                  <BiChevronDown className="text-xl" />
                </button>
              </div>
            )}
          </div>

          {showMore && (
            <div className="mt-4 flex justify-center">
              <button
                className="flex items-center justify-center gap-1 rounded-full border px-3 py-1 text-[#00B487] shadow-xl"
                onClick={() => setShowMore(false)}
              >
                কম দেখুন
                <BiChevronUp className="text-xl" />
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
