import '../Header/header.scss';

import logo from '../../assets/logo.svg';

function Header() {
  return (
    <header>
      <img src={logo} className="logo" alt="Logo Docket"/>
    </header>
  )
}

export default Header;
