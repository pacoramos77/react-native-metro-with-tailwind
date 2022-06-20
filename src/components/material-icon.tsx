import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { styled } from "tailwindcss-react-native";

type Props = {
  name: keyof typeof MaterialIcons.glyphMap;
  size: number;
  iconClassName?: string;
};

const Icon = styled(MaterialIcons, "");

const MaterialIcon: React.FC<Props> = ({
  name,
  size = 24,
  iconClassName = "",
}) => {
  return (
    <Icon
      name={name}
      size={size}
      className={[
        "rounded-full bg-slate-600 text-slate-100 p-3",
        iconClassName,
      ].join(" ")}
    />
  );
};

export default styled(MaterialIcon, "mb-5 ");
