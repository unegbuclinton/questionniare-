import Login from "./components/Login";
import WelcomePage from "./components/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import FirstStep from "./components/First-step";
import Questionnaire from "./components/Questionniare";
import CreateProfile from "./components/CreateProfile";
function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/first-step" element={<FirstStep />} />
          <Route exact path="/create-profile" element={<CreateProfile />} />
          <Route exact path="/questionniare" element={<Questionnaire />} />
          <Route exact path="/admin-dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
