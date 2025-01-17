import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import Section from "./section";
// Display the pricing of the AI
const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          {/* Display the sphere in medium and large devices */}
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          {/* Display the stars to border around the sphere */}
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>
        {/* Display reusable heading */}
        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />
        {/* Display the list of prices custom lines on each side*/}
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        {/* Provide a link for more detail on the pricing sections */}
        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
