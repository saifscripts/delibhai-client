// eslint-disable-next-line react/prop-types
const Title = ({ title, subtitle, color }) => {
  return (
    <div
      className={`text-${color} text-center py-4 ${
        color === 'white' ? '' : 'border-b border-gray-300'
      }`}>
      <h1 className={`text-2xl font-bold lg:text-4xl`}>{title}</h1>
      <p className='mt-2'>{subtitle}</p>
    </div>
  );
};

export default Title;
