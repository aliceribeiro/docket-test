import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import SubmitCandidate from './pages/SubmitCandidate';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/submit-candidate" component={SubmitCandidate} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;