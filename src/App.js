import { Routes, Route } from "react-router-dom";

/*  */
import Home from "./screens/Home";
import ListEvent from "./screens/ListEvent";
import ListBanner from "./screens/ListBanner";

import Banner from "./screens/Banner";
import B2b3 from "./screens/B2b3";
import B2b2 from "./screens/B2b2";
import B2c2 from "./screens/B2c2";

import Event from "./screens/Event";
import EventPrice from "./screens/EventPrice";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<ListEvent />} />
        <Route path="/event/eventprice" element={<EventPrice />} />
        <Route path="/event/:contid" element={<Event />} />
        <Route path="/banner" element={<ListBanner />} />
        <Route path="/banner/:contid" element={<Banner />} />
        <Route path="/banner/b2b3" element={<B2b3 />} />
        <Route path="/banner/b2b2" element={<B2b2 />} />
        <Route path="/banner/b2c2" element={<B2c2 />} />
        {/* <Route path="/banner/b2c3" element={<B2c3 />} /> */}
      </Routes>
    </div>
  );
}

export default App;
