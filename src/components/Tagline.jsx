import brackets from "../assets/svg/Brackets";
const Tagline = ({ className, children }) => {
  return (
    // Display the tagline above the header of the pricing section with brackets on left and right side
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default Tagline;
