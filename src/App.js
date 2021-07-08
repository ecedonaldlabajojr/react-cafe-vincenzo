import './App.css';
import Home from './components/Pages/Home'
import Shop from './components/Pages/Shop'
import Navbar from './components/Layout/Navbar/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CartDrawer from './components/Cart/CartDrawer'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </Router>
  );
}

export default App;
