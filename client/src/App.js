//import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import Footer from "./components/views/Footers/Footer"
import NavBar from './components/views/NavBar/NavBar';

import Auth from './hoc/auth'


const LandingP = Auth(LandingPage, null);
const LoginP = Auth(LoginPage, false);
const RegisterP = Auth(RegisterPage, false);

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Routes>
          <Route exact path="/" element={<LandingP />} />
          <Route exact path="/login" element={<LoginP />} />
          <Route exact path="/register" element={<RegisterP />} />
        </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
