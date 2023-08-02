// eslint-disable-next-line react/prop-types
const Title = ({ title, color }) => {
  return (
    <h1
      className={`text-${color} text-2xl text-center font-bold py-4 border-b border-gray-300 lg:text-4x`}>
      {title}
    </h1>
  );
};

export default Title;
