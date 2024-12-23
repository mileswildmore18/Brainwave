import React from "react";
import Section from "./section";
import Heading from "./Heading";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import Tagline from "./Tagline";
// Add the future productivity worked on
const Roadmap = () => {
  return (
    // Add reusable components and make it responsive on multiple devices
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title="What we're working on" />
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
            {/* Declare is status of the roadmaps are ready or still in progress */}
        {roadmap.map((item) => {
            const status = item.status === 'done' ? 'Done' : 'In Progress';
            // Add the roadmap progress items
            return (
                <div key={item.id}>
                    <div>
                        <div>
                            {/* Add grid image */}
                            <img src={grid} className="w-full" width={550} height={550} alt="Grid"/>
                        </div>
                        <div className="relative z-1">
                            <div className="flex items-center justify-between">
                                {/* Add date of the timeline */}
                                <Tagline>
                                    {item.date}
                                </Tagline>
                                <div>
                                    {/* Add status of the roadmap sections */}
                                    <img src={item.status === 'done' ? check2 : loading1} className="mr-2.5" width={16} height={16} alt="Status"/>
                                    <div className="tagline">
                                        {status}
                                    </div>
                                </div>
                                {/* Display images based on the exact roadmap */}
                                <div className="mb-10">
                                <img src={item.imageUrl} className="w-full" width={630} height={420} alt={item.title}/>
                                </div>
                                {/* Title of each roadmap */}
                                <h4 className="h4 mb-4">{item.title}</h4>
                                <p className="body-2 text-n-4">{item.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
