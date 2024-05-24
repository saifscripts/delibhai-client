/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Modal from "../../../layouts/Modal";
import processing from "../assets/processing.png";

function SubmitModal({ onClose, isOpen, id }) {
  return (
    <Modal
      className="flex w-80 flex-col justify-center gap-8 rounded-3xl py-9"
      isOpen={isOpen}
      onClose={onClose}
    >
      <img
        src={processing}
        alt="Processing User Registration"
        className="mx-auto mb-6 w-1/2"
      />
      <div className="mb-4 text-center">
        <div className="mb-1 text-xl text-primary">Successful</div>
        <div className="w-60">Thank you for registering as dHero</div>
      </div>
      {/* <img src={loader} alt="Loading..." /> */}
      <div className="flex justify-center gap-3">
        <Link to="/" className="rounded-md bg-primary px-3 py-1 text-white">
          হোম
        </Link>
        <Link
          to={`/profile/${id}`}
          className="rounded-md bg-primary px-3 py-1 text-white"
        >
          প্রোফাইল
        </Link>
      </div>
    </Modal>
  );
}

export { SubmitModal };
