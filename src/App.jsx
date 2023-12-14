import "./App.css";
import MainMenu from "./Components/MainMenu/MainMenu";
import SheikTab from "./Components/Sheik/SheikTab.Jsx";
import { Link, Route, Routes } from "react-router-dom";
import MarthTab from "./Components/Marth/MarthTab";

function App() {
  return (
    <>
    <div className=" flex flex-col bg-UFD-nameplate py-3  border-b-4 border-b-orange-400  " >
      <h1 className="  self-center min-w-0 text-3xl font-poppins font-bold text-center text-UFD-Combo-bg hover:underline hover:text-neutral-700" ><Link to="/">Combo App</Link></h1> 
      </div>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/Sheik" element={<SheikTab />} />
        <Route path="/Marth" element={<MarthTab />} />
      </Routes>
    </>
  );
}

export default App;
