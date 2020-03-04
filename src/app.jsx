import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import AppRouters from './routers/AppRouters.jsx'


const app = (
   <AppRouters />
)


ReactDOM.render(app, document.getElementById("root"));