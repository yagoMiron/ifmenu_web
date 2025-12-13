import React, { useContext } from "react";
import styles from "./styles.module.css";
import { UserContext } from "../../context/UserContext";
import Colors from "../../enums/colors";

type BalloonProps = {
  children: React.ReactNode;
  direction?: "left" | "right";
};

export default function Balloon({
  children,
  direction = "left",
}: BalloonProps) {
  const { theme } = useContext(UserContext);
  const backgroundColor = theme === "dark" ? Colors.BG_DARK : Colors.BG_LIGHT;
  const textColor = theme === "dark" ? Colors.FONT_DARK : Colors.FONT_LIGHT;
  return (
    <div
      className={styles.container}
      style={{
        alignItems: direction === "right" ? "flex-end" : "flex-start",
      }}
    >
      <div
        className={styles.bubble}
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        <div className={styles.text} style={{ color: textColor }}>
          {children}
        </div>

        {direction === "left" ? (
          <div
            className={styles.triangleLeft}
            style={{ borderRightColor: backgroundColor }}
          />
        ) : (
          <div
            className={styles.triangleRight}
            style={{ borderLeftColor: backgroundColor }}
          />
        )}
      </div>
    </div>
  );
}
