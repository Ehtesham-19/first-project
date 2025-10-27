import React from "react";
import styles from "./PrivacyPolicy.module.css";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <button className={styles.backButton}>
          <ArrowLeft size={18} />
        </button>
        <h1 className={styles.title}>Story Host</h1>
      </div>

      {/* Subtitle */}
      <div className={styles.subHeader}>
        <h3>Terms And Conditions</h3>
        <div className={styles.underline}></div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {[1, 2, 3].map((section) => (
          <div key={section} className={styles.section}>
            <h4>Lorem Ipsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
              dolor in hendrerit in vulputate velit esse molestie consequat, vel
              illum dolore eu feugiat nulla facilisis at vero eros et accumsan
              et iusto odio dignissim qui blandit praesent luptatum zzril
              delenit augue duis dolore te feugait nulla facilisi.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
              dolor in hendrerit in vulputate velit esse molestie consequat, vel
              illum dolore eu feugiat nulla facilisis at vero eros et accumsan
              et iusto odio dignissim qui blandit praesent luptatum zzril
              delenit augue duis dolore te feugait nulla facilisi.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
