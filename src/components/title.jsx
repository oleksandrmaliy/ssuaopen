const Title = ({ children }) => {
  return (
    <div className="mb-10">
      <h3 className="rounded-lg bg-green-500 p-4 text-center text-2xl font-bold">
        {children}
      </h3>
    </div>
  );
};

export default Title;
