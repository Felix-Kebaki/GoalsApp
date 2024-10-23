import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import './index.css'

function App() {
  return (
    <>
      <Router>
        <div
          style={{
            minHeight: "100dvh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
          <div className="FooterAppDiv">
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
