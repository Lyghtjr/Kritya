import './App.css';
import {Home,Navbar} from './Components'
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
