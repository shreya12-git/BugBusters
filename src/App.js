import { Route,Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Card from "./components/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import ProfileForm from "./components/ProfileForm";

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
        
        <Route path="/projectDetails" element={<ProjectDetails></ProjectDetails>}></Route>
        <Route path="/profile" element={<ProfileForm></ProfileForm>}></Route>



      </Routes>
      </div>
    </main>
  );
}

export default App;
