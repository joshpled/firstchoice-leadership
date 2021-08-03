import React from "react";

function Professional() {
  const { title, para1 } = data;
  return (
    <div className="professional-wrapper">
      <div>
        <h1>{title}</h1>
      </div>
      <div className="professional-main">
        <p>{para1}</p>
      </div>
    </div>
  );
}

export default Professional;

const data = {
  title: "WHAT IS COACHING?",
  para1:
    "The International Coach Federation defines coaching as “partnering with clients in a thought-provoking and creative process that inspires them to maximize their personal and professional potential.”",
};

/*
      The International Coach Federation defines coaching as “partnering with clients in a thought-provoking and creative process that inspires them to
        maximize their personal and professional potential.” Coaching is the art of relating with a person productively in a way that energizes them to achieve
        extraordinary results in their desired objective. Professionally trained in core coaching competencies and coaching ethics, coaches partner with clients
        to identify important goals and priorities, strategize about how to reach them, and overcome obstacles that crop up along the way. A life forming Coach
        creates a relational atmosphere through coaching competencies and values for clients to discover their unique design, desires, dreams and destiny, both
        personally and professionally. What makes us different? First Choice Leadership Coach is a leadership coach training organization for relationally
        focused leaders looking for sustainable change in their spheres of influence. If you are searching for a systematic, effective coaching methodology to
        develop leaders with character and competence, then First Choice Leadership Coach training is the answer. We train and equip coaches who desire to coach
        individuals to be all they can be, live their dreams, improve their performance, increase their focus and ultimately finish well in their lives,
        careers, organizations and businesses. We uniquely integrate several methods of training (one-on-one with a trainer, peer relationships, tele-classes,
        workshops, feedback, debriefing and working with clients) to give you the most effective learning experience for your investment. We get results because
        we have a holistic approach to training, believing that the best transformational coaching comes from transformed coaches. You will be ruined for the
        ordinary and you will never be the same! ABOUT US History In 2005, the Institute of Leadership Education and Development (ILEAD) was formed for the
        express purpose of bringing the best of coach training into organizations and their key personnel. In 2021 ILEAD began operating as First Choice
        Leadership. We continue to partner with friends and coaches around the world. Our Legacy Believing in People ‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍by empowering others‍‍‍ for
        being the difference and making the difference. We train leaders to maximize their own and their team’s Professional and Personal Leadership
        Effectiveness. Authentic Leadership ‍‍‍‍‍‍that creates healthy workplace cultures for workers, leaders, vendors, and customers. Every conversation
        should move the dial towards greater buy-in to the values and vision. ‍‍‍ Loving our Labor ‍‍‍‍‍‍by making a living doing what we love. Every employee
        and staff should be coached to see how their work-life is key to the intersection of their Purpose and Passion. ‍‍
        */
