import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{ id: 1, title: '标题-1' }, { id: 2, title: '标题-2' }, { id: 3, title: '标题-3' },
            ]
        }
    }
    render() {
        return (<ul>
            {
                this.state.list.map((listItem) => {
                return <li key={listItem.id}>
                    <Link to={`/list/${listItem.id}`}>{listItem.title}</Link>
                </li>
                })
            }
        </ul>);
    }
}

export default Index;