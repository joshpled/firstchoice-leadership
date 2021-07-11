import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-header display-4">ABOUT | QUALIFICATIONS</div>
      <div className="about-intro">
        I am excited to see you here exploring who are we and what we do. <br></br>I am a Certified Lifeforming Coach, Trainer, and Keynote/Transformational
        Speaker.
      </div>
      <div className="about-body">
        <div className="about-body-one">
          “Empowering Leaders for Every Situation."<br></br>First Choice Leadership was created after being frustrated with “leaders” who did not know how to
          deal with stressful situations when they presented. First Choice is the instrument you can use to challenge yourself and to take you to the next level
          of greatness and success. Let me partner with you.
        </div>
        <div className="about-body-two">
          If you ready, and only you know if you are, contact me NOW!<br></br> Moreover, as a John Maxwell Certified Coach, Teacher, Trainer, and Speaker, I can
          offer you workshops, seminars, keynote speaking, and coaching, aiding your personal and professional growth through study and practical application of
          John’s proven leadership methods. Working together, I will move you and/or your team or organization in the desired direction to reach your goals.
        </div>
        <div className="about-body-three">
          Working together, I will move you and/or your team or organization in the desired direction to reach your goals. Contact Me. I am looking forward to
          assisting you on your journey to becoming a successful leader. Together we can unlock the leader in you for every situation.
        </div>
      </div>
      <div style={{ textAlign: "center" }} className="about-maxwell">
        <a href="http://www.johncmaxwellgroup.com/jesusperez">http://www.johncmaxwellgroup.com/jesusperez</a>
      </div>
      <div className="about-footer">
        <div>
          <FontAwesomeIcon icon="envelope-open" />
          <a href="mailto:jesusmperez@ileadperez.com">jesusmperez@ileadperez.com</a>
        </div>
        <div>
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
          <a href="http://www.linkedin.com/in/jesus-perez-b5033030/">linkedin.com/in/jesus-perez-b5033030/</a>
        </div>
        <div>
          <FontAwesomeIcon icon={["fab", "twitter"]} />
          <a href="http://twitter.com/jesuper">twitter.com/jesuper</a>
        </div>
        <div>
          <FontAwesomeIcon icon={["fab", "facebook"]} />
          <a href="http://facebook.com/profile.php?id=100008540052301">facebook.com/profile.php?id=100008540052301</a>
        </div>
      </div>
    </div>
  );
}

export default About;
