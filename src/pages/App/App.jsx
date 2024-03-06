import * as clothingAPI from '../../utilities/clothing-api';
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import LandingPage from '../LandingPage/LandingPage';
import UploadNewItemPage from '../UploadNewItemPage/UploadNewItemPage';
import MyClosetPage from '../MyClosetPage/MyClosetPage';
import EditItemPage from '../EditItemPage/EditItemPage';
import HomePage from '../HomePage/HomePage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [clothes, setClothes] = useState([]);
  const location = useLocation();

  async function handleAddClothing(formData) {
    const clothing = await clothingAPI.add(formData);
    setClothes([...clothes, clothing]);
  }

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/my-closet" element={<MyClosetPage />} />
            <Route path="/upload-new-item" element={<UploadNewItemPage handleAddClothing={handleAddClothing} />} />
            <Route path="/edit-item/:id" element={<EditItemPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage setUser={setUser} showSignUp={location.state?.showSignUp} />} />
        </Routes>
      )}
    </main>
  );
}
