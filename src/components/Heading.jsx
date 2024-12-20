const Heading = ({ className, title }) => {
  // Use reusable components
  return (
    // Make title responsive on different devices
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {/* Add title of the benefit section from Benefits */}
      {title && <h2 className="h2">{title}</h2>}
    </div>
  );
};

export default Heading;
