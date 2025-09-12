import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Create from "./pages/create";
import NoteDetail from "./pages/NoteDetail.jsx";
import toast from "react-hot-toast";
import './index.css'
const App = () => {
  return <div className="realtive h-full w-full"  >
    {/* <button onClick= {() => toast.success("Hello from toast!")} className="btn btn-outline" >Click Me</button> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/note" element={<NoteDetail />} />
    </Routes>
    </div>;
}
export default App;