import React from "react";
import Section from "./section";
import Heading from "./Heading";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import Tagline from "./Tagline";
import { Gradient } from "./design/Hero";
import Button from "./button";
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
            const status = item.status === "done" ? "Done" : "In Progress";
            // Add the roadmap progress items
            return (
              // Line up the roadmap sections based on large devices and on top of each other on mobile devices as well as giving colour to each section
              <div
                key={item.id}
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
              >
                {/* Add border grid around important item of roadmap */}
                <div className="relative p-8 bg-n-8 rounded-[2rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    {/* Add grid image */}
                    <img
                      src={grid}
                      className="w-full"
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  {/* Make roadmap information responsive on different devices */}
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      {/* Add date of the timeline */}
                      <Tagline>{item.date}</Tagline>
                      {/* Make tagline icons white and words in them stand out */}
                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        {/* Add status of the roadmap sections */}
                        <img
                          src={item.status === "done" ? check2 : loading1}
                          className="mr-2.5"
                          width={16}
                          height={16}
                          alt={status}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>
                    {/* Display images based on the exact roadmap */}
                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        src={item.imageUrl}
                        className="w-full"
                        width={630}
                        height={420}
                        alt={item.title}
                      />
                    </div>
                    {/* Title of each roadmap */}
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}

          <Gradient />
        </div>
        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="/roadmap">Our roadmap</Button>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
