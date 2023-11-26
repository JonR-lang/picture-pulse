// import { useEffect } from "react";
import Header from "./Header";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Details from "./pages/Details";
import Categories from "./pages/Categories";
import { Routes, Route } from "react-router-dom";

function App() {
  // a0c4cbde
  const API_URL = "http://www.omdbapi.com/?apikey=a0c4cbde";

  // async function fetchData(title) {
  //   const response = await fetch(`${API_URL}&s=${title}`);
  //   const data = await response.json();
  //   console.log(data);
  // }

  // useEffect(() => {
  //   fetchData("Spiderman");
  // }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='categories' element={<Categories />} />
        <Route path='search/:id' element={<Search />} />
        <Route path='details/:id' element={<Details />} />
        <Route path='/search/:id/details/:id' element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
