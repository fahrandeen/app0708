import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header';
import Menu from './Menu'
import Footer from './Footer';
import Stockist from './components/Stockist';
import StockistNew from './components/StockistNew';
import Test from './components/test';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Menu />
          <Route path="/stockist" component={Stockist} />
          <Route path = '/stockistnew' component={StockistNew} />
          <Route path = '/test' component={Test} />
          <Route path='/stockist/:filter?' render={({match}) =>(
            <Stockist   component={Stockist} filter={match.params.filter}/>
          )}>
          </Route>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App


