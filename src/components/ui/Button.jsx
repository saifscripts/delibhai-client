// eslint-disable-next-line react/prop-types
export default function Button({ value, icon, ...props }) {
  return (
    <button
      className='bg-secondary text-white text-xl font-bold font-inter mx-auto w-full max-w-[310px] h-[70px] rounded-full shadow mt-6 flex justify-center items-center gap-5'
      {...props}>
      <span>{value}</span>
      <span className='text-3xl'>{icon}</span>
    </button>
  );
}
