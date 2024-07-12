import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditNotes from "./pages/EditNotes";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editNote/:id" element={<EditNotes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
