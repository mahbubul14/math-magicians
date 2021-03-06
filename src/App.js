import { Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quote from './components/Quote';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/calculator">
          <Calculator />
        </Route>
        <Route path="/quote">
          <Quote />
        </Route>
      </Switch>
    </>
  );
}
export default App;
