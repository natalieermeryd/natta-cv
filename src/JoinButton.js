import React from "react";
import styles from "./JoinButton.module.css";
const JoinButton = ({ value }) => {
  return (
    <div className={styles.RainbowButton}>
      <input
        type="submit"
        className={styles.InputButton}
        data-testid="joinButton-1"
        value={value}
      ></input>
    </div>
  );
};

export default JoinButton;
