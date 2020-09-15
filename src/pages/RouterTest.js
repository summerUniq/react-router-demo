import React, {Component} from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import ProductList from './Index'
import ProductMgt from './ProductMgt'

function Management11111() {
    return (
        <div>management11111 new</div>
    )
}

  function Detail({match, history, location}) {
      console.log(match, history, location);
      return (
        <div>
           ProductMgt
        <p>{match.params.name}</p> </div>
      )
  }

class RouterTest extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <BrowserRouter>
                <nav>
                    <Link to="/">商品列表</Link>
                    <Link to="/management">商品管理</Link>
                    <Link to="/detail/web">web全栈</Link>
                </nav>
                <div>
                <Switch>
                    <Route exact path="/" component={ProductList}/>
                    <Route exact path="/management" component={ProductMgt}/>
                    <Route path="/management/1111" component={Management11111}/>
                    <Route path="/detail/:name" component={Detail}/>
                </Switch>
                </div>
            </BrowserRouter>
         );
    }
}
 
export default RouterTest;