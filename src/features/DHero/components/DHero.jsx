import { getAllDivision } from "bd-divisions-to-unions";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";
import vehicles from "../../../data/vehicles";
import MiniContainer from "../../../layouts/MiniContainer";
import Title from "../../../layouts/Title";
import cn from "../../../lib/cn";
import { ScrollItem, ScrollMenu } from "../../../lib/scrollable-menu";
import { Address } from "../../Profile";
import getSelectedAddress from "../../Profile/utils/getSelectedAddress";
import restoreAddressState from "../../Profile/utils/restoreAddressState";
import { SearchOption } from "../index";

const defaultAddressValue = {
  division: getAllDivision(),
  district: null,
  upazila: null,
  union: null,
};

export default function DHero() {
  const [vehicle, setVehicle] = useState("বাইক");
  const [address, setAddress] = useState(defaultAddressValue);
  const [activeOption, setActiveOption] = useState(2);
  // const [heros, setHeros] = useState([]);

  // const { fetchData } = useFetchData();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { division, district, upazila, union } = getSelectedAddress(address);
    navigate(
      `/search?vehicle=${vehicle}&division=${division}&district=${district}&upazila=${upazila}&union=${union}`
    );
    // const searchInfo = { vehicle, ...getSelectedAddress(address) };
    // const heros = await fetchData("/v1/user/heros", searchInfo);
    // if (heros?.data?.success) {
    //   setHeros(heros.data.data);
    // }
  };

  useEffect(() => {
    const searchParams = JSON.parse(localStorage.getItem("heroSearchParams"));
    if (searchParams) {
      const { vehicle, ...address } = searchParams;
      setVehicle(vehicle);
      setAddress(restoreAddressState(address));
    }
  }, []);

  return (
    <div className="min-h-screen relative">
      <MiniContainer>
        <Title title="ডেলিভাই হিরো" />
        <h2 className="text-2xl font-semibold pt-4">গাড়ির ধরণ</h2>

        {/* <Select options={vehicles} selected="গাড়ি নির্বাচন করুন" /> */}
        <ScrollMenu arrow>
          {vehicles.map(({ title, icon }) => (
            <ScrollItem
              key={title}
              onClick={() => setVehicle(title)}
              className={cn(
                "flex flex-col justify-center items-center gap-3 w-24 sm:w-32 aspect-square p-3 shadow-md rounded-lg",
                { "bg-secondary bg-opacity-30": vehicle === title }
              )}
            >
              <img src={icon} alt={title} className="w-2/3 aspect-square" />
              <p className="text-base sm:text-xl text-center">{title}</p>
            </ScrollItem>
          ))}
        </ScrollMenu>

        {/* <hr className="border-b border-gray-300" /> */}
        {/* <Categories categories={vehicles} /> */}

        <h2 className="text-2xl font-semibold pt-4">নিজ ঠিকানা</h2>

        <div className="w-fit mx-auto mb-8">
          <SearchOption
            fill={activeOption === 1}
            text="GPS Location"
            handleSelectSearchOption={() => {
              setActiveOption(1);
              toast.error(
                'এই সার্ভিসটি আপডেটের কাজ চলমান! দয়া করে "Manual Search" অপশনটি নির্বাচন করুন',
                {
                  duration: 4000,
                  position: "top-center",
                  style: {
                    backgroundColor: "#efef8d",
                  },
                }
              );
            }}
          />
          <SearchOption
            fill={activeOption === 2}
            text="Manual Location"
            handleSelectSearchOption={() => setActiveOption(2)}
          />
        </div>

        {activeOption === 1 && (
          <p className="text-center text-3xl my-32">Not Available</p>
        )}

        {activeOption === 2 && (
          <form className="w-full text-gray-500 mb-6" onSubmit={handleSubmit}>
            <Address address={address} setAddress={setAddress} />

            <Button type="submit" value="Search" icon={<BiSearchAlt />} />
          </form>
        )}

        {/* <div className="my-8 flex flex-col gap-4 w-fit max-w-full mx-auto">
          {heros?.map((hero) => (
            <Hero details={hero} key={hero._id} />
          ))}
        </div> */}
      </MiniContainer>
    </div>
  );
}
