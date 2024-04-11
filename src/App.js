import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import AnimeInfo from "./Pages/animeInfo";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MostViewedComponent from "./Pages/mostviewd";
import GenreComponent from "./Pages/genre";
import CategoriesPage from "./Pages/categoriesPage";

let darkMode = true;

const darkTheme = createTheme({
  palette: {
    mode: darkMode ? "dark" : "light",
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/anime/:id" element={<AnimeInfo />}></Route>
          <Route
            path="/anime/mostviewed"
            element={<MostViewedComponent />}
          ></Route>
          <Route path="/anime/genre" element={<GenreComponent />}></Route>
          <Route
            path="/anime/category/:categoryId"
            element={<CategoriesPage />}
          ></Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
