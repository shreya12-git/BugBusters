import { Route,Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SkillsPage from "./pages/SkillsPage";

function App() {
  return (
    <main class="">
      {/* <h1 class="text-3xl text-center font-bold underline"></h1>
      <p class="text-center text-xl"></p>
      <img src="https://bit.ly/3wsmzTy" alt="meme" class="mx-auto" /> */}
      <div className="App">
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/loginsignup" element={<LoginPage></LoginPage>}></Route>
        <Route path="/skillsPage" element={<SkillsPage></SkillsPage>}></Route>
        {/* <Route path="/afterhomepage" element={<AfterHomePage></AfterHomePage>}></Route> */}
      </Routes>
      </div>
    </main>
  );
}

export default App;
