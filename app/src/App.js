import FirstStep from "./components/FirstStep";
import Login from "./components/Login";
import ThankYou from "./components/ThankYou";
import WelcomePage from "./components/Welcome";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Questionnaire from "./components/Questionnaire";
import Dashboard from "./components/Dashboard";
function App() {
  return (
 

<div className="">

  <Router>
    <Routes>
      <Route exact path='/' element={< WelcomePage />} />
      <Route exact path='/login' element={ <Login /> } />
      <Route exact path='/thankYou' element={<ThankYou />} />
      <Route exact path='/first-step' element={<FirstStep />} />
      <Route exact path='/questionniare' element={<Questionnaire />} />
      <Route exact path='/admin-dashboard' element={<Dashboard />} />
    </Routes>
  </Router>
  
  
</div>
 
  );
}

export default App;
