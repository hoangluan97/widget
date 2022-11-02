import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col justify-center items-center pt-5">
      <div className="flex flex-col justify-center items-center w-[60%] min-w-[600px] border-2 border-black p-3 space-y-4">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
