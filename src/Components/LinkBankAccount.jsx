import React, { useState } from "react";
import styles from "./LinkBankAccount.module.css";
import { ArrowLeft, Plus, Link2, Unlink } from "lucide-react";

const LinkBankAccount = () => {
  const [selected, setSelected] = useState(0);

  const accounts = [
    { id: 0, name: "Account Name", amount: "$2000.00" },
    { id: 1, name: "Account Name", amount: "$2000.00" },
    { id: 2, name: "Account Name", amount: "$2000.00" },
  ];

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <button className={styles.iconButton}>
          <ArrowLeft size={18} />
        </button>
        <h2>Link Bank Account</h2>
        <button className={styles.iconButton}>
          <Plus size={18} />
        </button>
      </div>

      {/* Title */}
      <p className={styles.subtitle}>
        Which Bank Account do you want to link with Story Host?
      </p>

      {/* Accounts */}
      <div className={styles.accountList}>
        {accounts.map((acc) => (
          <div
            key={acc.id}
            className={`${styles.accountCard} ${
              selected === acc.id ? styles.active : ""
            }`}
            onClick={() => setSelected(acc.id)}
          >
            <h4>{acc.name}</h4>
            <p>{acc.amount}</p>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className={styles.actions}>
        {accounts.map((acc) => (
          <button
            key={acc.id}
            className={`${styles.linkButton} ${
              selected === acc.id ? styles.unlink : ""
            }`}
          >
            {selected === acc.id ? (
              <>
                <Unlink size={16} /> Unlink
              </>
            ) : (
              <>
                <Link2 size={16} /> Link
              </>
            )}
          </button>
        ))}
      </div>

      {/* Illustration */}
      <div className={styles.illustration}>
        <img src="/illustration.png" alt="Illustration" />
      </div>
    </div>
  );
};

export default LinkBankAccount;
