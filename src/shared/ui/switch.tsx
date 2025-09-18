import { Switch as _Switch } from "react-native";

type Props = {
  value: boolean;
  onChange: () => void;
};

export const Switch: React.FC<Props> = ({ onChange, value }) => (
  <_Switch
    trackColor={{ false: "#222", true: "#222" }}
    thumbColor={value ? "#f5dd4b" : "#f4f3f4"}
    onChange={onChange}
    value={value}
  />
);
