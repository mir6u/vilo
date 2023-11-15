import React from "react";
import PlanComponent from "./PlanComponent";
import Sidebar from "./Sidebar";

const plans = [
  {
    title: "Premium Plan",
    description: [
      "Background video",
      "Add more links",
      "Color changes",
      "Premium Badge",
      "Special panel & chats",
    ],
    price: "$7.99",
  },
  {
    title: "Custom plan",
    description: [
      "Special Features",
      "Customise your plan",
      "Custom badge",
      "More + Everything from Premium",
    ],
    price: 'Custom price',
  },
];

const PlanSection = () => {
  return (
    <>
      <div className="2xl:flex lg:grid grid-cols-2 gap-3   grid-c   ">
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
