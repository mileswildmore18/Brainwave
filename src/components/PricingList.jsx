import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./button";
// Show 3 different prices of the AI
const PricingList = () => {
  // Display the 3 prices responsive on all size screens and devices
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {/* Add prices from the price index file making the premium the most important from the other price options*/}
      {pricing.map((item) => (
        <div
          key={item.id}
          //   Make titles of each price section different colours
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          {/* Add title for each option */}
          <h4 className="h4 mb-4">{item.title}</h4>
          {/* Add information about each option */}
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>
          {/* Display the price of each section */}
          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>
          {/* Add reusable button for each option if it has a price or not */}
          <Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
            // Make price buttons white if section has a price
            white={!!item.price}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>
          <ul>
            {/* Display features of each pricing section */}
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
