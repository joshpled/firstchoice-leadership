import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactInfo() {
  return (
    <div className="contact-info">
      <div>
        <FontAwesomeIcon icon="user" style={styles.margin} />
        Jesus M. Perez
      </div>
      <div className="contact-emailphone">
        <div>
          <FontAwesomeIcon icon="phone-alt" style={styles.margin} /> 256.419.3171
        </div>
        <div>
          <FontAwesomeIcon icon="envelope-open" style={styles.margin} />
          evangelistjmperez@gmail.com
        </div>
      </div>
      <div>
        Based out of Fort Benning.
        <br />
        Available anywhere and remote. <br />I speak English and Spanish fluently.
      </div>
    </div>
  );
}

export default ContactInfo;

const styles = {
  margin: {
    marginRight: "10px",
  },
};
