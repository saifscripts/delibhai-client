// eslint-disable-next-line react/prop-types
const MiniContainer = ({ children }) => {
  return (
    <div className="container relative min-h-[calc(100vh-4rem)] max-w-3xl border-l border-r border-gray-200 bg-white py-4 shadow-sm sm:min-h-[calc(100vh-6rem)]">
      {children}
    </div>
  );
};

export default MiniContainer;
