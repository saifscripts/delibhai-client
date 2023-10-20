/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Modal from "../../../layouts/Modal";
import processing from "../assets/processing.png";

function SubmitModal({ onClose, isOpen, id }) {
  return (
    <Modal
      className="w-80 rounded-3xl flex flex-col items-center gap-8 py-9"
      isOpen={isOpen}
      onClose={onClose}
    >
      <img src={processing} alt="Processing User Registration" />
      <div className="text-center">
        <div className="text-primary text-xl">Successful</div>
        <div className="w-60">Thank you for registering as dHero</div>
      </div>
      {/* <img src={loader} alt="Loading..." /> */}
      <div className="flex gap-3">
        <Link to="/" className="bg-primary px-3 py-1 text-white rounded-md">
          হোম
        </Link>
        <Link
          to={`/profile/${id}`}
          className="bg-primary px-3 py-1 text-white rounded-md"
        >
          প্রোফাইল
        </Link>
      </div>
    </Modal>
  );
}

export { SubmitModal };
