import { AiFillCamera } from 'react-icons/ai';
import { GiResize } from 'react-icons/gi';
import { GrAttachment } from 'react-icons/gr';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { EditOption } from '../index.js';

const options = [
  { icon: <GiResize />, text: 'ছবি রিসাইজ' },
  { icon: <GrAttachment />, text: 'ফাইল থেকে আপলোড' },
  { icon: <AiFillCamera />, text: 'নতুন ছবি তুলুন' },
  { icon: <RiDeleteBin5Fill />, text: 'ছবি ডিলিট করুন' },
];

/* eslint-disable react/prop-types */
export default function EditAvatar({ handleEdit, edit }) {
  return (
    <>
      <div
        onClick={handleEdit}
        className={`top-0 bottom-0 left-0 right-0 bg-black  z-40  transition-opacity ${
          edit ? 'fixed opacity-40' : 'none opacity-0'
        }`}></div>
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white z-50 rounded-t-xl transition-transform ${
          edit ? 'translate-y-0' : 'translate-y-full'
        }`}>
        <div className={`w-10 h-1 bg-accent rounded-full mx-auto mt-2`}></div>
        <div className='p-7 flex flex-col gap-5'>
          {options.map(({ icon, text }, index) => (
            <EditOption key={index} icon={icon} text={text} />
          ))}
        </div>
      </div>
    </>
  );
}
