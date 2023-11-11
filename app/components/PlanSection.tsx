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
    price: "$2.99",
  },
  {
    title: "Premium Plan",
    description: [
      "Background video",
      "Add more links",
      "Color changes",
      "Premium Badge",
      "Special panel & chats",
      "More + Everything from Basic",
    ],
    price: "$7.99",
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
    price: "$12.99",
  },
  {
    title: "Custom plan",
    description: [
      "Background video",
      "Color changes",
      "Elite +Badge",
      "Special panel & chats",
      "More + Everything from Premium",
    ],
    price: 'Custom price',
  },
];

const PlanSection = () => {
  return (
    <>
      <div className="2xl:flex lg:grid grid-cols-2 gap-3  grid-c   ">
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
