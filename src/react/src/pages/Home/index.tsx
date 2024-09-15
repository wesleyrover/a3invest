import CardBoard from "../../components/CardBoard";
import * as S from "./styles";

const Home = () => {
  return (
    <S.Container>
      <S.Title>Select what you want to do</S.Title>
      <S.ConteinerButtons>
        <CardBoard
          title={"Documenter"}
          icon={"DocumenterIcon"}
          route={"/documenter"}
          text={"Lorem ipsum dolor sit a consectetur adipiscing."}
        />
        <CardBoard
          title={"Story creator"}
          icon={"StoryIcon"}
          route={"/story-creator"}
          text={"Lorem ipsum dolor sit a consectetur adipiscing."}
        />
      </S.ConteinerButtons>
    </S.Container>
  );
};

export default Home;
