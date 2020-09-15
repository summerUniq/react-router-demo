import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Error404 from './Error404'
import PrivateRoute from './PrivateRoute';
import Login from './Login'
// import ProductList from './Index'
// import ProductMgt from './ProductMgt'

const ProductList = lazy(() => import('./Index'))
const ProductMgt = lazy(() => import('./ProductMgt'))

function Management11111() {
    return (
        <div>management11111 new</div>
    )
}

function Detail({ match, history, location }) {
    console.log(match, history, location);
    return (
        <div>
            Detail
            <p>{match.params.name}</p> </div>
    )
}

class RouterTest extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                 <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                            <Route exact path="/" component={ProductList} />
                            <PrivateRoute path="/management" component={ProductMgt} exact/>
                            <Route exact path="/management/1111" component={Management11111} />
                            <Route exact path="/detail/:name" component={Detail} />
                            <Route exact path="/login" component={Login} />
                            <Route component={Error404} />
                    </Switch>
              </Suspense>
                </div>
            </BrowserRouter>
        );
    }
}

export default RouterTest;