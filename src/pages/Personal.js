import React from "react";
import { InfoCard } from "components";

function Personal() {
  return (
    <div>
      <header className="personal-header">
        <h1>Personal</h1>
      </header>
      <div className="personal-buttons">
        <div className="personal-cards">
          <InfoCard
            data={{
              title: "This is a card",
              text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, quas. Quibusdam quia nostrum consequatur cupiditate.",
              link: true,
              button: "this is a button",
            }}
          />
          <InfoCard
            data={{
              title: "This is a card",
              text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, quas. Quibusdam quia nostrum consequatur cupiditate.",
              link: true,
              button: "this is a button",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Personal;
