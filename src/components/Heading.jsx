import Tagline from "./Tagline";
const Heading = ({ className, title, text, tag }) => {
  // Use reusable components
  return (
    // Make title responsive on different devices
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {/* Display a tag from the tagline component */}
      {tag && <Tagline className="mb-4 md:justify-center">{tag}</Tagline>}
      {/* Add title of the benefit section from Benefits and Services */}
      {title && <h2 className="h2">{title}</h2>}
      {/* Add text to describe the title */}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
