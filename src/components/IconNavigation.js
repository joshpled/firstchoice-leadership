import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconNavigation() {
  return (
    <div className="landing-navigation">
      <Link to="/">
        <FontAwesomeIcon icon="home" size="2x" style={styles.margins} />
      </Link>
      <span className="separator" style={styles.seperator}>
        |
      </span>
      <Link to="/personal">
        <FontAwesomeIcon icon="people-arrows" size="2x" style={styles.margins} />
      </Link>
      <span className="separator" style={styles.seperator}>
        |
      </span>
      <Link to="/professional">
        <FontAwesomeIcon icon="user-tie" size="2x" style={styles.margins} />
      </Link>
      <span className="separator" style={styles.seperator}>
        |
      </span>
      <Link to="/contact-me">
        <FontAwesomeIcon icon="envelope-open" size="2x" style={styles.margins} />
      </Link>
      <span className="separator" style={styles.seperator}>
        |
      </span>
      <Link to="/about">
        <FontAwesomeIcon icon="id-card" size="2x" style={styles.margins} />
      </Link>
    </div>
  );
}

export default IconNavigation;

const styles = {
  margins: {
    margin: "0 20px 20px 20px",
    color: "gray",
  },
  seperator: {
    marginBottom: "20px",
  },
};
