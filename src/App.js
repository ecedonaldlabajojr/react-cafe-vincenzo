import './App.css';
import Home from './components/Pages/Home'
import Shop from './components/Pages/Shop'
import ShopItemPage from './components/Pages/ShopItemPage'
import Navbar from './components/Layout/Navbar/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/UI/ScrollToTop'
import Footer from './components/Layout/Footer/Footer'
import AvailableSoon from './components/Pages/AvailableSoon';

String.prototype.isNullOrWhiteSpace = function () { return (!this || this.length === 0 || /^\s*$/.test(this)) }

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/shop' exact component={Shop} />
        <Route path='/shop/roasted-beans/:productId' component={ShopItemPage} />

        <Route path='/search' component={AvailableSoon} />
        <Route path='/brew-guide' component={AvailableSoon} />
        <Route path='/menu' component={AvailableSoon} />
        <Route path='/user' component={AvailableSoon} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
