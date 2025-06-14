import React from "react";
import { workExperience } from "@/data";
import { Button } from "@/components/ui/MovingBorder";

const Experience = () => {
  return (
    <div id="experience" className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">Experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            borderRadius="1.75rem"
            key={card.id}
            className="flex-1 text-white border-neutral-20 dark:border-slate-800"
            duration={Math.floor(Math.random() * 5000) + 5000}>
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold pt-2">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
