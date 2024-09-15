import { Link } from "react-router-dom";
import * as S from "./styles";

interface ButtonIconProps {
  title: string;
  text: string;
  icon: string;
  route: string;
}

const CardBoard: React.FC<ButtonIconProps> = ({ title, text, icon, route }) => {
  return (
    <>
      <Link to={route} style={{ textDecoration: "none", display: "flex" }}>
        <S.Container>
          <S.Icon logo={icon} />
          <S.Title>{title}</S.Title>
          <S.Text>{text}</S.Text>
        </S.Container>
      </Link>
    </>
  );
};

export default CardBoard;