const H1 = ({ children }) => {
  return (
    <h1 className="text-center mb-10">
      <span className="newcrea-title inline-block text-paletteColor2">
        NewCrea
      </span>
      <div>{children}</div>
    </h1>
  );
};

export default H1;
