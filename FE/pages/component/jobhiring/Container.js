const Container = ({ children }) => {
  return (
    <div className="shadow border flex flex-col md:flex-row items-center md:items-start justify-center p-5 gap-5 rounded">
      {children}
    </div>
  );
};

export default Container;
