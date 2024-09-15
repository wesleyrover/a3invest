import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, lightTheme, darkTheme, Container } from "./styles";
import Drawer from "./components/Drawer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Seus componentes de página
import Home from "./pages/Home";

function App() {
  const [theme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <Container>
          <Drawer />
          <>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
