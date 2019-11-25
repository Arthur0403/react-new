import './Menu.css';

import React, { Component } from 'react';

export default class Menu extends Component {
   
    render() {
        const { items } = this.props;
        return (
            <ul>
                {items.map((item, idx) => <li key={idx}><a href={item.href}>{item.title}</a></li>)}
            </ul>
        )
    }
}