import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'

const LandingPage = () => {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate('/auth', { state: { showSignUp: true } });
  };

  const goToLogin = () => {
    navigate('/auth', { state: { showSignUp: false } });
  };

  return (
    <div className="landing-page">
      <header>
        <p className="handle" onClick={goToSignup}>@LAYURS</p>
        <img src="/images/logo.png" alt="Heart Logo" className="smaller-heart-logo"/>
          <p className="slogan">CLOSET ORGANIZATION APP</p>
        <button className="login-button" onClick={goToLogin}>LOG IN</button>
      </header>
      <main>
        <div className="logo" onClick={goToSignup}>
          <h1>LAYURS</h1>
        <img src="/images/heart.png" alt="Large Heart" className="large-heart"/>
        </div>
      </main>
      <footer>
        <img src="/images/barcode.png" alt="Barcode" className="barcode"/>
        <button className="signup-button" onClick={goToSignup}>SIGN UP</button>
      </footer>
    </div>
  );
};

export default LandingPage;
