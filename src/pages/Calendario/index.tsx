import { useContext } from "react";
import WeekCalendar from "../../components/WeekCalendar";
import { UserContext } from "../../context/UserContext";
import styles from "./styles.module.css";

const Calendar = () => {
  const { theme } = useContext(UserContext);
  return (
    <div className={styles.main}>
      <div
        className={styles.section}
        style={{ backgroundColor: theme === "dark" ? "#333" : "#fff" }}
      >
        <WeekCalendar />
      </div>
    </div>
  );
};

export default Calendar;
