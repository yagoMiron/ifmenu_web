import styles from "./styles.module.css";

type Props = {
  message: string;
  severity: string;
};

const Advice = ({ message, severity }: Props) => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: severity === "grave" ? "red" : "#ff5c4a",
      }}
    >
      <span>{message}</span>
    </div>
  );
};

export default Advice;
