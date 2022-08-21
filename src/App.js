import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components";
import {
  About,
  Contact,
  Gallery,
  Home,
  NotFound,
  Plans,
  Trainers
} from "./pages";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
