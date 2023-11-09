import React from "react";
import PlanComponent from "./PlanComponent";
import Sidebar from "./Sidebar";

const plans = [
  {
    title: "Basic Plan",
    description: [
      "Background video",
      "Color changes",
      "Basic Badge",
      "Special panel & chats",
      "More",
    ],
    price: 2.99,
  },
  {
    title: "Premium Plan",
    description: [
      "Background video",
      "Color changes",
      "Premium Badge",
      "Special panel & chats",
      "More + Everything from Basic",
    ],
    price: 7.99,
  },
  {
    title: "Elite Plan",
    description: [
      "Background video",
      "Color changes",
      "Elite +Badge",
      "Special panel & chats",
      "More + Everything from Premium",
    ],
    price: 12.99,
  },
];

const PlanSection = () => {
  return (
    <>
      <div className="lg:flex  gap-3 lg:snap-none  lg:overflow-hidden snap-x snap-mandatory    overflow-x-scroll grid-c  grid-flow-col  ">
        {plans.map((plan) => {
          return (
            <PlanComponent
              key={plan.title}
              title={plan.title}
              description={plan.description}
              price={plan.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default PlanSection;
