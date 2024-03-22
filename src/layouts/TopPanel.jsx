import { BiArrowBack } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logos/logo.svg";

export default function TopPanel() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="container sticky top-0 z-40 flex h-16 items-center justify-between bg-white text-2xl sm:h-24 lg:shadow-sm xl:text-4xl">
      <BiArrowBack onClick={handleGoBack} />
      <img src={logo} alt="deliBhai logo" className="w-8 xl:w-12" />
      <BsThreeDotsVertical />
    </div>
  );
}
