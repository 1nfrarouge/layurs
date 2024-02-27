import React from 'react';
import { useNavigate } from 'react-router-dom';

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
        <button className="login-button" onClick={goToLogin}>LOG IN</button>
      </header>
      <main>
        <div className="logo" onClick={goToSignup}>
          <p className="slogan">CLOSET ORGANIZATION APP</p>
          <h1>LAYURS</h1>
        </div>
      </main>
      <footer>
        <button className="signup-button" onClick={goToSignup}>SIGN UP</button>
      </footer>
    </div>
  );
};

export default LandingPage;
