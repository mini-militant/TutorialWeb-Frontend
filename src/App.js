import React from 'react'
import {Router,Route,Switch} from 'react-router-dom'
import { createBrowserHistory } from "history";
import Home from './rootComponents/Home'
import IndexTutorial from './components/ReactTutorial/IndexTutorial'


class App extends React.Component {
  render() {
    const history=createBrowserHistory();
    return (
      <div >
      <Router history={history} >
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route  path='/react' component={IndexTutorial}/>
        <Route  path='/redux' component={IndexTutorial}/>
        <Route  path='/js' component={IndexTutorial}/>
      </Switch>
      </Router>

      </div>
    );
  }
}

export default App;
