const BestSell = ({ children }) => {
  return (
    <>
      <h1 className="text-middle pt-14">베스트셀러 * BestSeller</h1>
      <div className="p-20 w-full2 flex flex-row items-center justify-between">
        {children}
      </div>
    </>
  );
};

export default BestSell;