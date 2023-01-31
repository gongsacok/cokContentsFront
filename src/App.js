import { Routes, Route } from "react-router-dom";

/*  */
import Home from "./screens/Home";
import ListEvent from "./screens/ListEvent";
import ListBanner from "./screens/ListBanner";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<ListEvent />} />
        <Route path="/banner" element={<ListBanner />} />
      </Routes>
    </div>
  );
}

export default App;
