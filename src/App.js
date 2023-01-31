import { Routes, Route } from "react-router-dom";

/*  */
import Home from "./screens/Home";
import ListEvent from "./screens/ListEvent";
import ListBanner from "./screens/ListBanner";
import Banner from "./screens/Banner";
import Event from "./screens/Event";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<ListEvent />} />
        <Route path="/event/:contid" element={<Event />} />
        <Route path="/banner" element={<ListBanner />} />
        <Route path="/banner/:contid" element={<Banner />} />
      </Routes>
    </div>
  );
}

export default App;
