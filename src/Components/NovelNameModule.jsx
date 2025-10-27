import React from "react";
import styles from "./NovelPopup.module.css";
import { X } from "lucide-react";

function NovelPopup({ onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.leftSection}>
          <div className={styles.imagePlaceholder}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              className={styles.icon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25m0 0L18 7.5m-2.25-2.25L13.5 7.5M8.25 15v3.75m0 0L6 16.5m2.25 2.25L10.5 16.5M3.375 19.125a1.125 1.125 0 01-1.125-1.125V6a1.125 1.125 0 011.125-1.125h17.25A1.125 1.125 0 0121.75 6v12a1.125 1.125 0 01-1.125 1.125H3.375z"
              />
            </svg>
          </div>
        </div>

        <div className={styles.rightSection}>
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={16} />
          </button>
          <p className={styles.genre}>Genre</p>
          <h2 className={styles.title}>Novel Name</h2>

          <div className={styles.infoRow}>
            <span>Author Name </span>
            <span>Writer Name</span>
          </div>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            
          </p>

          <button className={styles.applyBtn}>
            Apply for Position <span className={styles.arrow}>›</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NovelPopup;
