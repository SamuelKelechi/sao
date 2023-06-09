import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Bio from "./Components/Bio/Bio";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/"  Component={Home}/>
          {/* <Route path="/bio"  Component={Bio}/> */}
        </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
