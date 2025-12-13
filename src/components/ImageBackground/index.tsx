import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
  theme: string;
};

const ImageBackground = ({ children, theme }: Props) => {
  return (
    <main
      className={`${styles.container} ${
        theme === "dark" ? styles.background_dark : styles.background_light
      }`}
    >
      {children}
    </main>
  );
};

export default ImageBackground;
