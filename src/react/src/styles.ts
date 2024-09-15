// styles.js
import styled, { createGlobalStyle } from 'styled-components';
//import svgLogo from './assets/logo.svg';
export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    font-family: 'Inter', sans-serif;
    /* font-family: 'Inter', sans-serif; */
    background-color: #f4f4f4;
  }
  #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const lightTheme = {
  body: '#FFFFFF',
  text: '#333333',
  primary: '#333333',
  secondary: '#FFFFFF',
  blueDefault:'213E7F',
  blueGft: '#1A2951',
  drawerBackground:"#213E7F",
  headerBackground:"#162558",
};

export const darkTheme = {
  body: '#000',
  text: '#FFF',
  primary: '#FFF',
  secondary: '#000',
  blueDefault:'213E7F',
  blueGft: '#1A2951',
  drawerBackground:"#213E7F",
  headerBackground:"#162558",
};

export const Container = styled.div`
display: flex;
flex-direction: row;
`;

// export const Button = styled.button`
//   background-color: ${({ theme }) => theme.primary};
//   color: ${({ theme }) => theme.secondary};
//   border: none;
//   padding: 10px 20px;
//   margin: 10px;
//   cursor: pointer;
//   transition: background-color 0.25s linear;

//   &:hover {
//     background-color: ${({ theme }) => theme.primary};
//   }
// `;

// export const Title = styled.h1`
//   color: ${({ theme }) => theme.text};
// `;
/* background-image: url(${svgLogo}); */
export const LogoHeader = styled.div`
width: 100px;
  height: 20px;
  
  /* background-size: contain; // Ajuste conforme necessário */
  background-repeat: no-repeat;
  margin-left: 16px;
  margin-top: 18px;
`;
