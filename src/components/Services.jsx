import Section from "./section"
import Heading from "./Heading"
import { service1, service2, service3, check } from "../assets"
// Add services to the website
const Services = () => {
  return (
    <Section id="hot-to-use">
        <div className="container">
            <Heading title="Generative AI made for creators" text="Brainwave unlocks the potential of AI-powered applications"/>
            {/* Make content responsive on different size screens and devices */}
            <div className="relative">
            <div className="relative z-1 flex items-center h-[39rem] mb -5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[456rem]">
                <div>
                    {/* Add image for 1st content */}
                    <img src={service1}/>
                </div>
            </div>
            </div>
        </div>
    </Section>
  )
}

export default Services