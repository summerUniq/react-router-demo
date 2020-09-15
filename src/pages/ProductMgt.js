import React from 'react';
import { Route, Link } from 'react-router-dom'

class ProductMgt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h3>ProductMgt</h3>
                <Link to="/management/add">新增商品</Link>
                <Link to="/management/search">搜索商品</Link>
                <Route path="/management/add" render={({ name = 'add management'}) => (<div>add {name}</div>)} />
                <Route path="/management/search" render={(props) => (<div>search</div>)} />
            </div>
        );
    }
}

export default ProductMgt;