import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Insurance from "./pages/Insurance";
import Static from "./pages/Static";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/static" element={<Static />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

    </BrowserRouter>
  );
}
