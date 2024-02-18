// eslint-disable-next-line react/prop-types
const PageContainer = ({ children }) => {
  return (
    <div className="container max-w-3xl py-4 bg-white relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-6rem)] shadow-sm border-l border-r border-gray-200">
      {children}
    </div>
  );
};

export default PageContainer;
