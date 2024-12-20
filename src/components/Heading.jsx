const Heading = ({ className, title, text }) => {
  // Use reusable components
  return (
    // Make title responsive on different devices
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {/* Add title of the benefit section from Benefits and Services */}
      {title && <h2 className="h2">{title}</h2>}
      {/* Add text to describe the title */}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
