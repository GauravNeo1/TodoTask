import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Logintodo from './components/Logintodo';
import Registertodo from './components/Registertodo';
import Todo from './components/Todo';
function App() {
  return (
    <div className="App">
     
        <Router>
        <Switch>
          <Route path="/" exact component={Registertodo}/>
          <Route path="/logintodo" exact component={Logintodo} />
          <Route path="/todo" exact component={Todo} />
        </Switch>
      </Router> 
    
    </div>
  );
}

export default App;