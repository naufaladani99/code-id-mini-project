const Wrapper = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <p className="text-2xl font-semibold text-gray-800 mb-2">Our Network</p>
      {children}
    </div>
  );
};

export default Wrapper;
