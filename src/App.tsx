import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Test from "./pages/test";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/test" element={<Test />}></Route>
    </Routes>
  );
}

export default App;
