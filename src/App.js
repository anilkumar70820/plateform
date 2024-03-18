import logo from "./logo.svg";
import "./App.css";
import Platform from "./components/Platform";
import TrustedBy from "./components/TrustedBy";
import Funnel from "./components/Funnel";

function App() {
  return (
    <div className="max-w-[1514px] mx-auto border-l  border-l-[#C5AA73] border-r border-r-[#C5AA73] border-opacity-50">
      <Platform />
      <Funnel />
      <TrustedBy />
    </div>
  );
}

export default App;
