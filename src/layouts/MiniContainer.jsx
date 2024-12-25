// eslint-disable-next-line react/prop-types
const MiniContainer = ({ children }) => {
  return (
    <div className="container relative max-w-3xl border-l border-r  py-4 shadow-sm">
      {children}
    </div>
  );
};

export default MiniContainer;
