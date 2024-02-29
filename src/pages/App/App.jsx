import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import LandingPage from '../LandingPage/LandingPage';
import UploadNewItemPage from '../UploadNewItemPage/UploadNewItemPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const location = useLocation();

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/upload-new-item" element={<UploadNewItemPage />} />
            </Routes>
          </>
          :
          <>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/auth" element={<AuthPage setUser={setUser} showSignUp={location.state?.showSignUp} />} />
            </Routes>
          </>
      }
    </main>
  );
}
