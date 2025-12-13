import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Colors from "../../enums/colors";

type Props = {
  title: string;
};

const Separator = ({ title }: Props) => {
  const { theme } = useContext(UserContext);
  const fontColor = theme === "dark" ? Colors.FONT_DARK : Colors.FONT_LIGHT;
  return (
    <div
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: "84%",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          flex: 1,
          height: 3,
          backgroundColor: fontColor,
        }}
      />
      <div>
        <span
          style={{
            marginRight: 5,
            marginLeft: 5,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: fontColor,
          }}
        >
          {title}
        </span>
      </div>
      <div
        style={{
          flex: 1,
          height: 3,
          backgroundColor: fontColor,
        }}
      />
    </div>
  );
};

export default Separator;
