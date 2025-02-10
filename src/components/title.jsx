const Title = ({ children }) => {
  return (
    <>
      <h3 className="mb-4 p-4 bg-green-500 rounded-lg text-center font-bold text-2xl">
        {children}
      </h3>
    </>
  );
};

export default Title;
