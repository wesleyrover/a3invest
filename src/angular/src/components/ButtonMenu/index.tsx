// import { useTheme } from "styled-components";
import * as S from "./styles";
import { Link } from "react-router-dom";

interface ButtonIconProps {
  text: string;
  icon: string;
  route: string;
}

const ButtonMenu: React.FC<ButtonIconProps> = ({ text, icon, route }) => {
  // const currentTheme = useTheme();
  return (
    <>
      <Link to={route} style={{ textDecoration: "none" }}>
        <S.Container>
          <S.Icon logo={icon} />
          <S.Text>{text}</S.Text>
        </S.Container>
      </Link>
    </>
  );
};

export default ButtonMenu;