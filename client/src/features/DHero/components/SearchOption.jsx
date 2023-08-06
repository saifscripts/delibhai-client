// eslint-disable-next-line react/prop-types
export default function SearchOption({ text, fill, handleSelectSearchOption }) {
  return (
    <div
      className='flex items-center gap-4 my-4 hover:cursor-default'
      onClick={handleSelectSearchOption}>
      <div
        className={`w-5 aspect-square rounded-full border border-gray-500 ${
          fill && 'bg-primary border-primary'
        }`}></div>
      <div className='text-md font-inter'>{text}</div>
    </div>
  );
}
