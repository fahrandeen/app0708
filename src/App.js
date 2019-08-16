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
          <Route path = '/test' component={Test} />
          <Route path = '/stockistnew' component={StockistNew} />
          <Route path="/stockist/:filter" render={({match}) =>(
            <Stockist filter={match.params.filter}/>
          )}/>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App


