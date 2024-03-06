import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/auth">HOME</Link>
      &nbsp;&nbsp;
      <Link to="/my-closet">MY CLOSET</Link>
      &nbsp;&nbsp;
      <Link to="/upload-new-item">UPLOAD NEW ITEM</Link>
      &nbsp;&nbsp;
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>LOG OUT</Link>
    </nav>
  );
}