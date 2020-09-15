import React, {Component} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import ProductList from './Index'


// function ProductList(props) {
//     return <div>ProductList</div>;
//   }
  function ProductMgt(props) {
    return <div>ProductMgt</div>;
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
                    <Route exact path="/" component={ProductList}/>
                    <Route path="/management" component={ProductMgt}/>
                    <Route path="/detail/:name" component={Detail}/>
                </div>
            </BrowserRouter>
         );
    }
}
 
export default RouterTest;