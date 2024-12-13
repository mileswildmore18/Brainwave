import ButtonSvg from "../assets/svg/ButtonSvg";
// Make button a reusable component
const Button = ({ className, href, onClick, children, px, white }) => {
  // Add a special border to form colours and cut on top right corner to pass to the button
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
//   Make button more reusable
const spanClasses = 'relative z-10';
  const renderButton = () => (
    <button className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

// Add link to the button
  const renderLink = () => (
    <a href={href} className={classes}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
    </a>
  )
  return href
  ? renderLink()
  : renderButton();
};

export default Button;
