import Login from "./components/Login";
import WelcomePage from "./components/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import FirstStep from "./components/First-step";
import Questionnaire from "./components/Questionniare";
import CreateProfile from "./components/CreateProfile";
import Summary from "./components/Summary";
import ThankYou from "./components/ThankYou";
function App() {
  return (
    <div className="font-poppins">
      <Router>
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route exact path="/admin-login" element={<Login />} />
          <Route exact path="/first-step" element={<FirstStep />} />
          <Route exact path="/create-profile" element={<CreateProfile />} />
          <Route exact path="/questionniare" element={<Questionnaire />} />
          <Route exact path="/admin-dashboard" element={<Dashboard />} />
          <Route exact path="/thank-you" element={<ThankYou />} />
          <Route exact path="/summary" element={<Summary />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
