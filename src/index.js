import React from "react";
import ReactDOM from "react-dom";
import App from "./pagesApp";
import {Provider} from 'react-redux'
import store from './redux/store'
import './style.css'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
