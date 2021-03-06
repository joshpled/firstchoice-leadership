import React from "react";
import { InfoCard } from "components";

function Personal() {
  return (
    <div className="personal-container">
      <h1 className="personal-header">Personal Coaching</h1>
      <div className="personal-cards">
        <InfoCard
          data={{
            title: "Individual",
            subtitle: "one on one private and confidential coaching",
            text: "When I am working with you one-on-one, it is my highest objective to help you reach your purpose, vision and goals by working through life forming coaching program specific to your needs. Together, we will create a strategic, powerful plan for you to gain clarity through a weekly process including, interaction and accountability.",
            link: "/contact",
            button: "Inquire",
          }}
        />
        <InfoCard
          data={{
            title: "Group",
            subtitle: "small setting onsite or via webinar and video technology",
            text: "When I am working in a group setting – although it’s not singular in nature – having the entire group’s input in thinking magnifies the richness of the discussions and results in developing solutions that are above and beyond what any individual can create. The cohesive bond that is formed empowers each person to develop the leader within and shine in a safe environment that nurtures the group as a whole. It is an experience unlike any other and follows the same premise as an academic think tank.",
            link: "/contact",
            button: "Inquire",
          }}
        />
      </div>
    </div>
  );
}

export default Personal;
