import styles from "./ApplyForm.module.css";
import { FaUser, FaEnvelope, FaUpload, FaTimes } from "react-icons/fa";

const ApplyForm = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <button className={styles.closeBtn}>
          <FaTimes />
        </button>
        <div className={styles.iconWrapper}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.paperPlane}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" />
          </svg>
        </div>
        <h2 className={styles.title}>Apply for Position</h2>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <FaUser className={styles.icon} />
            <input
              type="text"
              placeholder="Enter Full Name"
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <FaEnvelope className={styles.icon} />
            <input
              type="email"
              placeholder="Enter Email Address"
              className={styles.input}
            />
          </div>

          <div className={styles.uploadBox}>
            <FaUpload className={styles.uploadIcon} />
            <span>Upload Sample Work</span>
            <input type="file" className={styles.fileInput} />
          </div>

          <button type="submit" className={styles.applyBtn}>
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
