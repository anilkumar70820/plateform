import "./App.css";
import Funnel from "./components/Funnel";
import Platform from "./components/Platform";
import TrustedBy from "./components/TrustedBy";

function App() {
  return (
    <div className="mx-5">
      <div className="max-w-[1514px] mx-auto border-l  border-l-[#C5AA73] border-r border-r-[#C5AA73] border-opacity-50">
        <Platform />
        <Funnel />
        <TrustedBy />
      </div>
    </div>
  );
}

export default App;
