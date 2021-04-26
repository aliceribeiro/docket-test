import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

import '../styles/pages/landing.scss';

function Landing() {
  return (
    <Fragment>
      <div className="page-landing">
        <Header />
        <main>
          <div className="text-content">
            <h1>Venha trabalhar na Docket!</h1>
            <p>Bem-vindo(a) à nossa página de cadastro.</p>
          </div>
          <div className="btn-landing">
            <Link to="/submit-candidate" className="btn-primary">Realizar cadastro</Link>
          </div>
        </main>
        <Footer />
      </div>
    </Fragment>
  )
}

export default Landing;