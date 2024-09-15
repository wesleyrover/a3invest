import * as S from "./styles";
import { LogoHeader } from "../../styles";
import ButtonMenu from "../ButtonMenu";
// import HomeIcon from "../../assets/icons/home.svg";
// import documenterIcon from "../../assets/icons/documenter.svg";
// import HistoryIcon from "../../assets/icons/story_cretor.svg";
// import FolderIcon from "../../assets/icons/folder.svg";

const Drawer = () => {
  return (
    <>
      <S.DrawerDiv>
        <S.HeaderDiv>
          <LogoHeader />
        </S.HeaderDiv>
        <ButtonMenu text={"Home"} icon={"null"} route={"/"} />
        <ButtonMenu
          text={"Documenter"}
          icon={"documenterIcon"}
          route={"/documenter"}
        />
        <ButtonMenu
          text={"Story creator"}
          icon={"HistoryIcon"}
          route={"/story-creator"}
        />
        <S.Line></S.Line>
        <ButtonMenu text={"Folder"} icon={"FolderIcon"} route={""} />
      </S.DrawerDiv>
    </>
  );
};

export default Drawer;
