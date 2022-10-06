const BestSell = ({ children }) => {
  return (
    <>
      <h1 className="text-middle pt-14">베스트셀러 * BestSeller</h1>
      <div className="p-8 flex flex-col items-center">
        <ul>{children}</ul>
      </div>
    </>
  );
};

export default BestSell;