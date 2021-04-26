import '../Header/header.scss';

import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} className="logo" alt="Logo Docket"/>
      </Link>
    </header>
  )
}

export default Header;
