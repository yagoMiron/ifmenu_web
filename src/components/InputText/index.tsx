// componente não implementado

import styles from "./styles.module.css";

type Props = {
  setter: (text: string) => void;
  placeholder: string;
  title: string;
  value: string;
  customValidity?: string;
};

const InputText = ({
  value,
  setter,
  placeholder,
  title,
  customValidity,
}: Props) => {
  return (
    <div>
      <label className={styles.title}>{title}:</label>
      <input
        className={styles.input}
        type="text"
        value={value}
        placeholder={placeholder}
        maxLength={255}
        onInvalid={(e) => {
          if (customValidity) {
            e.currentTarget.setCustomValidity(customValidity);
          }
        }}
        onChange={(e) => {
          if (setter) {
            const v = e.target.value;
            setter(v);
            e.currentTarget.setCustomValidity("");
          }
        }}
      />
    </div>
  );
};

export default InputText;
