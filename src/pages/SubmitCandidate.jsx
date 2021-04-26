import { Fragment } from "react";

import CandidateForm from "../components/CandidateForm/CandidateForm";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function SubmitCandidate() {
  return (
    <Fragment>
      <Header />
      <CandidateForm />
      <Footer />
    </Fragment>
  )
}

export default SubmitCandidate;