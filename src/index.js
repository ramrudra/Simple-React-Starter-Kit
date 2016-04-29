import React, { Component } from 'react';
import ReactDom from 'react-dom';

// Components
import MenuBar from './components/menu_bar';
import Footer from './components/footer';

class App extends Component {
    render() {
        return(
            <div>
            </div>
        );
    }
}


ReactDom.render(<MenuBar />, document.querySelector('.navbar-fixed-top'));
ReactDom.render(<Footer />, document.querySelector('footer'));
