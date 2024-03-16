import { getAllDivision } from "bd-divisions-to-unions";
import { useState } from "react";
import toast from "react-hot-toast";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchData } from "../../../api/api";
import Button from "../../../components/ui/Button";
import Container from "../../../layouts/Container";
import Title from "../../../layouts/Title";
import { Address } from "../../Profile";
import getSelectedAddress from "../../Profile/utils/getSelectedAddress";
import { SearchOption } from "../index";

const defaultAddressValue = {
  division: getAllDivision(),
  district: null,
  upazila: null,
  union: null,
};

export default function DHeroSearch() {
  const { vehicle } = useParams();
  const [address, setAddress] = useState(defaultAddressValue);

  const [activeOption, setActiveOption] = useState(0);
  const { fetchData } = useFetchData();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchInfo = { vehicle, ...getSelectedAddress(address) };
    const heros = await fetchData("/v1/user/heros", searchInfo);
    if (heros?.data?.success) {
      navigate("/search", { state: { heros: heros.data.data } });
    }
  };

  return (
    <>
      <Title color="black" title="ডেলিভাই হিরো (সার্চ)" />
      <Container>
        <div className="w-fit mx-auto mb-8">
          <SearchOption
            fill={activeOption === 1}
            text="Location Tracking (Nearest)"
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
            text="Manual Search"
            handleSelectSearchOption={() => setActiveOption(2)}
          />
        </div>

        {activeOption === 1 && (
          <p className="text-center text-3xl my-32">Not Available</p>
        )}

        {activeOption === 2 && (
          <form
            className="max-w-[500px] mx-auto text-gray-500 mb-6"
            onSubmit={handleSubmit}
          >
            <Address address={address} setAddress={setAddress} />

            <Button type="submit" value="Search" icon={<BiSearchAlt />} />
          </form>
        )}
      </Container>
    </>
  );
}
