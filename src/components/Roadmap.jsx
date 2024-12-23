import React from "react";
import Section from "./section";
import Heading from "./Heading";
import { roadmap } from "../constants";
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
        })}
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
