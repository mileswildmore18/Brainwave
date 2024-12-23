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
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8"
        >
          {/* Add title for each option */}
          <h4 className="h4 mb-4">{item.title}</h4>
          {/* Add information about each option */}
          <p>{item.description}</p>
          {/* Display the price of each section */}
          <div>
            {item.price && (
              <>
                <div>$</div>
                <div>{item.price}</div>
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
            {item.features.map((feature, index) =>(
                <li key={index}>
                    <img src={check} width={24} height={24} alt="Check"/>
                    <p>{feature}</p>
                </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
