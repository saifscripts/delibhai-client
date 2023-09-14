/* eslint-disable react/prop-types */
import Modal from "../../../layouts/Modal"
import processing from '../assets/processing.png'
import loader from '../assets/loader.png'

function SubmitModal({onClose, isOpen}) {
  return (
    <Modal className='w-80 rounded-3xl flex flex-col items-center gap-8 py-9' isOpen={isOpen} onClose={onClose} >
        <img src={processing} alt="Processing User Registration" />
        <div className="text-center">
            <div className="text-primary text-xl">Successful</div>
            <div className="w-60">Please wait a moment, we are preparing for you</div>
        </div> 
        <img src={loader} alt="Loading..." />
        {/* <button className="border border-primary p-2" onClick={onClose}>Close</button> */}
    </Modal>
  )
}

export {SubmitModal}